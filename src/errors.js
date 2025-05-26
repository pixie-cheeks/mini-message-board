class CustomNotFoundError extends Error {
  /**
   * @param {string} message
   */
  constructor(message) {
    super(message);
    this.statusCode = 404;
    this.name = 'NotFoundError';
  }
}

/**
 * @param {CustomNotFoundError} err
 * @param {import('express').Request} _req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} _next
 */
// eslint-disable-next-line no-unused-vars
const errorHandler = (err, _req, res, _next) => {
  console.error(err);
  const { statusCode } = err;
  if (statusCode) {
    res
      .status(statusCode)
      .render('index', { title: 'Error', error: err.message });
  } else {
    res.status(500).render('index', {
      title: 'Error',
      error: 'The server encountered an error.',
    });
  }
};

export { CustomNotFoundError, errorHandler };
