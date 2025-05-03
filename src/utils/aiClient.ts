import { Model } from "./models.js";

export const sendToAi = async (content: string, model: Model, apiKey: string) => {
    try{
        const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model,
                messages: [
                    { role: "system", content: "You are a helpful assistant. Keep responses concise and relevant." },
                    { role: "user", content }
                  ]
            })
        });
        
        const data = await res.json();
        const message = data.choices[0].message.content 
        return message;
    } catch(err){
        console.error('Failed to get response from AI : ',err);
        return `Error: ${(err as Error).message || 'Unknown error occurred'}`
    }
}