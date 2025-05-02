import React, { useState } from 'react';
import { Box, Text } from 'ink';
import TextInput from 'ink-text-input';
import { writeApiKey } from '../utils/config.js';
const ApiKeyPrompt = ({ setApiKey }) => {
    const [input, setInput] = useState('');
    const [errorMsg, setErrorMsg] = useState(false);
    const handleSubmit = () => {
        const processedInput = input.trim();
        if (processedInput !== '') {
            setApiKey(processedInput);
            writeApiKey(processedInput);
            setErrorMsg(false);
        }
        setInput('');
        setErrorMsg(true);
    };
    return (React.createElement(Box, { borderStyle: "round", padding: 1, flexDirection: 'column', gap: 1 },
        React.createElement(Box, null,
            React.createElement(Text, null, "Enter your Api Key : "),
            React.createElement(TextInput, { value: input, onChange: setInput, onSubmit: handleSubmit })),
        errorMsg && React.createElement(Text, { color: 'red' }, "Please enter a valid string!")));
};
export default ApiKeyPrompt;
