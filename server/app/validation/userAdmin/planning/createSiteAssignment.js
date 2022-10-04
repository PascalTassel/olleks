const Joi = require('joi');

module.exports = Joi.object({
  starting_date: Joi.date()
    .iso()
    .required(),
  ending_date: Joi.date()
    .iso()
    .required(),
  color: Joi.string()
    .required(),
  position: Joi.number()
    .required(),
  visibility: Joi.boolean()
    .required(),
  employee_id: Joi.number()
    .min(1)
    .required(),
  site_id: Joi.number()
    .allow(null)
    .required(),
  absence_id: Joi.number()
    .allow(null)
    .required(),
}).required();
