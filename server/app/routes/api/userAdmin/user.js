const express = require('express');
// ? NOT IN MVP - const cache = require('../../../helpers/redisCache');

const validate = require('../../../validation');
const userPatchSchema = require('../../../validation/userAdmin/user/userPatchSchema');
const userCreateSchema = require('../../../validation/userAdmin/user/userCreateSchema');

const { userAdminUserController } = require('../../../controllers');

const controllerHandler = require('../../../helpers/apiControllerHandler');

const { protect } = require('../../../helpers/authProtect');

const router = express.Router();

router
  .route('/')
  /**
   * GET /api/admin/user
   * @summary Get all users
   * @tags 3.UserAdmin - User CRUD section
   * @return {array.<User>} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - User not found - application/json
   * @return {ApiError} 500 - Internal server error - application/json
   */
  .get(controllerHandler(protect), controllerHandler(userAdminUserController.getAll))

  /**
   * POST /api/admin/user
   * @summary Create one user
   * @tags 3.UserAdmin - User CRUD section
   * @param {UserToCreate} request.body.required - Body request for create a new user
   * @return {UserCreate} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - User not found - application/json
   * @return {ApiError} 500 - Internal server error - application/json
   */
  .post(controllerHandler(protect), validate('body', userCreateSchema), controllerHandler(userAdminUserController.create));

router
  .route('/:id(\\d+)')
  /**
   * GET /api/admin/user/{id}
   * @summary Get one user
   * @tags 3.UserAdmin - User CRUD section
   * @param {number} id.path.required - User identifier
   * @return {User} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - User not found - application/json
   * @return {ApiError} 500 - Internal server error - application/json
   */
  .get(controllerHandler(protect), controllerHandler(userAdminUserController.getOne))

  /**
   * PATCH /api/admin/user/{id}
   * @summary Update one user
   * @tags 3.UserAdmin - User CRUD section
   * @param {number} id.path.required - User identifier
   * @param {UserToUpdate} request.body.required - Body request for update an user
   * @return {UserUpdate} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - User not found - application/json
   * @return {ApiError} 500 - Internal server error - application/json
   */
  .patch(controllerHandler(protect), validate('body', userPatchSchema), controllerHandler(userAdminUserController.update))

  /**
   * DELETE /api/admin/user/{id}
   * @summary Delete one user
   * @tags 3.UserAdmin - User CRUD section
   * @param {number} id.path.required - User identifier
   * @return {UserDelete} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - User not found - application/json
   * @return {ApiError} 500 - Internal server error - application/json
   */
  .delete(controllerHandler(protect), controllerHandler(protect), controllerHandler(userAdminUserController.delete));

module.exports = router;
