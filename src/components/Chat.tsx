import React from 'react';
import { Box, Text } from 'ink';
import TerminalOutput from './TerminalOutput.js';

const Chat = ({ content, isTerminalOutput = false }: { content: string, isTerminalOutput?: boolean }) => {
    try {
        if (isTerminalOutput) {
            const outputMatch = content.match(/Command output:\n```\n([\s\S]*?)\n```/);
            if (outputMatch) {
                return <TerminalOutput output={outputMatch[1]} />;
            }
            
            const errorMatch = content.match(/Error while executing:\n```\n([\s\S]*?)\n```/);
            if (errorMatch) {
                return <TerminalOutput output={errorMatch[1]} title="Error" />;
            }
        }

        const codeBlockMatch = content.match(/```[a-z]*\n([\s\S]*?)```/);
        if (codeBlockMatch) {
            const code = codeBlockMatch[1].trim();
            const before = content.split('```')[0].trim();

            return (
                <Box flexDirection="column">
                    {before && <Text>{before}</Text>}
                    <Box flexDirection="column" paddingX={1} borderStyle="round" borderColor="gray">
                        {code.split('\n').map((line, i) => (
                            <Text key={i} color="green">{line}</Text>
                        ))}
                    </Box>
                </Box>
            );
        }

        return <Text>{content}</Text>;
    } catch (err) {
        console.error('Error parsing content : ', err);
        return <Text color="red">Error rendering content</Text>;
    }
};

export default Chat;