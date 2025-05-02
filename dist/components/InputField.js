import TextInput from "ink-text-input";
import React from 'react';
const InputField = ({ value, onChange, onSubmit, isDisabled }) => {
    return (React.createElement(TextInput, { value: value, onChange: onChange, onSubmit: onSubmit, placeholder: 'Enter your prompt...', focus: !isDisabled, highlightPastedText: true }));
};
export default InputField;
