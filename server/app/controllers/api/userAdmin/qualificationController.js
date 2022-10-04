const qualificationAdminDatamapper = require('../../../models/userAdmin/qualification');
const { ApiError } = require('../../../helpers/errorHandler');

const controller = {
  /**
   * UserAdmin controller to get all qualifications
   * ExpressMiddleware signature
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  async getAll(_, res) {
    const qualifications = await qualificationAdminDatamapper.findAll();

    if (!qualifications) {
      throw new ApiError(404, 'Qualifications not found');
    }

    return res.json(qualifications);
  },

};

module.exports = controller;
