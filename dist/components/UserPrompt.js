import { Box, Text } from 'ink';
import TextInput from 'ink-text-input';
import React, { useState } from 'react';
const UserPrompt = ({ sendUserPrompt, isAwaitingResponse }) => {
    const [userInput, setUserInput] = useState('');
    const handleSubmit = () => {
        const processedInput = userInput.trim();
        if (processedInput === '/help') {
            // handleHelpMessage();
        }
        if (processedInput !== '') {
            sendUserPrompt(processedInput);
        }
        setUserInput('');
    };
    return (React.createElement(Box, { flexDirection: 'column', marginBottom: 1 },
        React.createElement(Box, { borderStyle: "round", paddingY: 0.5, paddingX: 1, flexDirection: 'column' }, isAwaitingResponse ?
            React.createElement(Text, { color: 'white' }, "Thinking...") :
            React.createElement(TextInput, { value: userInput, onChange: setUserInput, onSubmit: handleSubmit, placeholder: 'Enter your prompt...', focus: !isAwaitingResponse, highlightPastedText: true })),
        React.createElement(Text, { color: 'gray' }, "press ctrl+c to exit | send /help for commands ")));
};
export default UserPrompt;
