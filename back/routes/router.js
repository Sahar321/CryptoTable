const router = require('express').Router();

router.all('*', (req, res, next) => {
  res.send('!page not found');
});

module.exports = router;