import { Box, Text } from 'ink';
import React, { memo } from 'react';
import Chat from './Chat.js';
const Message = memo(({ message, idx }) => {
    if (message.role === 'user') {
        return (React.createElement(Box, { key: idx, flexDirection: 'column' },
            React.createElement(Text, { bold: true, color: 'blueBright' }, "user"),
            React.createElement(Box, null,
                React.createElement(Text, { bold: true, color: 'blueBright' }, "\u21AA"),
                React.createElement(Box, { marginLeft: 1 },
                    React.createElement(Chat, { content: message.content })))));
    }
    else if (message.role === 'system') {
        return (React.createElement(Box, { key: idx, flexDirection: 'column' },
            React.createElement(Text, { bold: true, color: 'magentaBright' }, "clai"),
            React.createElement(Box, null,
                React.createElement(Text, { bold: true, color: 'magentaBright' }, "\u21AA"),
                React.createElement(Box, { marginLeft: 1 },
                    React.createElement(Chat, { content: message.content })))));
    }
    return null;
});
const ChatMessages = ({ messages }) => {
    return (React.createElement(Box, { flexDirection: 'column', gap: 1, marginY: 1 }, messages.map((message, idx) => (React.createElement(Message, { key: idx, message: message, idx: idx })))));
};
export default memo(ChatMessages);
