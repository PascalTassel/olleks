const client = require('../../config/database');

/**
 * @typedef {object} ForgotPassword
 * @property {string} email - User email
 */

/**
 * @typedef {object} ResetPassword
 * @property {string} password - User new password
 * @property {string} confirmPassword - User new password
 */

/**
 * @typedef {object} UserWithPassword
 * @property {number} id - User Pk in database
 * @property {string} firstname - User firstname
 * @property {string} lastname - User lastname
 * @property {string} email - User email
 * @property {string} password - User password
 * @property {string} phone_number - User phone number
 * @property {string} mobile_number - User mobile number
 * @property {string} address - User address
 * @property {number} zip_code - User zip code
 * @property {string} social_security_number - User social security number
 * @property {string} date_of_birth - User date of birth
 * @property {string} starting_date - User starting date
 * @property {string} avatar - User avatar
 * @property {string} fonction - User fonction
 * @property {string} role_application - User role in web application
 * @property {number} employee_qualification_id - FK of User qualification
 * @property {string} qualification_label - FK of User qualification label
 * @property {string} created_at - timestamp for the create in DB
 * @property {string} updated_at - timestamp for the create in DB
 */

module.exports = {
  /**
   * Search if user email already exist in database
   * @param {string} userEmail - User Email to find
   * @returns {UserWithPassword|ApiError} - Return User with his password or ApiError if userEmail not found
   */
  async findByEmail(userEmail) {
    const result = await client.query('SELECT * FROM "employee" WHERE email = $1', [userEmail]);

    return result.rows[0];
  },

};
