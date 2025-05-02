import { Box, Text } from 'ink'
import TextInput from 'ink-text-input'
import React, { useState } from 'react'

interface UserPromptProps {
    sendUserPrompt: (userInput: string) => void,
    isAwaitingResponse: boolean,
}

const UserPrompt = ({ sendUserPrompt, isAwaitingResponse }: UserPromptProps) => {
    const [userInput, setUserInput] = useState<string>('');

    const handleSubmit = () => {
        const processedInput = userInput.trim();

        if (processedInput === '/help') {
            // handleHelpMessage();
        }
        if (processedInput !== '') {
            sendUserPrompt(processedInput);
        }
        setUserInput('')
    }
    return (
        <Box flexDirection='column' marginBottom={1}>
            <Box borderStyle="round" paddingY={0.5} paddingX={1} flexDirection='column'>
                {isAwaitingResponse ?
                    <Text color={'white'}>Thinking...</Text> :
                    <TextInput value={userInput} onChange={setUserInput} onSubmit={handleSubmit} placeholder='Enter your prompt...' focus={!isAwaitingResponse} highlightPastedText />
                }
            </Box>
            <Text color={'gray'}>press ctrl+c to exit | send /help for commands </Text>
        </Box>
    )
}

export default UserPrompt
