import { Model } from "./models.js";

export const queryAiModel = async (content: string, model: Model, apiKey: string) => {
    try {
        const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model,
                messages: [
                    {
                        role: "system",
                        content: "You are a helpful coding assistant. Answer programming-related questions clearly, concisely and in short. When the user asks for code, provide only the relevant snippets or explanations unless requested otherwise."
                    },
                    { role: "user", content }
                ]
            })
        });

        const data = await res.json();
        const message = data.choices[0].message.content
        return message;
    } catch (err) {
        console.error('Failed to get response from AI : ', err);
        return `Error: ${(err as Error).message || 'Unknown error occurred'}`
    }
}