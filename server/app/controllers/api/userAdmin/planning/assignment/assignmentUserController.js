const userAssignmentDatamapper = require('../../../../../models/userAdmin/planning/assignment/user');
const assignmentUserAdminDatamapper = require('../../../../../models/userAdmin/planning/assignment');
const userAdminDatamapper = require('../../../../../models/userAdmin/user');
const siteAdminDatamapper = require('../../../../../models/userAdmin/site');
const absenceAdminDatamapper = require('../../../../../models/userAdmin/absence');

const { ApiError } = require('../../../../../helpers/errorHandler');

const controller = {
  /**
   * UserAdmin controller to get all assignments
   * ExpressMiddleware signature
   * @param {object} req Express req.object
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  async getAll(req, res) {
    const assignments = await assignmentUserAdminDatamapper.findAll();

    if (!assignments) {
      throw new ApiError(404, 'Assignments not found');
    }

    return res.json(assignments);
  },

  /**
   * UserAdmin controller to create an user assignment
   * ExpressMiddleware signature
   * @param {object} req Express req.object used for url id and body params
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  async create(req, res) {
    const user = await userAdminDatamapper.findByPk(req.body.employee_id);

    if (!user) {
      throw new ApiError(404, 'User not found');
    }

    if (req.body.site_id) {
      const site = await siteAdminDatamapper.findByPk(req.body.site_id);

      if (!site) {
        throw new ApiError(404, 'Site not found');
      }
    }

    if (req.body.absence_id) {
      const absence = await absenceAdminDatamapper.findByPk(req.body.absence_id);

      if (!absence) {
        throw new ApiError(404, 'Absence not found');
      }
    }

    const userAssignment = await userAssignmentDatamapper.insert(req.body);

    return res.json(userAssignment);
  },

  /**
   * UserAdmin controller to update an user assignment
   * ExpressMiddleware signature
   * @param {object} req Express req.object
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  async update(req, res) {
    const user = await userAdminDatamapper.findByPk(req.body.employee_id);

    if (!user) {
      throw new ApiError(404, 'User not found');
    }

    if (req.body.site_id) {
      const site = await siteAdminDatamapper.findByPk(req.body.site_id);

      if (!site) {
        throw new ApiError(404, 'Site not found');
      }
    }

    if (req.body.absence_id) {
      const absence = await absenceAdminDatamapper.findByPk(req.body.absence_id);

      if (!absence) {
        throw new ApiError(404, 'Absence not found');
      }
    }

    const userAssignment = await userAssignmentDatamapper.update(req.params.id, req.body);

    return res.json(userAssignment);
  },

  /**
   * UserAdmin controller to delete an assignment
   * ExpressMiddleware signature
   * @param {object} req Express req.object used for url id
   * @param {object} res Express response object
   * @returns {object} Route API JSON response
   */
  async delete(req, res) {
    const assignmentDelete = await userAssignmentDatamapper.delete(req.params.id);

    return res.status(200).json({
      isDeleted: assignmentDelete,
      statusCode: 200,
      message: 'Assignment deleted successfully',
    });
  },

};

module.exports = controller;
