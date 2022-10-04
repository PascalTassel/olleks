/* eslint-disable prefer-destructuring */
const jwt = require('jsonwebtoken');
const authDatamapper = require('../models/website/auth');
const { WebsiteError } = require('./errorHandler');

const protect = async (req, res, next) => {
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
      req.user = await authDatamapper.findOne(decoded.id);

      next();
    } catch (err) {
      throw new WebsiteError(401, 'Unauthorized Access');
    }
  }

  if (!token) {
    throw new WebsiteError(401, 'Token is missing, Unauthorized Access');
  }
};

module.exports = { protect };
