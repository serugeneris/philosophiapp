import {Request, Response} from 'express';
import { NextFunction } from 'express-serve-static-core';
import { ChatGPTService } from '../services/chat-gpt-service/chat-gpt-service';

export const getIndex = (req: Request, res: Response) => {
    console.log('working')
    res.render('index', {
        title: 'Index'
    });
}

export const postQuestion = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const question: string = req.body.question;
    const chatGPTService = new ChatGPTService();
    const response = await chatGPTService.getConversation(question);
    res.status(200).json({
        response: response
    });
}