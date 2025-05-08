import React from 'react';
import { cwd } from 'process';
import { Box, Text, Spacer } from 'ink';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';
import { Model } from '../utils/models.js';

const SessionInfo = ({ model }: { model: Model }) => {

    let shortenedDir = '';
    try {
        const workdir = cwd();
        shortenedDir = workdir.length > 30 ? '...' + workdir.slice(-30) : workdir;
    } catch (err) {
        console.error("Error fetching current directory : ", err);
    }

    return (
        <Box flexDirection="column" flexGrow={1} gap={1} marginY={1}>
            <Box flexDirection='column' alignItems='center' justifyContent='center' marginBottom={1}>
                <Gradient name="teen">
                    <BigText text="CLAI" font="simple3d" />
                </Gradient>
                    <Text bold color={'whiteBright'}> Your AI-powered coding companion</Text>
            </Box>

            <Box flexDirection="column" paddingX={1} paddingY={0.5} width="100%" borderStyle="round" borderColor="blue">
                <Box>
                    <Text bold>Session Info</Text>
                    <Spacer />
                    <Text color="gray">v1.0.0</Text>
                </Box>

                <Box marginTop={1}>
                    <Text>📁 </Text>
                    <Text>workdir: </Text>
                    <Text color="green">{shortenedDir}</Text>
                </Box>

                <Box>
                    <Text>📎 </Text>
                    <Text>model: </Text>
                    <Text color="blueBright">{model}</Text>
                    <Text color="gray"> {model === 'mistralai/mistral-7b-instruct' ? '(default)' : ''}</Text>
                </Box>
            </Box>
        </Box>
    );
};

export default SessionInfo;