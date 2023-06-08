const axios = require('axios');

let originalData = {};
let extractedData = {};

const getCryptoTokens = async () => {
  console.log('getCryptoTokens');
  const server = 'https://min-api.cryptocompare.com/data/all/coinlist';
  try {
    const response = await axios.get(server);
    originalData = response.data;
    extractedData = extractTokenProperties(originalData);
  } catch (error) {
    return error;
  }
};

const extractTokenProperties = ({ Data }) => {
  return Object.values(Data).map((token) => {
    const {
      Id,
      Url,
      ImageUrl,
      Symbol,
      CoinName,
      Algorithm,
      ProofType,
      SortOrder,
      AssetLaunchDate,
      MaxSupply,
      AlgorithmType,
    } = token;
    return {
      Id,
      Url,
      ImageUrl,
      Symbol,
      CoinName,
      Algorithm,
      ProofType,
      SortOrder,
      AssetLaunchDate,
      MaxSupply,
      AlgorithmType,
    };
  });
};

const getExtractedData = (req, res, next) => {
  res.send(extractedData);
};
const getTokenById = (req, res, next) => {

};

getCryptoTokens();

module.exports = { getExtractedData, getTokenById };
