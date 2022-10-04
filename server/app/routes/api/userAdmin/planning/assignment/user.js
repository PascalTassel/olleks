const express = require('express');

const validate = require('../../../../../validation');
const userSiteAssignmentSchema = require('../../../../../validation/userAdmin/planning/createSiteAssignment');

const { assignmentUserController } = require('../../../../../controllers');

const controllerHandler = require('../../../../../helpers/apiControllerHandler');

const { protect } = require('../../../../../helpers/authProtect');

const router = express.Router();

router
  .route('/user')
  /**
   * POST /api/admin/planning/assignment/user
   * @summary Create User assignment in site_id OR absence_id
   * @tags 6.UserAdmin - Planning CRUD section
   * @param {AssignmentToCreate} request.body.required - Body request for create an user assignment
   * @return {Assignment} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - Week not found - application/json
   * @return {ApiError} 500 - Internal server error - application/json
   */
  .post(controllerHandler(protect), validate('body', userSiteAssignmentSchema), controllerHandler(assignmentUserController.create));

router
  .route('/:id(\\d+)/user')
  /**
   * PATCH /api/admin/planning/assignment/{id}/user
   * @summary Patch User assignment in site_id OR absence_id
   * @tags 6.UserAdmin - Planning CRUD section
   * @param {number} id.path.required - assignment identifier
   * @param {AssignmentToCreate} request.body.required - Body request for update an user assignment
   * @return {Assignment} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - Week not found - application/json
   * @return {ApiError} 500 - Internal server error - application/json
   */
  .patch(controllerHandler(protect), validate('body', userSiteAssignmentSchema), controllerHandler(assignmentUserController.update))

  /**
   * DELETE /api/admin/planning/assignment/{id}/user
   * @summary Delete User assignment
   * @tags 6.UserAdmin - Planning CRUD section
   * @param {number} id.path.required - assignment identifier
   * @return {AssignmentDelete} 200 - success response - application/json
   * @return {ApiError} 400 - Bad request response - application/json
   * @return {ApiError} 404 - User not found - application/json
   * @return {ApiError} 500 - Internal server error - application/json
   */
  .delete(controllerHandler(protect), controllerHandler(assignmentUserController.delete));

module.exports = router;
