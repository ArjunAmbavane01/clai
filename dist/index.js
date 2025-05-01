#!/usr/bin/env node
import React, { useState } from 'react';
import { readApiKey } from './utils/config.js';
import { render, Text, useApp } from 'ink';
import ApiKeyPrompt from './components/ApiKeyPrompt.js';
const App = () => {
    const [apiKey, setApiKey] = useState(readApiKey());
    const { exit } = useApp();
    if (!apiKey)
        return (React.createElement(ApiKeyPrompt, { setApiKey: setApiKey }));
    return (React.createElement(Text, null, "Welcome to CLAI!"));
};
render(React.createElement(App, null));
