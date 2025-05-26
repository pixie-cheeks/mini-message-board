import { Router } from 'express';
import { getIndex, getUser } from '../controllers/index-controller.js';

const indexRouter = Router();

indexRouter.get('/', getIndex);
indexRouter.get('/:id', getUser);

export { indexRouter };
