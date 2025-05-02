import TextInput from "ink-text-input";
import React from 'react'

const InputField = ({ value, onChange, onSubmit, isDisabled = false }: {
    value: string,
    onChange: (value: string) => void,
    onSubmit: () => void,
    isDisabled?: boolean
}) => {
    return (
        <TextInput
            value={value}
            onChange={onChange}
            onSubmit={onSubmit}
            placeholder='Enter your prompt...'
            focus={!isDisabled}
            highlightPastedText
        />
    );
};

export default InputField