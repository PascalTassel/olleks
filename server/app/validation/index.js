const debug = require('debug')('Validator:log');
const { WebsiteError } = require('../helpers/errorHandler');

/**
 * Express Middleware for object validation in request
 * @param {String} prop - Name's property of the request object to validate
 * @param {Joi.object} schema - Validation schema of JOI module
 * @returns {function} Express Middleware who return body request or WebsiteError 400
 */
module.exports = (prop, schema) => async (req, _, next) => {
  try {
    debug(req[prop]);
    await schema.validateAsync(req[prop]);
    next();
  } catch (error) {
    next(new WebsiteError(400, error.details[0].message));
  }
};
