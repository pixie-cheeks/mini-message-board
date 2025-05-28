import { pool } from './pool.js';

const getAllMessages = async () => {
  const { rows } = await pool.query('select * from messages;');
  return rows;
};
/**
 * @param {string} user
 * @param {string} text
 */
const addNewMessage = (user, text) =>
  pool.query('insert into messages ("user", text) values ($1, $2);', [
    user,
    text,
  ]);

/**
 * @param {number} givenId
 */
const getMessage = async (givenId) => {
  const { rows } = await pool.query('select * from messages where id = $1;', [
    givenId,
  ]);
  return rows.at(0);
};

export { addNewMessage, getMessage, getAllMessages };
