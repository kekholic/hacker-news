import express from 'express';
import { getAllStoriesController, getStoryController } from '../controllers/storyController.js';

const storyRouter = express.Router();

storyRouter.get('/', getAllStoriesController);
storyRouter.get('/:id', getStoryController);

export default storyRouter;