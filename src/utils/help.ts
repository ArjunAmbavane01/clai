const commands = {
    '/help': 'Show this help message',
    '/clear': 'Clear all messages in the conversation',
    '/models': 'List all available models',
    '/retry': 'Retry the last AI response',
    '/exit': 'Exit the current session',
}

export const usageGuide = Object.entries(commands).map(([cmd,desc])=>{return ` ${cmd} - ${desc}`}).join('\n')