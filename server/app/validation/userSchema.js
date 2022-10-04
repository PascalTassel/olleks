const Joi = require('joi');

module.exports = Joi.object({
  password: Joi.string()
    .min(3)
    .required(),
  phone_number: Joi.string()
    .min(10)
    .required(),
  mobile_number: Joi.string()
    .min(10)
    .required(),
}).required();
