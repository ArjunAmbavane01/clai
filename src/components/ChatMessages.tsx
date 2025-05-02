import { Box, Text } from 'ink'
import React, { memo } from 'react'
import { ChatMessage } from './CLI.js'
import Chat from './Chat.js'

const Message = memo(({ message, idx }: { message: ChatMessage, idx: number }) => {
    if (message.role === 'user') {
        return (
            <Box key={idx} flexDirection='column'>
                <Text bold color={'blueBright'}>user</Text>
                <Box>
                    <Text bold color={'blueBright'}>↪</Text><Box marginLeft={1}><Chat content={message.content} /></Box>
                </Box>
            </Box>
        )
    } else if (message.role === 'system') {
        return (
            <Box key={idx} flexDirection='column'>
                <Text bold color={'magentaBright'}>clai</Text>
                <Box>
                    <Text bold color={'magentaBright'}>↪</Text>
                    <Box marginLeft={1}>
                        <Chat content={message.content} />
                    </Box>
                </Box>
            </Box>
        )
    }
    return null;
});

const ChatMessages = ({ messages }: { messages: ChatMessage[] }) => {
    return (
        <Box flexDirection='column' flexGrow={1} gap={1} marginY={1}>
            {messages.map((message, idx) => (
                <Message key={idx} message={message} idx={idx} />
            ))}
        </Box>
    )
}

export default memo(ChatMessages);