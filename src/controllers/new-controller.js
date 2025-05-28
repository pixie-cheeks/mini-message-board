import expressAsyncHandler from 'express-async-handler';
import { addNewMessage } from '../db/query.js';

/**
 * @param {import('express').Request} _req
 * @param {import('express').Response} res
 */
const getNewMessageForm = (_req, res) => {
  res.render('index', { title: 'New Message' });
};

const createNewMessage = expressAsyncHandler(async (req, res) => {
  const { authorName, message } = req.body;
  await addNewMessage(authorName, message);
  res.redirect('/');
});

export { getNewMessageForm, createNewMessage };
