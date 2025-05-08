import { Box, Text, useApp } from 'ink'
import React, { memo, useCallback, useRef, useState } from 'react'
import InputField from './InputField.js';
import Loading from './Loading.js';
import { usageGuide } from '../utils/help.js';
import { ChatMessage } from '../utils/chatTypes.js';

interface UserPromptProps {
    submitPrompt: (userInput: string) => void,
    isAwaitingResponse: boolean,
    executingCmd: boolean,
    setUI: React.Dispatch<React.SetStateAction<"chatUI" | "modelUI">>,
    setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>
}

const UserPrompt = ({ submitPrompt, isAwaitingResponse, executingCmd, setUI, setMessages }: UserPromptProps) => {
    const [userInput, setUserInput] = useState<string>('');
    const lastUserInputRef = useRef<string>('');
    const { exit } = useApp();

    const handleSubmit = useCallback(() => {
        const processedInput = userInput.trim();
        setUserInput('');
        if (processedInput === '/help') {
            const content = 'Options\n\n' + usageGuide;
            setMessages(prev => [...prev, { role: 'system', content }]);
        }
        else if (processedInput === '/clear') setMessages([]);
        else if (processedInput === '/models') setUI('modelUI');
        else if (processedInput === '/retry') submitPrompt(lastUserInputRef.current);
        else if (processedInput === '/exit') exit();
        else if (processedInput !== '') {
            submitPrompt(processedInput);
            lastUserInputRef.current = processedInput;
        }
    }, [userInput, submitPrompt]);

    const handleChange = useCallback((value: string) => { setUserInput(value) }, []);

    return (
        <Box flexDirection='column' flexGrow={1} marginBottom={1}>
            <Box borderStyle="round" paddingY={0.5} paddingX={1} flexDirection='column' width={'100%'}>
                {isAwaitingResponse ? <Loading text={'Thinking'}/> : executingCmd ? <Loading text={'Executing'}/> :
                    <InputField
                        value={userInput}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        placeholder='Enter your prompt...'
                        isDisabled={isAwaitingResponse}
                    />
                }
            </Box>
            <Text color={'gray'}>press <Text color="yellow" bold>ctrl+c</Text> to exit | send /help for commands </Text>
        </Box>
    )
}

export default memo(UserPrompt)
