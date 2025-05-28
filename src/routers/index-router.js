import { Router } from 'express';
import { getIndex, getUser } from '../controllers/index-controller.js';
import { CustomNotFoundError } from '../errors.js';

const indexRouter = Router();

indexRouter.get('/id/:id', getUser);
indexRouter.get('/', getIndex);
indexRouter.get('*all', (_req, _res, next) => {
  next(new CustomNotFoundError('Page not found'));
});

export { indexRouter };
