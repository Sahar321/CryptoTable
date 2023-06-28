const InvalidRequestError = require('../errors/InvalidRequestError');
const cryptoApi = require('../api/cryptoApi');

const getTokenData = (req, res, next) => {
  res.send(cryptoApi.customTokensProperties);
};
const getTokenById = ({ params }, res, next) => {
  const token = extractedData.find((token) => token.Id === params.id);
  if (!token) {
    return next(new InvalidRequestError("Token id doesn't exist"));
  }

  res.send(token);
};

module.exports = { getTokenData, getTokenById };
