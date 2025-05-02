import { Model } from "./models.js";

export const sendToAi = async (content: string, model: Model, apiKey: string) => {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model,
            messages: [{ role: "user", content }]
        })
    });

    const data = await res.json();
    return data.choices[0].message.content
}