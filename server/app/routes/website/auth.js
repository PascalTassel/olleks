const express = require('express');

const validate = require('../../validation');
const authSchema = require('../../validation/authConnectionSchema');

const { websiteAuth } = require('../../controllers');
const controllerHandler = require('../../helpers/websiteControllerHandler');

const router = express.Router();

router
  .route('/')
  /**
   * POST /login
   * @summary Connect on website
   * @tags 1.Authentification
   * @param {AuthInput} request.body.required - User email/password
   * @return {AuthUser} 200 - success response - application/json
   * @return {WebsiteError} 400 - Bad request response - application/json
   * @return {WebsiteError} 401 - Incorrect email/password association - application/json
   * @return {WebsiteError} 500 - Internal server error - application/json
   */
  .post(validate('body', authSchema), controllerHandler(websiteAuth.loginAction));

module.exports = router;
