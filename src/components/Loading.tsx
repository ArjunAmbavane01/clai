import React from 'react'
import { Text } from 'ink'
import Spinner from 'ink-spinner'

const Loading = ({ text }: { text: string }) => {
    return (
        <Text color={'white'}> {text}<Spinner type='simpleDots' /> </Text>
    )
}

export default Loading
