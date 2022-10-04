const client = require('../../../../config/database');
const { ApiError } = require('../../../../helpers/errorHandler');

/**
 * @typedef {array} Assignment
 * @property {number} id - Database primary key of assignment
 * @property {string} starting_date - assignment starting date
 * @property {string} ending_date - assignment ending date
 * @property {string} color - assignment card color
 * @property {number} position - card position
 * @property {string} visibility - planning visibility for the User/employee
 * @property {number} employee_id - employee PK id assigned
 * @property {number} absence_id - absence PK id assigned or null
 * @property {number} site_id - site PK id assigned or null
 * @property {string} created_at - Db timestamptz of create
 * @property {string} updated_at - Db timestamptz of update
 */

/**
 * @typedef {array} AssignmentToCreate
 * @property {string} starting_date - assignment starting date
 * @property {string} ending_date - assignment ending date
 * @property {string} color - assignment card color
 * @property {number} position - card position
 * @property {boolean} visibility - planning visibility for the User/employee
 * @property {number} employee_id - employee PK id assigned
 * @property {number} site_id - site PK id assigned or null
 * @property {number} absence_id - absence PK id assigned or null
 */

/**
 * @typedef {object} AssignmentDelete
 * @property {boolean} isDeleted - Status
 * @property {number} statusCode - HTTP Status code
 * @property {string} message - Status message
 */

module.exports = {
  /**
   * Insert User assignment to a Site
   * @param {AssignmentToCreateInAbsence} assignment - Body request
   * @returns {Assignment} - Return the new user
   */
  async insert(assignment) {
    const assignmentToCreate = await client.query(
      `
      SELECT * FROM insert_assignment($1);`,
      [assignment],
    );

    return assignmentToCreate.rows[0];
  },

  /**
   * Update Assignment
   * @param {number} assignmentId - Assignment ID
   * @param {object} site - Body request
   * @returns {Assignment|ApiError} - Return updated site or ApiError if site not found
   */
  async update(assignmentId, assignment) {
    const result = await client.query('SELECT * FROM "assignment" WHERE "id" = $1', [assignmentId]);

    if (result.rowCount === 0) {
      throw new ApiError(400, 'Assignment doesn\'t exist');
    }

    Object.assign(assignment, {
      id: parseInt(assignmentId, 10),
    });

    const siteToSave = await client.query(
      `
      SELECT * FROM update_assignment($1);
      `,
      [assignment],
    );

    return siteToSave.rows[0];
  },

  /**
   * Remove assignment
   * @param {number} assignmentId - Assignment ID
   * @returns {boolean|ApiError} - Return boolean or ApiError if assignment not found
   */
  async delete(assignmentId) {
    const result = await client.query('SELECT * FROM "assignment" WHERE "id" = $1;', [assignmentId]);

    if (result.rowCount === 0) {
      throw new ApiError(404, 'Assignment not found');
    }

    const assignmentToDelete = await client.query('DELETE FROM "assignment" WHERE "id" = $1;', [assignmentId]);

    return !!assignmentToDelete.rowCount;
  },

};
