const client = require('../../config/database');
const { ApiError } = require('../../helpers/errorHandler');

/**
 * @typedef {object} Qualification
 * @property {string} id - Qualification PK in the database
 * @property {string} label - Qualification label
 * @property {string} created_at - Qualification timestamptz creation
 * @property {string} updated_at - Qualification timestamptz update
 */

module.exports = {
  /**
   * Find all qualifications
   * @returns {Qualification|ApiError} - response of all qualifications or ApiError if no qualification found
   */
  async findAll() {
    const result = await client.query(
      `
        SELECT * FROM "employee_qualification";
      `,
    );

    if (result.rowCount === 0) {
      throw new ApiError(404, 'Qualifications not found');
    }

    return result.rows;
  },

};
