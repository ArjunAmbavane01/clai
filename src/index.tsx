#!/usr/bin/env node

import React, { useState } from 'react';
import { readApiKey } from './utils/config.js';
import { render } from 'ink';
import ApiKeyPrompt from './components/ApiKeyPrompt.js';
import CLI from './components/CLI.js';

const App = () => {

	const [apiKey, setApiKey] = useState<string | null>(readApiKey());

	if (!apiKey) return (<ApiKeyPrompt setApiKey={setApiKey} />)
	return (<CLI apiKey={apiKey} />)
}

render(<App />);