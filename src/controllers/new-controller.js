import { addNewMessage } from '../db.js';

/**
 * @param {import('express').Request} _req
 * @param {import('express').Response} res
 */
const getNewMessageForm = (_req, res) => {
  res.render('index', { title: 'New Message' });
};

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const createNewMessage = (req, res) => {
  const { message, authorName } = req.body;
  addNewMessage(message, authorName);
  res.redirect('/');
};

export { getNewMessageForm, createNewMessage };
