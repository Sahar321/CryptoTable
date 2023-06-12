const axios = require('axios');

let tokensData = [];
let tokensProperties = [];
let lastTimeUpdated;

const fetchCryptoTokens = async () => {

  const server = 'https://min-api.cryptocompare.com/data/all/coinlist';
  try {
   
    const response = await axios.get(server);
    tokensData = Object.values(response.data.Data);
    lastTimeUpdated = new Date();
    tokensProperties = extractTokenProperties(tokensData);
    console.log('fiunished');
  } catch (error) {
 
  }
};

const extractTokenProperties = (tokens) => {
  console.log('getCryptoTokens', req.app.locals.isDev);
  return tokens.map(
    ({
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
    }) => {
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
    }
  );
};

const getExtractedData = (req, res, next) => {
  console.log('getCryptoTokens', req.app.locals.isDev);
  res.send(tokensProperties);
};
const getTokenById = (req, res, next) => {
  try {
    throw new Error('test error');
  } catch (error) {
    next(error);
    return;
  }
  const { tokenId } = req.params;
  const tokenItem = tokensData.find((item) => item.Id === tokenId);
  res.send(tokenItem);
};

(async () => {
  await fetchCryptoTokens();
})();

module.exports = { getExtractedData, getTokenById };
