import React, { memo, useState } from 'react';
import SessionInfo from './SessionInfo.js';
import ChatUI from './ChatMessages.js';
import UserPrompt from './UserPrompt.js';
const sampleMessages = [
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
const MemoizedChatUI = memo(ChatUI);
const MemoizedSessionInfo = memo(SessionInfo);
const CLI = () => {
    const [messages, setMessages] = useState(sampleMessages);
    const [isAwaitingResponse, setIsAwaitingResponse] = useState(false);
    const sendUserPrompt = (userInput) => {
        setIsAwaitingResponse(c => !c);
        setMessages([...messages, { role: 'user', content: userInput }]);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(MemoizedSessionInfo, null),
        React.createElement(MemoizedChatUI, { messages: messages }),
        React.createElement(UserPrompt, { sendUserPrompt: sendUserPrompt, isAwaitingResponse: isAwaitingResponse })));
};
export default CLI;
