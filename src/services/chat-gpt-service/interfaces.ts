interface Message {
    content: string,
    role: string
};

export interface ConversationPayload {
    model: string,
    messages: Message[],
    temperature?: number
};