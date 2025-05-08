import React from 'react';
import { Box, Text } from 'ink';

interface TerminalOutputProps {
  output: string;
  title?: string;
}

const TerminalOutput: React.FC<TerminalOutputProps> = ({ output, title }) => {
  const lines = output.split('\n');
  
  return (
    <Box 
      flexDirection="column" 
      borderStyle="round" 
      borderColor="cyan"
      paddingX={1}
      width={80}
    >
      <Box 
        flexDirection="row" 
        justifyContent="space-between"
        paddingX={1}
        marginBottom={1}
      >
        <Text bold color="black">{title || 'Terminal Output'}</Text>
        <Text color="black">● ● ●</Text>
      </Box>

      <Box flexDirection="column" paddingLeft={1}>
        {lines.map((line, i) => (
          <Text key={i} color="white">
            {line.startsWith('$') ? (
              <>
                <Text color="yellow">{line.substring(0, 2)}</Text>
                <Text color="green">{line.substring(2)}</Text>
              </>
            ) : (
              line
            )}
          </Text>
        ))}
      </Box>
    </Box>
  );
};

export default TerminalOutput;