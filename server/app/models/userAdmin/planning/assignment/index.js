const client = require('../../../../config/database');
const { ApiError } = require('../../../../helpers/errorHandler');

module.exports = {
  /**
   * Find all users
   * @returns {User|undefined} - response of all users or undefined if no users found
   */
  async findAll() {
    const result = await client.query('SELECT * FROM "assignment" ORDER BY "position";');

    if (result.rowCount === 0) {
      throw new ApiError(404, 'Assignments not found');
    }

    return result.rows;
  },

};
