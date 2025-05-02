import React, { useState } from 'react'
import SessionInfo from './SessionInfo.js'
import ChatUI from './ChatMessages.js';
import UserPrompt from './UserPrompt.js';

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

export interface ChatMessage {
    role: 'user' | 'system',
    content: string
}

const CLI = () => {
    const [messages, setMessages] = useState<ChatMessage[]>(sampleMessages);
    const [isAwaitingResponse, setIsAwaitingResponse] = useState<boolean>(false);


    const sendUserPrompt = (userInput: string) => {
        setIsAwaitingResponse(c=>!c);
        setMessages([...messages, { role: 'user', content: userInput }]);
        
    }

    return (
        <>
            <SessionInfo />
            <ChatUI messages={messages} />
            <UserPrompt sendUserPrompt={sendUserPrompt} isAwaitingResponse={isAwaitingResponse} />
        </>
    )
}

export default CLI
