const express = require('express');
const websiteRouter = require('./website');
const apiRouter = require('./api');

const { errorHandler } = require('../helpers/errorHandler');

const router = express.Router();

router.use('/api', apiRouter);
router.use('/', websiteRouter);

router.use((err, _, response, next) => {
  errorHandler(err, response, next);
});

module.exports = router;
