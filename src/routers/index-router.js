import { Router } from 'express';

const indexRouter = Router();
const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

indexRouter.get('/', (_req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages });
});

export { indexRouter, messages };
