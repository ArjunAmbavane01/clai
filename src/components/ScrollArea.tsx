import React, { useState, useEffect, ReactNode } from 'react';
import { Box, useInput } from 'ink';
import { ChatMessage } from './CLI.js';

interface ScrollAreaProps {
    children: ReactNode;
    height: number;
}

const ScrollArea: React.FC<ScrollAreaProps> = ({ children, height }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [contentHeight, setContentHeight] = useState(0);
    
    // This will be called to calculate the content height
    useEffect(() => {
        // For simplicity, we're estimating content height based on the number of lines
        // In a real application, you'd want to calculate this more accurately
        const content = React.Children.toArray(children)[0] as React.ReactElement;
        if (content && content.props && (content.props as {messages:ChatMessage[]}).messages) {
            // Rough estimate: each message takes about 3 lines plus its content
            const messageCount = (content.props as {messages:ChatMessage[]}).messages.length;
            const estimatedHeight = messageCount * 3 + 
            (content.props as {messages:ChatMessage[]}).messages.reduce((acc: number, msg: any) => {
                    return acc + (msg.content.split('\n').length || 1);
                }, 0);
            setContentHeight(estimatedHeight);
        }
    }, [children]);

    // Handle keyboard inputs for scrolling
    useInput((input, key) => {
        if (key.upArrow) {
            setScrollPosition(Math.max(0, scrollPosition - 1));
        } else if (key.downArrow) {
            const maxScroll = Math.max(0, contentHeight - height);
            setScrollPosition(Math.min(maxScroll, scrollPosition + 1));
        } else if (key.pageUp) {
            setScrollPosition(Math.max(0, scrollPosition - Math.floor(height / 2)));
        } else if (key.pageDown) {
            const maxScroll = Math.max(0, contentHeight - height);
            setScrollPosition(Math.min(maxScroll, scrollPosition + Math.floor(height / 2)));
        }
    });

    // Auto-scroll to bottom when new content is added
    useEffect(() => {
        if (contentHeight > height) {
            setScrollPosition(contentHeight - height);
        }
    }, [contentHeight, height]);

    return (
        <Box flexDirection="column" height={height} overflow="hidden">
            <Box marginTop={-scrollPosition}>
                {children}
            </Box>
        </Box>
    );
};

export default ScrollArea;