const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const handleMainError = require('./middleware/handleMainError');
const axios = require('axios');
const fs = require('fs');

const router = require('./routes/router');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());
app.options('*', cors());
app.use(router);
app.use(handleMainError);

const fetchcryptoTokens = async () => {
  const server = 'https://min-api.cryptocompare.com/data/all/coinlist';
  try {
    const response = await axios.get(server);
    const tokensData = response.data.Data;
    const lastTimeUpdated = new Date();
    const tokensProperties = extractTokenProperties(Object.values(tokensData));

    const tokensDataJson = JSON.stringify({ lastTimeUpdated, tokensData });
    const tokensPropertiesJson = JSON.stringify({
      lastTimeUpdated,
      tokensProperties,
    });

    const startTokensData = performance.now();
    fs.writeFileSync('tokensData.json', tokensDataJson);
 

    fs.writeFileSync('tokensProperties.json', tokensPropertiesJson);
    const endTokensData = performance.now();
    console.log(
      'Time taken to save tokensData.json:',
      endTokensData - startTokensData,
      'ms'
    );
  } catch (error) {
    handleMainError(error);
  }
};
const extractTokenProperties = (tokens) => {
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
fetchcryptoTokens();

const { PORT = 3001 } = process.env;
app.listen(PORT);
