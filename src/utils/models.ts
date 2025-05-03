export const models = ['mistralai/mistral-7b-instruct', 'neversleep/noromaid-20b', 'perplexity/llama-3.1-sonar-small-128k-online', 'perplexity/sonar', 'openai/gpt-3.5-turbo', 'anthropic/claude-3.5-haiku', 'google/gemini-flash-1.5-8b'] as const;

export type Model = typeof models[number];
