import TextInput from "ink-text-input";
import React from 'react'

interface InputFieldProps {
    value: string,
    onChange: (value: string) => void,
    onSubmit: () => void,
    placeholder: string,
    isDisabled?: boolean
}

const InputField = ({ value, onChange, onSubmit, placeholder, isDisabled = false }: InputFieldProps) => {
    return (
        <TextInput
            value={value}
            onChange={onChange}
            onSubmit={onSubmit}
            placeholder={placeholder}
            focus={!isDisabled}
            highlightPastedText
        />
    );
};

export default InputField