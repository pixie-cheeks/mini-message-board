let id = 1;

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
    id: id++,
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
    id: id++,
  },
];

/**
 * @param {string} text
 * @param {string} user
 */
const addNewMessage = (text, user) => {
  messages.push({ text, user, added: new Date(), id: id++ });
};

/**
 * @param {number} givenId
 */
const getMessage = (givenId) =>
  messages.find((message) => message.id === givenId);

export { addNewMessage, getMessage, messages };
