const handleMainError = (err, req, res, next) => {
  const { statusCode = 500, message = 'Internal Server Error' } = err;
  res.status(statusCode).send(message);
};
module.exports = handleMainError;
