import React, { memo, useEffect, useRef, useState } from 'react'
import { Box, Text } from 'ink';
import { Model } from '../utils/models.js';
import SessionInfo from './SessionInfo.js'
import UserPrompt from './UserPrompt.js';
import ChatUI from './ChatUI.js';
import ModelUI from './ModelUI.js';
import { useSubmitPrompt } from '../hooks/useSubmitPrompt.ts.js';
import Spinner from 'ink-spinner';
import { ChatMessage } from '../utils/chatTypes.js';

const MemoizedSessionInfo = memo(SessionInfo);
const MemoizedChatUI = memo(ChatUI);
const MemoizedModelUI = memo(ModelUI);

const CLI = ({ apiKey }: { apiKey: string }) => {

    const [loading, setLoading] = useState<boolean>(true);
    const [executingCmd, setExecutingCmd] = useState<boolean>(false);
    const [isAwaitingResponse, setIsAwaitingResponse] = useState<boolean>(false);
    const [ui, setUI] = useState<'chatUI' | 'modelUI'>('chatUI');
    const [model, setModel] = useState<Model>('mistralai/mistral-7b-instruct');
    const [messages, setMessages] = useState<ChatMessage[]>([]);

    const messageWindowRef = useRef<ChatMessage[]>([]);
    const chatSummaryRef = useRef<string>('');

    const submitPrompt = useSubmitPrompt(model, apiKey, setMessages, setIsAwaitingResponse, setExecutingCmd, messageWindowRef, chatSummaryRef);

    useEffect(() => {
        const timer = setTimeout(() => { setLoading(false) }, 1500);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <Box flexDirection="column" alignItems="center" justifyContent="center" height={10}>
                <Text>
                    <Text color="blue"><Spinner type="dots" /></Text> Initializing CLAI environment...
                </Text>
            </Box>
        );
    }

    return (
        <>
            <MemoizedSessionInfo model={model} />
            {ui === 'chatUI' && (
                <>
                    {messages.length > 0 && <MemoizedChatUI messages={messages} />}
                    <UserPrompt submitPrompt={submitPrompt} isAwaitingResponse={isAwaitingResponse} executingCmd={executingCmd} setUI={setUI} setMessages={setMessages} />
                </>
            )}
            {ui === 'modelUI' && <MemoizedModelUI setUI={setUI} setModel={setModel} />}
        </>
    )
}
export default CLI;
