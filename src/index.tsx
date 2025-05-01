#!/usr/bin/env node

import React, { useEffect, useState } from 'react';
import { readApiKey } from './utils/config.js';
import { Box, render, Text, useApp } from 'ink';
import ApiKeyPrompt from './components/ApiKeyPrompt.js';

const App = () => {

	const [apiKey, setApiKey] = useState<string | null>(readApiKey());
	const { exit } = useApp();

	if (!apiKey) return (
		<ApiKeyPrompt setApiKey={setApiKey} />
	)

	return (
		<Text>Welcome to CLAI!</Text>
	)
}

render(<App />);