const express = require('express');

const { websiteAuth } = require('../../controllers');
const controllerHandler = require('../../helpers/websiteControllerHandler');

const router = express.Router();

router
  .route('/')
  /**
   * POST /check-token
   * @summary Connect on website
   * @tags 1.Authentification
   * @return {AuthUser} 200 - success response - application/json
   * @return {WebsiteError} 400 - Bad request response - application/json
   * @return {WebsiteError} 401 - Invalid Token - application/json
   * @return {WebsiteError} 500 - Internal server error - application/json
   */
  .post(controllerHandler(websiteAuth.checkTokenAction));

module.exports = router;
