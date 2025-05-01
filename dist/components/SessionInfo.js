import { cwd } from 'process';
import React from 'react';
import { Box, Text } from 'ink';
import Gradient from 'ink-gradient';
const SessionInfo = () => {
    const workdir = cwd();
    const shortenedDir = workdir.length > 30 ? '...' + workdir.slice(-30) : workdir;
    return (React.createElement(Box, { flexDirection: 'column', gap: 1, marginY: 2 },
        React.createElement(Gradient, { name: "atlas" },
            React.createElement(Text, { bold: true }, "\u2022 Welcome to CLAI")),
        React.createElement(Box, { flexDirection: 'column', gap: 2, paddingX: 1, width: 90, borderStyle: 'round', borderColor: 'blue', borderDimColor: true },
            React.createElement(Text, null, "Session Info"),
            React.createElement(Box, { flexDirection: 'column' },
                React.createElement(Text, null,
                    "workdir :",
                    React.createElement(Text, { color: 'green' },
                        " ",
                        shortenedDir)),
                React.createElement(Text, null,
                    "model :",
                    React.createElement(Text, { color: 'blueBright' }, " mistral-7b "),
                    React.createElement(Text, { color: 'gray' }, "(default)"))))));
};
export default SessionInfo;
