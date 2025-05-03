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
        setMessages(prev => [...prev, { role: 'system', content: aiResponse }]);
    }

    return (
        <>
            <MemoizedSessionInfo model={model} />
            {ui === 'chatUI' && (
                <>
                    {messages.length > 0 && <MemoizedChatUI messages={messages} />}
                    <UserPrompt sendUserPrompt={sendUserPrompt} isAwaitingResponse={isAwaitingResponse} setUI={setUI} setMessages={setMessages} />
                </>
            )}
            {ui === 'modelUI' && <MemoizedModelUI setUI={setUI} setModel={setModel} />}
        </>
    )
}
export default CLI;
