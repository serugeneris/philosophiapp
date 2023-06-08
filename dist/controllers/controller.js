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
Object.defineProperty(exports, "__esModule", { value: true });
exports.postQuestion = exports.getIndex = void 0;
const chat_gpt_service_1 = require("../services/chat-gpt-service/chat-gpt-service");
const getIndex = (req, res) => {
    console.log('working');
    res.render('index', {
        title: 'Index'
    });
};
exports.getIndex = getIndex;
const postQuestion = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const question = req.body.question;
    const chatGPTService = new chat_gpt_service_1.ChatGPTService();
    const response = yield chatGPTService.getConversation(question);
    res.status(200).json({
        response: response
    });
});
exports.postQuestion = postQuestion;
