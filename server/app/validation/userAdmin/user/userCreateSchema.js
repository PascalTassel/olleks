const Joi = require('joi');

const now = Date.now();
// Allow to fix minimum age of user to 17 years
const cutoffDate = new Date(now - (1000 * 60 * 60 * 24 * 365 * 17));

module.exports = Joi.object({
  firstname: Joi.string()
    .min(2)
    .required(),
  lastname: Joi.string()
    .min(2)
    .required(),
  email: Joi.string()
    .min(3)
    .email()
    .required(),
  password: Joi.string()
    .min(3)
    .required(),
  phone_number: Joi.string()
    .min(10)
    .required(),
  mobile_number: Joi.string()
    .min(10)
    .required(),
  social_security_number: Joi.string()
    .min(13)
    .max(15)
    .required(),
  date_of_birth: Joi.date()
    .iso()
    .less('now')
    .max(cutoffDate)
    .required(),
  address: Joi.string()
    .required(),
  zip_code: Joi.number()
    .required(),
  starting_date: Joi.date()
    .iso()
    .required(),
  avatar: Joi.string(),
  fonction: Joi.string()
    .required(),
  role_application: Joi.string()
    .required(),
  qualification_label: Joi.string(),
}).required();
