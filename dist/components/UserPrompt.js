import { Box, Text } from 'ink';
import TextInput from 'ink-text-input';
import React, { useState } from 'react';
const UserPrompt = () => {
    const [input, setInput] = useState('');
    const [errorMsg, setErrorMsg] = useState(false);
    const handleSubmit = () => {
        if (input.trim() !== '') {
            setErrorMsg(false);
        }
        setInput('');
        setErrorMsg(true);
    };
    return (React.createElement(Box, { borderStyle: "round", padding: 1, flexDirection: 'column', gap: 1 },
        React.createElement(Box, null,
            React.createElement(Text, null, "Enter your prompt : "),
            React.createElement(TextInput, { value: input, onChange: setInput, onSubmit: handleSubmit })),
        errorMsg && React.createElement(Text, { color: 'red' }, "Please enter a valid string!")));
};
export default UserPrompt;
