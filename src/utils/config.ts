import { existsSync, readFileSync, writeFileSync } from 'fs';
import { homedir } from 'os';
import { join } from 'path';

interface ApiKeyFileContent { apiKey: string };

const apiKeyFile = join(homedir(), '.clairc');

export const readApiKey = (): string | null => {
    try {
        if (existsSync(apiKeyFile)) {
            const fileContent = readFileSync(apiKeyFile, 'utf-8');
            if (fileContent == '') return null;
            const parsed = JSON.parse(fileContent) as ApiKeyFileContent;

            if (typeof parsed.apiKey === 'string') return parsed.apiKey;
        }
    } catch (err) {
        console.error('Error reading api-key : ', err);
    }
    return null;
}

export const writeApiKey = (apiKey: string): void => {
    try {
        const content: ApiKeyFileContent = { apiKey };
        writeFileSync(apiKeyFile, JSON.stringify(content, null, 2));
    } catch (err) {
        console.error('Error writing api-key : ', err);
    }
}