import { Box, Text } from 'ink'
import React from 'react'
import { ChatMessage } from './CLI.js'
import Chat from './Chat.js'

const ChatMessages = ({ messages }: { messages: ChatMessage[] }) => {
    return (
        <Box flexDirection='column' gap={1} marginY={1}>
            {messages.map(message => {
                if (message.role === 'user') {
                    return (
                        <Box flexDirection='column'>
                            <Text bold color={'blueBright'}>user</Text>
                            <Box>
                                <Text bold color={'blueBright'}>↪</Text><Box marginLeft={1}><Chat content={message.content} /></Box>
                            </Box>
                        </Box>
                    )
                } else if (message.role === 'system') {
                    return (
                        <Box flexDirection='column'>
                            <Text bold color={'magentaBright'}>clai</Text>
                            <Box>
                                <Text bold color={'magentaBright'}>↪</Text><Box marginLeft={1}><Chat content={message.content} /></Box>
                            </Box>
                        </Box>
                    )

                }
            })}
        </Box>
    )
}

export default ChatMessages;
