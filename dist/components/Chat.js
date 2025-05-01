import { Box, Text } from 'ink';
import React from 'react';
const Chat = ({ content }) => {
    const codeBlockMatch = content.match(/```[a-z]*\n([\s\S]*?)```/);
    if (codeBlockMatch) {
        const code = codeBlockMatch[1].trim();
        const before = content.split('```')[0].trim();
        return (React.createElement(Box, { flexDirection: "column" },
            before && React.createElement(Text, null, before),
            React.createElement(Box, { flexDirection: "column", paddingX: 1, borderStyle: "round", borderColor: "gray" }, code.split('\n').map((line, i) => (React.createElement(Text, { key: i, color: "green" }, line))))));
    }
    return React.createElement(Text, null, content);
};
export default Chat;
