const router = require('express').Router();
const cryptoTokens = require('./crypto-tokens');

router.all('/crypto-tokens*', cryptoTokens);

router.all('*', (req, res, next) => {
  res.send('not found');
});
module.exports = router;
