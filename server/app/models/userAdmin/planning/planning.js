const client = require('../../../config/database');

/**
 * @typedef {object} Week
 * @property {string} weekStart - Monday start of the week
 * @property {Planning} planning - Array of the planning for this period
 */

/**
 * @typedef {array} Planning
 * @property {number} company_id - Company PK in database
 * @property {string} company_name - Company name
 * @property {Sites} sites - Sites of the company
 */

/**
 * @typedef {array} Sites
 * @property {number} id - Database primary key of site
 * @property {string} site_name - site name
 * @property {array.<Assignments>} assignments - Assignments
 */

/**
 * @typedef {array} Assignments
 * @property {number} id - Database primary key of assignment
 * @property {string} starting_date - assignment starting date
 * @property {string} ending_date - assignment ending date
 * @property {number} position - card position
 * @property {string} visibility - planning visibility for the User/employee
 * @property {Employee} employees - employees assigned
 */

/**
 * @typedef {object} Employee
 * @property {number} id - Employee Pk in database
 * @property {string} firstname - Employee firstname
 * @property {string} lastname - Employee lastname
 */

module.exports = {
  /**
   * Find a Week planning with ISO date of the week planning
   * @param {string} mondayIsoDate - Week monday ISO date ID
   * @param {string} sundayIsoDate - Week sunday ISO date ID
   * @returns {Week[]} - Response of Week
   */
  async findByDates(weekDates) {
    const result = await client.query(
      `
      SELECT * FROM get_Week_admin_planning 
      WHERE 
        $1 
        BETWEEN starting_date AND ending_date
        OR $2 
        BETWEEN starting_date AND ending_date
        OR $3
        BETWEEN starting_date AND ending_date
        OR $4 
        BETWEEN starting_date AND ending_date
        OR $5
        BETWEEN starting_date AND ending_date
        OR $6 
        BETWEEN starting_date AND ending_date
        OR $7
        BETWEEN starting_date AND ending_date
      `,
      [
        weekDates[0],
        weekDates[1],
        weekDates[2],
        weekDates[3],
        weekDates[4],
        weekDates[5],
        weekDates[6],
      ],
    );

    return result.rows;
  },

  /**
   * Find a absence in a Week planning with ISO dates of the week planning
   * @param {string} mondayIsoDate - Week monday ISO date ID
   * @param {string} sundayIsoDate - Week sunday ISO date ID
   * @returns {Week[]} - Response of Week
   */
  async findByAbsenceDates(weekDates) {
    const result = await client.query(
      `
      SELECT * FROM get_Week_absence_admin_planning 
      WHERE 
        $1 
        BETWEEN starting_date AND ending_date
        OR $2 
        BETWEEN starting_date AND ending_date
        OR $3
        BETWEEN starting_date AND ending_date
        OR $4 
        BETWEEN starting_date AND ending_date
        OR $5
        BETWEEN starting_date AND ending_date
        OR $6 
        BETWEEN starting_date AND ending_date
        OR $7
        BETWEEN starting_date AND ending_date
      `,
      [
        weekDates[0],
        weekDates[1],
        weekDates[2],
        weekDates[3],
        weekDates[4],
        weekDates[5],
        weekDates[6],
      ],
    );

    return result.rows;
  },

};
