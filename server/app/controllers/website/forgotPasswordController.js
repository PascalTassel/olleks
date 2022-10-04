const emailValidator = require('email-validator');
// ? const bcrypt = require('bcryptjs');
const debug = require('debug')('http:forgotPassword');
const forgotPasswordDatamapper = require('../../models/website/forgotPassword');
const { generateResetPasswordToken } = require('../../helpers/generateToken');
const sendResetPasswordLink = require('../../helpers/sendResetPasswordLink');
const { WebsiteError } = require('../../helpers/errorHandler');
const { ApiError } = require('../../helpers/errorHandler');

const controller = {
  /**
   * Forgot Password action
   * ExpressMiddleware signature
   * @param {object} req Express request object
   * @param {object} res Express response object
   * @returns {string} Route API JSON response
   */
  async forgotPassword(req, res) {
    const { email } = req.body;

    if (!email) {
      throw new WebsiteError(400, 'Email required');
    }

    const isEmailValid = emailValidator.validate(email);

    if (!isEmailValid) {
      throw new WebsiteError(400, 'Invalid Email');
    }

    const user = await forgotPasswordDatamapper.findByEmail(email);

    if (!user) {
      throw new ApiError(404, 'Unregistered user');
    }

    const secret = process.env.JWT_SECRET + user.password;

    const payload = {
      id: user.id,
      email: user.email,
    };
    const duration = String(process.env.RESET_PASSWORD_TOKEN_DURATION);

    const token = generateResetPasswordToken(payload, secret, duration);

    const link = `http://localhost:${process.env.PORT}/reset-password/${user.id}/${token}`;

    sendResetPasswordLink(email, user.firstname, user.lastname, link);

    // ?      == DEV LOG ==
    debug({ link }, { duration });
    // ?          =====

    res.status(200).send('Password reset link has been sent to ur email...');
  },

};

module.exports = controller;
