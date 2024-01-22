"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGPTService = void 0;
const axios_1 = __importDefault(require("axios"));
class ChatGPTService {
    constructor() {
        this.accessToken = process.env.OPENAI_KEY;
        this.openaiApiURL = "https://api.openai.com/v1/";
    }
    getConversation(message) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "system",
                        content: `You are a professor in philosophy from a well known university. 
              You will have to understand what is the user question and provide with a quote of a philosopher that directly addresses the question. 
              After the quote, you will explain why that quote is relevant. 
              The user question will be wrapped with ### characters.`
                    },
                    {
                        role: "user",
                        content: `### / 
              ${message}
               / ###`,
                    },
                ],
                temperature: 0.8
            };
            try {
                const res = yield axios_1.default.post(`${this.openaiApiURL}/chat/completions`, body, {
                    headers: {
                        authorization: `Bearer ${this.accessToken}`,
                        "Content-Type": "application/json",
                    },
                });
                if (res.status === 200) {
                    return (_a = res.data.choices[0]) === null || _a === void 0 ? void 0 : _a.message.content;
                }
            }
            catch (err) {
                throw new Error(err);
            }
        });
    }
}
exports.ChatGPTService = ChatGPTService;
