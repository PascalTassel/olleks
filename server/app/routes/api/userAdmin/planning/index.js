const express = require('express');

const planningRouter = require('./planning');
const assignmentRouter = require('./assignment');

const { ApiError } = require('../../../../helpers/errorHandler');

const router = express.Router();

router.use('/assignment', assignmentRouter);
router.use('/', planningRouter);

router.use(() => {
  throw new ApiError(404, '404 Not Found');
});

module.exports = router;
