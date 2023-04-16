const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(3).max(20).regex(/^[a-zA-Z0-9]/)
    .required(),
});

module.exports = loginSchema;
