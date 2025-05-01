#!/usr/bin/env node

import React, { useState } from 'react';
import { readApiKey } from './utils/config.js';
import { render, useApp } from 'ink';
import ApiKeyPrompt from './components/ApiKeyPrompt.js';
import SessionInfo from './components/SessionInfo.js';
import CLI from './components/CLI.js';

const App = () => {

	const [apiKey, setApiKey] = useState<string | null>(readApiKey());
	const { exit } = useApp();

	if (!apiKey) return (<ApiKeyPrompt setApiKey={setApiKey} />)

	return (<CLI />)
}

render(<App />);