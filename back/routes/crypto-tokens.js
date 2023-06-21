const router = require('express').Router();
const {
  getTokenData,
  getTokenById,
} = require('../controllers/crypto-tokens');
router.get('/crypto-tokens', getTokenData);
router.get('/crypto-tokens/:id', getTokenById);
/* router.get('/crypto-tokens', (req, res, next) => {
  res.send({ tokens: extractedData });
}); */

module.exports = router;
