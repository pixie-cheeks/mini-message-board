import expressAsyncHandler from 'express-async-handler';
import { CustomNotFoundError } from '../errors.js';
import { getAllMessages, getMessage } from '../db/query.js';

const getIndex = expressAsyncHandler(async (_req, res) => {
  res.render('index', {
    title: 'Mini Messageboard',
    messages: await getAllMessages(),
  });
});

const getUser = expressAsyncHandler(async (req, res, next) => {
  if (!/^\d+$/.test(req.params.id)) {
    next(new CustomNotFoundError('Invalid message ID'));
    return;
  }

  const message = await getMessage(Number(req.params.id));

  if (!message) {
    next(new CustomNotFoundError('Message not found'));
    return;
  }

  res.render('index', {
    title: 'Message',
    message,
  });
});

export { getIndex, getUser };
