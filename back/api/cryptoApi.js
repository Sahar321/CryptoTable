const axios = require('axios');
const { CRYPTO } = require('../config/config');
class CryptoApi {
  constructor() {
    this.tokensIsLoaded = false;
    this.tokens = {};
    this.customTokensProperties = {};
    this.lastTimeUpdated = new Date();
  }

  fetchCryptoTokens = async () => {
    try {
      const { data } = await axios.get(CRYPTO.TOKENS_API_URL);
      if (data.Response === 'Error') {
        throw new Error();
      }
      this.tokens = data.Data;

      this.customTokensProperties = this.extractTokenProperties(
        Object.values(this.tokens)
      );

      this.tokensIsLoaded = true;
    } catch (error) {
      this.tokensIsLoaded = false;
    }
  };
  extractTokenProperties = (tokens) => {
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
}

const cryptoApi = new CryptoApi();

module.exports = cryptoApi;
