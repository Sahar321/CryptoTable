const router = require('express').Router();
const crypto = require('./crypto');

router.all('/crypto*', crypto);

router.all('*', (req, res, next) => {
  res.send('not found');
});
module.exports = router;
