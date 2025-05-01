import { Box, Text } from 'ink';
import React from 'react';
const renderMessageContent = (content) => {
    const codeBlockMatch = content.match(/```[a-z]*\n([\s\S]*?)```/);
    if (codeBlockMatch) {
        const code = codeBlockMatch[1].trim();
        const before = content.split('```')[0].trim();
        return (React.createElement(Box, { flexDirection: "column" },
            before && React.createElement(Text, null, before),
            React.createElement(Box, { flexDirection: "column", paddingX: 1, borderStyle: "round", borderColor: "blue", borderDimColor: true }, code.split('\n').map((line, i) => (React.createElement(Text, { key: i, color: "green" }, line))))));
    }
    return React.createElement(Text, null, content);
};
const ChatUI = ({ messages }) => {
    return (React.createElement(Box, { flexDirection: 'column', gap: 1, marginY: 1 }, messages.map(message => {
        if (message.role === 'user') {
            return (React.createElement(Box, { flexDirection: 'column' },
                React.createElement(Text, { bold: true, color: 'blueBright' }, "user"),
                React.createElement(Box, null,
                    React.createElement(Text, { bold: true, color: 'blueBright' }, "\u21AA"),
                    React.createElement(Box, { marginLeft: 1 }, renderMessageContent(message.content)))));
        }
        else if (message.role === 'system') {
            return (React.createElement(Box, { flexDirection: 'column' },
                React.createElement(Text, { bold: true, color: 'magentaBright' }, "clai"),
                React.createElement(Box, null,
                    React.createElement(Text, { bold: true, color: 'magentaBright' }, "\u21AA"),
                    React.createElement(Box, { marginLeft: 1 }, renderMessageContent(message.content)))));
        }
    })));
};
export default ChatUI;
