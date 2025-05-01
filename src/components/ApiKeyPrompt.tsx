import React, { useState } from 'react'
import { Box, Text } from 'ink'
import TextInput from 'ink-text-input';
import { writeApiKey } from '../utils/config.js';

const ApiKeyPrompt = ({ setApiKey }: { setApiKey: React.Dispatch<React.SetStateAction<string | null>> }) => {

    const [input, setInput] = useState<string>('');
    const [errorMsg, setErrorMsg] = useState<boolean>(false);

    const handleSubmit = () => {
        if (input.trim() !== '') {
            setApiKey(input.trim());
            writeApiKey(input.trim());
            setErrorMsg(false);
        }
        setInput('')
        setErrorMsg(true);
    }
    return (
        <Box borderStyle="round" padding={1} flexDirection='column' gap={1}>
            <Box>
                <Text>Enter your Api Key : </Text>
                <TextInput value={input} onChange={setInput} onSubmit={handleSubmit} />
            </Box>
            {errorMsg && <Text color={'red'}>Please enter a valid string!</Text>}
        </Box>
    )
}

export default ApiKeyPrompt
