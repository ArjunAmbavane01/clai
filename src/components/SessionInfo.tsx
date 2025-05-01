import { cwd } from 'process';
import React from 'react'
import { Box, Text } from 'ink'
import Gradient from 'ink-gradient';

const SessionInfo = () => {
    const workdir = cwd()
    const shortenedDir = workdir.length > 30 ? '...' + workdir.slice(-30) : workdir
    return (
        <Box flexDirection='column' gap={1} marginY={2}>
            <Gradient name="atlas">
                <Text bold={true} >• Welcome to CLAI</Text>
            </Gradient>
            <Box flexDirection='column' gap={2} paddingX={1} width={90} borderStyle={'round'} borderColor={'blue'} borderDimColor>
                <Text>Session Info</Text>
                <Box flexDirection='column'>
                    <Text>workdir :<Text color={'green'}> {shortenedDir}</Text></Text>
                    <Text>model :<Text color={'blueBright'}> mistral-7b </Text><Text color={'gray'}>(default)</Text></Text>
                </Box>
            </Box>
        </Box>
    )
}

export default SessionInfo;
