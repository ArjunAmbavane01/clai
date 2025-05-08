import { Box, Text } from 'ink'
import React, { memo } from 'react'
import Chat from './Chat.js'
import { ChatMessage } from '../utils/chatTypes.js';

const Message = memo(({ message, idx }: { message: ChatMessage, idx: number }) => (
    <Box key={idx} flexDirection='column'>
        <Text bold color={message.role === 'user' ? 'blueBright' : 'magentaBright'}>{message.role}</Text>
        <Box>
            <Text bold color={message.role === 'user' ? 'blueBright' : 'magentaBright'}>↪</Text>
            <Box marginLeft={1}>
                <Chat content={message.content} isTerminalOutput={message.isTerminalOutput} />
            </Box>
        </Box>
    </Box>
));

const ChatUI = ({ messages }: { messages: ChatMessage[] }) => {
    return (
        <Box flexDirection='column' flexGrow={1} gap={1} marginY={1} width={'50%'}>
            {messages.map((message, idx) => (
                <Message key={idx} message={message} idx={idx} />
            ))}
        </Box>
    )
}

export default memo(ChatUI);