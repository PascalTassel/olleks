/* eslint-disable prefer-destructuring */
const emailValidator = require('email-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { generateToken } = require('../../helpers/generateToken');
const authDatamapper = require('../../models/website/auth');

const { WebsiteError } = require('../../helpers/errorHandler');

const controller = {
  /**
   * Login action
   * ExpressMiddleware signature
   * @param {object} req Express request object : {email, password}
   * @param {object} res Express response object
   * @returns {user} Route API JSON response
   */
  async loginAction(req, res) {
    const { email } = req.body;
    const { password } = req.body;

    if (!email || !password) {
      throw new WebsiteError(400, 'Email or password required');
    }

    const isEmailValid = emailValidator.validate(email);

    if (!isEmailValid) {
      throw new WebsiteError(400, 'Invalid Email');
    }

    const user = await authDatamapper.findOne(email);

    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        avatar: user.avatar,
        role_application: user.role_application,
        token: generateToken(user.id, '24h'),
      });
    } else {
      throw new WebsiteError(401, 'Email or password invalid');
    }
  },

  /**
   * check token action
   * ExpressMiddleware signature
   * @param {object} req Express request object : {token}
   * @param {object} res Express response object
   * @returns {user} Route API JSON response
   */
  async checkTokenAction(req, res) {
    let token;

    if (
      req.headers.authorization
      && req.headers.authorization.startsWith('bearer')
    ) {
      try {
        // Get token from header
        token = req.headers.authorization.split(' ')[1];

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Get user from the token
        req.user = await authDatamapper.findByPk(decoded.id);

        if (req.user) {
          res.json({
            id: req.user.id,
            firstname: req.user.firstname,
            lastname: req.user.lastname,
            email: req.user.email,
            avatar: req.user.avatar,
            role_application: req.user.role_application,
            token: generateToken(req.user.id, '24h'),
          });
          console.log('file: authController.js ~ line 79 ~ checkTokenAction ~ req.user', req.user);
        }
      } catch (err) {
        throw new WebsiteError(401, 'Unauthorized Access');
      }
    }

    if (!token) {
      throw new WebsiteError(401, 'Token is missing, Unauthorized Access');
    }
  },

};

module.exports = controller;
