const router = require('express').Router();
const {
  getExtractedData,
  getTokenById,
} = require('../../controllers/cryptoController');
const cryptoTokens = require('../../middleware/');
fetchcryptoTokens()
router.get('/crypto-tokens', getExtractedData);
router.get('/crypto-tokens/:tokenId', getTokenById);
/* router.get('/crypto-tokens', (req, res, next) => {
  res.send({ tokens: extractedData });
}); */
 
module.exports = router;
