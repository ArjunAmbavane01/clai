import React, { useCallback, useState } from 'react'
import { Box, Text } from 'ink'
import TextInput from 'ink-text-input';
import { writeApiKey } from '../utils/config.js';
import InputField from './InputField.js';

const ApiKeyPrompt = ({ setApiKey }: { setApiKey: React.Dispatch<React.SetStateAction<string | null>> }) => {

    const [input, setInput] = useState<string>('');
    const [errorMsg, setErrorMsg] = useState<boolean>(false);

    const handleSubmit = () => {
        const processedInput = input.trim();
        if (processedInput !== '') {
            setApiKey(processedInput);
            writeApiKey(processedInput);
            setErrorMsg(false);
        }
        setInput('')
        setErrorMsg(true);
    }

    const handleChange = useCallback((value: string) => {
        setInput(value);
    }, []);

    return (
        <Box borderStyle="round" padding={1} flexDirection='column' gap={1} marginBottom={1}>
            <Box>
                <InputField
                    value={input}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    placeholder='Enter your Api Key'
                />
            </Box>
            {errorMsg && <Text color={'red'}>Please enter a valid string!</Text>}
        </Box>
    )
}

export default ApiKeyPrompt
