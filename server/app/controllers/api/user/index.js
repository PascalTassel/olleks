const userDatamapper = require('../../../models/user');
const { ApiError } = require('../../../helpers/errorHandler');
const { getRandomColor } = require('../../../helpers/randomMUIColors');

const controller = {
  /**
   * User controller to get an user with REST response
   * ExpressMiddleware signature
   * @param {object} req Express req.object used for url id params
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  async getOne(req, res) {
    const user = await userDatamapper.findByPk(req.params.id);

    if (!user) {
      throw new ApiError(404, 'User not found');
    }

    /**
     * Find colleagues of the user
     * Assign a random color to the user and the colleagues for the assignment card style
     */
    await Promise.all(user.assignments.map(async (assignment, index) => {
      const { starting_date, ending_date } = assignment;
      const siteId = assignment.site.id;
      const userId = req.params.id;

      const getColleagues = await userDatamapper.findColleagues(starting_date, ending_date, siteId, userId);

      getColleagues.forEach((_, i) => {
        Object.assign(getColleagues[i], { color: getRandomColor() });
      });

      Object.assign(user.assignments[index], { colleagues: [...getColleagues] });
    }));

    Object.assign(user, { color: getRandomColor() });

    return res.json(user);
  },

  /**
   * User controller to update an user
   * ExpressMiddleware signature
   * @param {object} req Express req.object used for url id and body params
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  async update(req, res) {
    const userUpdate = await userDatamapper.update(req.params.id, req.body);

    return res.json(userUpdate);
  },

};

module.exports = controller;
