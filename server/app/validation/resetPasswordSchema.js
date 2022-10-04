const Joi = require('joi');

module.exports = Joi.object({
  password: Joi.string()
    .min(3)
    .required(),
  confirmPassword: Joi.string()
    .min(3)
    .required(),
}).required();
