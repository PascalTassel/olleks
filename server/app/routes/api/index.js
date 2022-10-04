const express = require('express');

const userRouter = require('./user');
const userAdminRouter = require('./userAdmin');

const { ApiError } = require('../../helpers/errorHandler');

const router = express.Router();

router.use('/user', userRouter);
router.use('/admin', userAdminRouter);

router.use(() => {
  throw new ApiError(404, '404 Not Found');
});

module.exports = router;
