import axios from 'axios';
import { ConversationPayload } from "./interfaces";

export class ChatGPTService {
    accessToken: string | undefined;
    openaiApiURL: string;

    constructor() {
        this.accessToken = process.env.OPENAI_KEY;
        this.openaiApiURL = "https://api.openai.com/v1/";
    }

    async getConversation(message: string) {
        const body: ConversationPayload = {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: 
              `You are a professor in philosophy from a well known university. 
              You will have to understand what is the user question and provide with a quote of a philosopher that directly addresses the question. 
              After the quote, you will explain why that quote is relevant. This is the question:\n
              ${message}`
              ,
            },
          ],
          temperature: 0.8
        };
        
        try {
          const res = await axios.post(
            `${this.openaiApiURL}/chat/completions`,
            body,
            {
              headers: {
                authorization: `Bearer ${this.accessToken}`,
                "Content-Type": "application/json",
              },
            }
          );
          if (res.status === 200) {
            return res.data.choices[0]?.message.content;
          }

        } catch(err: any) {
          throw new Error(err)
        }

      }
}