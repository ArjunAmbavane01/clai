import { Text } from 'ink'
import Spinner from 'ink-spinner'
import React from 'react'

const Loading = () => {
    return (
        <Text color={'white'}>
            Thinking<Spinner type='simpleDots' />
        </Text>
    )
}

export default Loading
