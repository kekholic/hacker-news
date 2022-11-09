import express from 'express';
import { getCommentController } from '../controllers/commentController.js';


const commentRouter = express.Router();

commentRouter.get('/:id', getCommentController);

export default commentRouter;