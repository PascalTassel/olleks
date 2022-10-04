const Joi = require('joi');

module.exports = Joi.object({
  email: Joi.string()
    .min(3)
    .email()
    .required(),
}).required();
