export const models = ['mistralai/mistral-7b-instruct','neversleep/noromaid-20b'] as const;
export type Model = typeof models[number];
