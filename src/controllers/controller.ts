import {Request, Response} from 'express';
import { NextFunction } from 'express-serve-static-core';
import { GeminiService } from '../services/chat-gpt-service/chat-gpt-service';
import { GeminiMessage } from '../services/chat-gpt-service/interfaces';

export const getIndex = (req: Request, res: Response) => {
    console.log('working')
    res.render('index', {
        title: 'Index'
    });
}

export const postQuestion = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const question: string = req.body.question;
    const conversationHistory: GeminiMessage[] = req.body.conversationHistory || [];
    
    const geminiService = new GeminiService();
    const response = await geminiService.getConversation(question, conversationHistory);
    
    // Build updated conversation history
    const updatedHistory: GeminiMessage[] = [
        ...conversationHistory,
        { role: 'user', content: question },
        { role: 'model', content: response }
    ];
    
    res.status(200).json({
        response: response,
        conversationHistory: updatedHistory
    });
}