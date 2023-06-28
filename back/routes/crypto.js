const router = require('express').Router();
const {
  getTokenData,
  getTokenById,
} = require('../controllers/cryptoController');

const isTokensLoaded = require('../middleware/crypto');

router.get('/crypto', isTokensLoaded, getTokenData);
router.get('/crypto/:id', getTokenById);

module.exports = router;
