import { useCallback } from 'react';
import { ChatMessage } from '../components/CLI.js';
import { queryAiModel } from '../utils/aiClient.js';
import { Model } from '../utils/models.js';

export const useSubmitPrompt = (
    model: Model,
    apiKey: string,
    setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>,
    setIsAwaitingResponse: React.Dispatch<React.SetStateAction<boolean>>,
    messageWindowRef: React.RefObject<ChatMessage[]>,
    chatSummaryRef: React.RefObject<string>
) => {
    return useCallback(async (input: string) => {
        setIsAwaitingResponse(true);

        const userMessage: ChatMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);

        const aiResponse = await queryAiModel(input, model, apiKey);
        const aiMessage: ChatMessage = { role: 'system', content: aiResponse };
        setMessages(prev => [...prev, aiMessage]);

        setIsAwaitingResponse(false);

        if (messageWindowRef.current.length >= 12) {
            messageWindowRef.current = messageWindowRef.current.slice(2);
        }
        messageWindowRef.current.push(userMessage, aiMessage);

        
    }, [model, apiKey]);
};
