import { AIResponse, ChatMessage } from "./chatTypes.js";
import { runShellCommand } from "./commandRunner.js";
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
                        content: `You are a helpful coding assistant. When responding to the user, classify the reply into one of two JSON structured formats:
                            1. If the response is a terminal command that can be executed on the user's linux machine, respond with:
                                {
                                  "type": "command",
                                  "command": "<terminal_command_here>",
                                  "description": "<short explanation of what the command does>"
                                }

                            2. If the response is an explanation or answer (with or without code), respond with:
                                {
                                  "type": "explanation",
                                  "text": "<your explanation here, include code snippets if necessary>"
                                }
                        Always be clear and concise. Do not add anything outside these JSON structures.`
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

export const processAIResponse = (
    aiResponse: string,
    setExecutingCmd: React.Dispatch<React.SetStateAction<boolean>>,
    setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>
): void => {
    try {
        const responseObj: AIResponse = JSON.parse(aiResponse) as AIResponse;
        let message = '';
        if (responseObj.type === "command") {
            try {
                setExecutingCmd(true);
                const { command, description } = responseObj;
                message = `${description}\n\nCommand executing : ${command}`;

                runShellCommand(command).then((stdout) => {
                    const outputMessage = {
                        role: 'system',
                        content: `Command output:\n\`\`\`\n${stdout}\n\`\`\``,
                        isTerminalOutput: true
                    } as ChatMessage;
                    setMessages(prev => [...prev, outputMessage]);
                    setExecutingCmd(false);
                }).catch((err) => {
                    const errorMessage = {
                        role: 'system',
                        content: `Error while executing:\n\`\`\`\n${err}\n\`\`\``,
                        isTerminalOutput: true
                    } as ChatMessage;
                    setMessages(prev => [...prev, errorMessage]);
                    setExecutingCmd(false);
                });

            } catch (err) {
                const outputMessage = {
                    role: 'system',
                    content: `Command output:\n\`\`\`\n${(err as Error).message}\n\`\`\``,
                    isTerminalOutput: true
                } as ChatMessage;
                setMessages(prev => [...prev, outputMessage]);
                setExecutingCmd(false);
            }
        } else if (responseObj.type === "explanation") message = responseObj.text;
        else throw new Error("Unknown response type from AI");
        const aiMessage = { role: 'system', content: message } as ChatMessage;
        setMessages(prev => [...prev, aiMessage]);
    } catch (jsonError) {
        console.warn('Response is not in expected JSON format, displaying as raw text:', jsonError);
        const aiMessage = {
            role: 'system',
            content: `The AI provided a response in an unexpected format. Here's the raw response:\n\n${aiResponse}`
        } as ChatMessage;
        setMessages(prev => [...prev, aiMessage]);
    }
}