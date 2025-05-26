import { Router } from 'express';
import { messages } from './index-router.js';

const newRouter = Router();

newRouter.get('/', (_req, res) => {
  res.render('index', { title: 'New Message' });
});

newRouter.post('/', (req, res) => {
  const { message, authorName } = req.body;
  messages.push({ text: message, user: authorName, added: new Date() });
  res.redirect('/');
});

export { newRouter };
