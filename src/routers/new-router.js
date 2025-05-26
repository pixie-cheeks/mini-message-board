import { Router } from 'express';
import {
  getNewMessageForm,
  createNewMessage,
} from '../controllers/new-controller.js';

const newRouter = Router();

newRouter.get('/', getNewMessageForm);
newRouter.post('/', createNewMessage);

export { newRouter };
