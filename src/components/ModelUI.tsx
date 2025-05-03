import { Box, Text } from 'ink'
import React from 'react'
import { Model, models } from '../utils/models.js'
import SelectInput from 'ink-select-input';

interface ModelUIProps {
    setUI: React.Dispatch<React.SetStateAction<"chatUI" | "modelUI">>,
    setModel: React.Dispatch<React.SetStateAction<Model>>
}

const ModelUI = ({ setUI, setModel }: ModelUIProps) => {
    const items = models.map(model => {
        return {
            label: `${model === 'mistralai/mistral-7b-instruct' ? 'mistralai/mistral-7b-instruct (default)' : model}`,
            value: model
        }
    });

    const handleSelect = (item: { label: string, value: string }) => {
        setModel(item.value as Model);
        setUI('chatUI');
    }
    return (
        <Box flexDirection='column' gap={1} marginBottom={1}>
            <Text>Choose your preferred model : </Text>
            <SelectInput items={items} onSelect={handleSelect} />
        </Box>
    )
}

export default ModelUI
