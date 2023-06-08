const router = require('express').Router();
const {
  getExtractedData,
  getTokenById,
} = require('../controllers/crypto-tokens');
router.get('/crypto-tokens', getExtractedData);
router.get('/crypto-tokens/:tokenId', getTokenById);
/* router.get('/crypto-tokens', (req, res, next) => {
  res.send({ tokens: extractedData });
}); */

module.exports = router;
