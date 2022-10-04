const client = require('../../config/database');

/**
 * @typedef {object} AuthUser
 * @property {number} id - Database primary key of the user
 * @property {string} firstname - User firstname
 * @property {string} lastname - User lastname
 * @property {string} email - User email
 * @property {string} avatar - User avatar
 * @property {string} role_application - User role in web application
 * @property {number} token - Generated Json Web Token
 */

/**
 * @typedef {object} AuthInput
 * @property {string} email - Email used for connection
 * @property {string} password - Password used for connection
 */

/**
 * @typedef {object} AuthProfilUpdate
 * @property {string} password - Password to change
 * @property {string} phone_number - Phone number to change
 * @property {string} mobile_number - Mobile number to change
 */

module.exports = {
  /**
   * Find one user
   * @param {AuthInput} authInputs - Email and Password for authentication
   * @returns {AuthUser|null} - Return User or null if no user found
   */
  async findOne(email) {
    const result = await client.query(
      `
      SELECT 
        "id", 
        "firstname", 
        "lastname", 
        "email", 
        "avatar",
        "role_application",
        "password"
      FROM "employee" 
      WHERE "email" = $1 
      `,
      [email],
    );

    if (result.rowCount === 0) {
      return null;
    }

    return result.rows[0];
  },

  /**
   * Find one user
   * @param {string} email - Email for authentication
   * @returns {AuthUser|null} - Return User or null if no user found
   */
  async findForgotOne(email) {
    const result = await client.query(
      `
      SELECT 
        "id", 
        "firstname", 
        "lastname", 
        "email", 
        "avatar",
        "role_application" 
      FROM "employee" 
      WHERE "email" = $1
      `,
      [email],
    );

    if (result.rowCount === 0) {
      return null;
    }

    return result.rows[0];
  },

  /**
   * Find one user
   * @param {number} userId - User primary key id in database
   * @returns {AuthUser|null} - Return User or null if no user found
   */
  async findByPk(userId) {
    const result = await client.query(
      `
      SELECT 
        "id", 
        "firstname", 
        "lastname", 
        "email", 
        "avatar",
        "role_application" 
      FROM "employee" 
      WHERE "id" = $1 
      `,
      [userId],
    );

    if (result.rowCount === 0) {
      return null;
    }

    return result.rows[0];
  },
};
