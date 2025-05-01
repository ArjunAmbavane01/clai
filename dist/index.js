#!/usr/bin/env node
import React, { useState } from 'react';
import { readApiKey } from './utils/config.js';
import { render, useApp } from 'ink';
import ApiKeyPrompt from './components/ApiKeyPrompt.js';
import CLI from './components/CLI.js';
const App = () => {
    const [apiKey, setApiKey] = useState(readApiKey());
    const { exit } = useApp();
    if (!apiKey)
        return (React.createElement(ApiKeyPrompt, { setApiKey: setApiKey }));
    return (React.createElement(CLI, null));
};
render(React.createElement(App, null));
