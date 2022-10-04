const express = require('express');
// ? NOT IN MVP - const cache = require('../../../helpers/redisCache');

const validate = require('../../../validation');
const siteSchema = require('../../../validation/userAdmin/site');

const { userAdminSiteController } = require('../../../controllers');

const controllerHandler = require('../../../helpers/apiControllerHandler');

const { protect } = require('../../../helpers/authProtect');

const router = express.Router();

router
  .route('/')
  /**
   * GET /api/admin/site
   * @summary Get all sites
   * @tags 4.UserAdmin - Site CRUD section
   * @return {array.<SiteInDatabase>} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - User not found - application/json
   * @return {ApiError} 500 - Internal server error - application/json
   */
  .get(controllerHandler(protect), controllerHandler(userAdminSiteController.getAll))

  /**
   * POST /api/admin/site
   * @summary Create one site
   * @tags 4.UserAdmin - Site CRUD section
   * @param {Site} request.body.required - Body request for create a new site
   * @return {SiteInDatabase} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - site not found - application/json
   * @return {ApiError} 500 - Internal server error - application/json
   */
  .post(controllerHandler(protect), validate('body', siteSchema), controllerHandler(userAdminSiteController.create));

router
  .route('/:id(\\d+)')
  /**
   * GET /api/admin/site/{id}
   * @summary Get one site
   * @tags 4.UserAdmin - Site CRUD section
   * @param {number} id.path.required - Site identifier
   * @return {SiteInDatabase} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - site not found - application/json
   * @return {ApiError} 500 - Internal server error - application/json
   */
  .get(controllerHandler(protect), controllerHandler(userAdminSiteController.getOne))

  /**
   * PATCH /api/admin/site/{id}
   * @summary Update one site
   * @tags 4.UserAdmin - Site CRUD section
   * @param {number} id.path.required - Site identifier
   * @param {Site} request.body.required - Body request for update a site
   * @return {SiteInDatabase} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - Site not found - application/json
   * @return {ApiError} 500 - Internal server error - application/json
   */
  .patch(controllerHandler(protect), validate('body', siteSchema), controllerHandler(userAdminSiteController.update))

  /**
   * DELETE /api/admin/site/{id}
   * @summary Remove one site
   * @tags 4.UserAdmin - Site CRUD section
   * @param {number} id.path.required - Site identifier
   * @return {SiteDelete} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - Site not found - application/json
   * @return {ApiError} 500 - Internal server error - application/json
   */
  .delete(controllerHandler(protect), controllerHandler(userAdminSiteController.delete));

module.exports = router;
