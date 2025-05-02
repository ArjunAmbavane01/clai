import { Box, Text } from 'ink'
import React, { useCallback, useState } from 'react'
import InputField from './InputField.js';

interface UserPromptProps {
    sendUserPrompt: (userInput: string) => void,
    isAwaitingResponse: boolean,
}

const UserPrompt = ({ sendUserPrompt, isAwaitingResponse }: UserPromptProps) => {
    const [userInput, setUserInput] = useState<string>('');

    const handleSubmit = useCallback(() => {
        const processedInput = userInput.trim();

        if (processedInput === '/help') {
            // handleHelpMessage();
        }
        if (processedInput !== '') {
            sendUserPrompt(processedInput);
            setUserInput('');
        }
    }, [userInput, sendUserPrompt]);

    const handleChange = useCallback((value: string) => {
        setUserInput(value);
    }, []);
    return (
        <Box flexDirection='column' marginBottom={1}>
            <Box borderStyle="round" paddingY={0.5} paddingX={1} flexDirection='column'>
                {isAwaitingResponse ?
                    <Text color={'white'}>Thinking...</Text> :
                    <InputField 
                    value={userInput} 
                    onChange={handleChange} 
                    onSubmit={handleSubmit} 
                    isDisabled={isAwaitingResponse} 
                />
                }
            </Box>
            <Text color={'gray'}>press ctrl+c to exit | send /help for commands </Text>
        </Box>
    )
}

export default UserPrompt
