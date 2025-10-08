export interface GeminiMessage {
    content: string,
    role: 'user' | 'model'
};

// Keep old interfaces for backward compatibility if needed
interface Message {
    content: string,
    role: string
};

export interface ConversationPayload {
    model: string,
    messages: Message[],
    temperature?: number
};