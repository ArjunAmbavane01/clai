import { Text } from 'ink'
import Spinner from 'ink-spinner'
import React from 'react'

const Loading = ({ text }: { text: string }) => {
    return (
        <Text color={'white'}>
            {text}<Spinner type='simpleDots' />
        </Text>
    )
}

export default Loading
