import { Router } from 'express';
import { getIndex, postQuestion } from '../controllers/controller';

export const router = Router();

router.get('/', getIndex);
router.post('/question', postQuestion);