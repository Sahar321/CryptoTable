const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const handleMainError = require('./middleware/handleMainError');
const cryptoApi = require('./api/cryptoApi');
const router = require('./routes/router');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());
app.options('*', cors());
app.use(router);
app.use(handleMainError);

cryptoApi.fetchCryptoTokens();

const { PORT = 3001 } = process.env;
app.listen(PORT);
