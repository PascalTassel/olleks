const Joi = require('joi');

module.exports = Joi.object({
  name: Joi.string()
    .min(2)
    .required(),
  address: Joi.string()
    .required(),
  zip_code: Joi.number()
    .required(),
  manager_name: Joi.string()
    .required(),
  estimated_duration: Joi.number()
    .required(),
  company_id: Joi.number()
    .min(1)
    .required(),
}).required();
