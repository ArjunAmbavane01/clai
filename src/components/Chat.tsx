import React from 'react'
import { Box, Text } from 'ink'

const Chat = ({ content }: { content: string }) => {
    try {
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
    }
};

export default Chat;