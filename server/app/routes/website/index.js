const express = require('express');

const authRouter = require('./auth');
const forgotPasswordRouter = require('./forgotPassword');
const resetPasswordRouter = require('./resetPassword');
const checkTokenRouter = require('./checkToken');

const { websiteController } = require('../../controllers');

const controllerHandler = require('../../helpers/websiteControllerHandler');
const { WebsiteError } = require('../../helpers/errorHandler');

const router = express.Router();

router.all('/', controllerHandler(websiteController.home));

router.use('/login', authRouter);
router.use('/forgot-password', forgotPasswordRouter);
router.use('/reset-password', resetPasswordRouter);
router.use('/check-token', checkTokenRouter);

router.use(() => {
  throw new WebsiteError(404, '404 Not Found');
});

module.exports = router;
