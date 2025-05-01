import { Box, Text } from 'ink';
import React from 'react';
import Chat from './Chat.js';
const ChatMessages = ({ messages }) => {
    return (React.createElement(Box, { flexDirection: 'column', gap: 1, marginY: 1 }, messages.map(message => {
        if (message.role === 'user') {
            return (React.createElement(Box, { flexDirection: 'column' },
                React.createElement(Text, { bold: true, color: 'blueBright' }, "user"),
                React.createElement(Box, null,
                    React.createElement(Text, { bold: true, color: 'blueBright' }, "\u21AA"),
                    React.createElement(Box, { marginLeft: 1 },
                        React.createElement(Chat, { content: message.content })))));
        }
        else if (message.role === 'system') {
            return (React.createElement(Box, { flexDirection: 'column' },
                React.createElement(Text, { bold: true, color: 'magentaBright' }, "clai"),
                React.createElement(Box, null,
                    React.createElement(Text, { bold: true, color: 'magentaBright' }, "\u21AA"),
                    React.createElement(Box, { marginLeft: 1 },
                        React.createElement(Chat, { content: message.content })))));
        }
    })));
};
export default ChatMessages;
