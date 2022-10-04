const express = require('express');
// ? NOT IN MVP - const cache = require('../../../helpers/redisCache');

const { userAdminQualificationController } = require('../../../controllers');

const controllerHandler = require('../../../helpers/apiControllerHandler');

const { protect } = require('../../../helpers/authProtect');

const router = express.Router();

router
  .route('/')
  /**
   * GET /api/admin/qualification
   * @summary Get all qualifications
   * @tags 7.UserAdmin - qualification CRUD section
   * @return {array.<Qualification>} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - User not found - application/json
   * @return {ApiError} 500 - Internal server error - application/json
   */
  .get(controllerHandler(protect), controllerHandler(userAdminQualificationController.getAll));

module.exports = router;
