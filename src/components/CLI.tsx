import React, { memo, useState } from 'react'
import SessionInfo from './SessionInfo.js'
import ChatUI from './ChatMessages.js';
import UserPrompt from './UserPrompt.js';
import { sendToAi } from '../utils/aiClient.js';
import { Model } from '../utils/models.js';

export interface ChatMessage {
    role: 'user' | 'system',
    content: string
}

const MemoizedSessionInfo = memo(SessionInfo);
const MemoizedChatUI = memo(ChatUI);

const CLI = ({ apiKey }: { apiKey: string }) => {

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
            <MemoizedSessionInfo />
            <MemoizedChatUI messages={messages} />
            <UserPrompt sendUserPrompt={sendUserPrompt} isAwaitingResponse={isAwaitingResponse} />
        </>
    )
}
export default CLI
