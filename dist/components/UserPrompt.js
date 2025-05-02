import { Box, Text } from 'ink';
import React, { useCallback, useState } from 'react';
import InputField from './InputField.js';
const UserPrompt = ({ sendUserPrompt, isAwaitingResponse }) => {
    const [userInput, setUserInput] = useState('');
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
    const handleChange = useCallback((value) => {
        setUserInput(value);
    }, []);
    return (React.createElement(Box, { flexDirection: 'column', marginBottom: 1 },
        React.createElement(Box, { borderStyle: "round", paddingY: 0.5, paddingX: 1, flexDirection: 'column' }, isAwaitingResponse ?
            React.createElement(Text, { color: 'white' }, "Thinking...") :
            React.createElement(InputField, { value: userInput, onChange: handleChange, onSubmit: handleSubmit, isDisabled: isAwaitingResponse })),
        React.createElement(Text, { color: 'gray' }, "press ctrl+c to exit | send /help for commands ")));
};
export default UserPrompt;
