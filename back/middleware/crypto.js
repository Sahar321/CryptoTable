const cryptoApi = require('../api/cryptoApi');

const isTokensLoaded = (req, res, next) => {
  if (!cryptoApi.tokensIsLoaded) {
    const error = new Error();
    error.message = 'Tokens are not available right now, please try agin later';
    error.statusCode = 503;

    return next(error);
  } 
  next();
};
module.exports = isTokensLoaded;