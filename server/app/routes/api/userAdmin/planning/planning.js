const express = require('express');
// ? NOT IN MVP - const cache = require('../../../../helpers/redisCache');

const { userAdminPlanningController } = require('../../../../controllers');

const controllerHandler = require('../../../../helpers/apiControllerHandler');

const { protect } = require('../../../../helpers/authProtect');

const router = express.Router();

router
  .route('/:slugYearWeekId([2][0][0-9][0-9]-(?:[0-4][0-9]|[5][0-3]))')
  /**
   * GET /api/admin/planning/{slugYearWeekId}
   * @summary Get one week of planning information
   * @tags 6.UserAdmin - Planning CRUD section
   * @param {string} slugYearWeekId.path.required - Week identifier YYYY-WW
   * @return {Week} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - Week not found - application/json
   * @return {ApiError} 500 - Internal server error - application/json
   */
  .get(controllerHandler(protect), controllerHandler(userAdminPlanningController.getOne));

module.exports = router;
