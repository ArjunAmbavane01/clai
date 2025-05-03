import { Box, Text } from 'ink'
import React, { memo, useCallback, useState } from 'react'
import InputField from './InputField.js';
import { ChatMessage } from './CLI.js';
import Loading from './Loading.js';

interface UserPromptProps {
    sendUserPrompt: (userInput: string) => void,
    isAwaitingResponse: boolean,
    setUI: React.Dispatch<React.SetStateAction<"chatUI" | "modelUI">>,
    setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>
}

const UserPrompt = ({ sendUserPrompt, isAwaitingResponse, setUI, setMessages }: UserPromptProps) => {
    const [userInput, setUserInput] = useState<string>('');

    const handleSubmit = useCallback(() => {
        const processedInput = userInput.trim();
        if (processedInput === '/help') {
            // handleHelpMessage();
        }
        else if (processedInput === '/model') {
            setUI('modelUI');
        }
        else if (processedInput === '/clear') {
            setMessages([]);
        }
        else if (processedInput !== '') {
            sendUserPrompt(processedInput);
        }
        setUserInput('');
    }, [userInput, sendUserPrompt]);

    const handleChange = useCallback((value: string) => {
        setUserInput(value);
    }, []);

    return (
        <Box flexDirection='column' flexGrow={1} marginBottom={1}>
            <Box borderStyle="round" paddingY={0.5} paddingX={1} flexDirection='column'>
                {isAwaitingResponse ?
                    <Loading /> :
                    <InputField
                        value={userInput}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        placeholder='Enter your prompt...'
                        isDisabled={isAwaitingResponse}
                    />
                }
            </Box>
            <Text color={'gray'}>press ctrl+c to exit | send /help for commands </Text>
        </Box>
    )
}

export default memo(UserPrompt)
