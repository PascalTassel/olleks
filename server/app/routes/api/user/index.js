const express = require('express');
// ? NOT IN MVP - const cache = require('../../../helpers/redisCache');

const validate = require('../../../validation');
const userSchema = require('../../../validation/userSchema');

const { userController } = require('../../../controllers');
const controllerHandler = require('../../../helpers/apiControllerHandler');

const { protect } = require('../../../helpers/authProtect');

const router = express.Router();

router
  .route('/:id(\\d+)')
  /**
   * GET /api/user/{id}
   * @summary Get one user
   * @tags 2.User
   * @param {number} id.path.required - User identifier
   * @return {RestUser} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - User not found - application/json
   * @return {ApiError} 500 - Internal server error - application/json
   */
  .get(controllerHandler(protect), controllerHandler(userController.getOne));

router
  .route('/:id(\\d+)/profil')
  /**
   * PATCH /api/user/{id}/profil
   * @summary Update one user profile
   * @tags 2.User
   * @param {number} id.path.required - User identifier
   * @param {AuthProfilUpdate} request.body.required - Body request with user phone number, mobile number or password to update
   * @return {UserUpdate} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - User not found - application/json
   * @return {ApiError} 500 - Internal server error - application/json
   */
  .patch(controllerHandler(protect), validate('body', userSchema), controllerHandler(userController.update));

module.exports = router;
