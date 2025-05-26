import { Router } from 'express';

const newRouter = Router();

newRouter.get('/', (_req, res) => {
  res.send('New page');
});

export { newRouter };
