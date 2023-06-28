const router = require('express').Router();
const cryptoTokens = require('../middleware/cryptoDataValidation');

router.all('/data/crypto*', cryptoTokens    );

router.all('*', (req, res, next) => {
  res.send('not found');
});
module.exports = router;
