import React, { useState } from 'react'
import SessionInfo from './SessionInfo.js'
import ChatUI from './ChatMessages.js';

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
    return (
        <>
            <SessionInfo />
            <ChatUI messages={messages}/>
        </>
    )
}

export default CLI
