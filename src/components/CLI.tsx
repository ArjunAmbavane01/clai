import React, { memo, useState } from 'react'
import SessionInfo from './SessionInfo.js'
import ChatUI from './ChatUI.js';
import UserPrompt from './UserPrompt.js';
import { sendToAi } from '../utils/aiClient.js';
import { Model } from '../utils/models.js';
import ModelUI from './ModelUI.js';

export interface ChatMessage {
    role: 'user' | 'system',
    content: string
}

const sampleMessages: ChatMessage[] = [
    {
        role: 'user',
        content: 'Can you write a function to sort an array of numbers in JavaScript?',
    },
    {
        role: 'system',
        content: `Sure! Here's a simple implementation:\n\n\`\`\`js\nfunction sortArray(arr) {\n  return arr.sort((a, b) => a - b);\n}\n\`\`\``,
    },
    {
        role: 'user',
        content: 'What if I want to sort it in descending order?',
    },
    {
        role: 'system',
        content: `Just reverse the sort comparator:\n\n\`\`\`js\nfunction sortDescending(arr) {\n  return arr.sort((a, b) => b - a);\n}\n\`\`\``,
    },
];

const MemoizedSessionInfo = memo(SessionInfo);
const MemoizedChatUI = memo(ChatUI);
const MemoizedModelUI = memo(ModelUI);

const CLI = ({ apiKey }: { apiKey: string }) => {

    const [ui, setUI] = useState<'chatUI' | 'modelUI'>('chatUI');
    const [model, setModel] = useState<Model>('mistralai/mistral-7b-instruct');
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [isAwaitingResponse, setIsAwaitingResponse] = useState<boolean>(false);

    const sendUserPrompt = async (userInput: string) => {
        setIsAwaitingResponse(c => !c);
        setMessages(prev => [...prev, { role: 'user', content: userInput }]);

        const aiResponse = await sendToAi(userInput, model, apiKey);
        console.log(aiResponse)
        setMessages(prev => [...prev, { role: 'system', content: aiResponse }]);
        setIsAwaitingResponse(c => !c);
    }

    return (
        <>
            <MemoizedSessionInfo model={model} />
            {ui === 'chatUI' && (
                <>
                    {messages.length > 0 && <MemoizedChatUI messages={messages} />}
                    <UserPrompt sendUserPrompt={sendUserPrompt} isAwaitingResponse={isAwaitingResponse} setUI={setUI} />
                </>
            )}
            {ui === 'modelUI' && <MemoizedModelUI setUI={setUI} setModel={setModel} />}
        </>
    )
}
export default CLI
