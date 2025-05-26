import { messages, getMessage } from '../db.js';
import { CustomNotFoundError } from '../errors.js';

/**
 * @param {import('express').Request} _req
 * @param {import('express').Response} res
 */
const getIndex = (_req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages });
};

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const getUser = (req, res, next) => {
  if (!/^\d+$/.test(req.params.id)) {
    next(new CustomNotFoundError('Invalid message ID'));
    return;
  }

  const message = getMessage(Number(req.params.id));

  if (!message) {
    next(new CustomNotFoundError('Message not found'));
    return;
  }

  res.render('index', {
    title: 'Message',
    message,
  });
};

export { getIndex, getUser };
