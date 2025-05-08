export interface ChatMessage {
    role: 'user' | 'system',
    content: string,
    isTerminalOutput?: boolean
}

export type AIResponse = CommandResponse | ExplanationResponse;

export interface CommandResponse {
    type: 'command';
    command: string;
    description: string;
}

export interface ExplanationResponse {
    type: 'explanation';
    text: string;
}