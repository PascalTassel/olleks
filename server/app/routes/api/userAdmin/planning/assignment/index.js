const express = require('express');
// ? const cache = require('../../../../../helpers/redisCache');

const userRouter = require('./user');

const { assignmentUserController } = require('../../../../../controllers');

const controllerHandler = require('../../../../../helpers/apiControllerHandler');

const { ApiError } = require('../../../../../helpers/errorHandler');

const { protect } = require('../../../../../helpers/authProtect');

const router = express.Router();

router.use('/', userRouter);

router
  .route('/')
  /**
   * GET /api/admin/planning/assignment
   * @summary Get all assignments
   * @tags 6.UserAdmin - Planning CRUD section
   * @return {array.<Assignment>} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - User not found - application/json
   * @return {ApiError} 500 - Internal server error - application/json
   */
  .get(controllerHandler(protect), controllerHandler(assignmentUserController.getAll));

router.use(() => {
  throw new ApiError(404, '404 Not Found');
});

module.exports = router;
