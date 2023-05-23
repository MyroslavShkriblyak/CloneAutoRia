const Joi = require('joi');

const { regexp } = require('../../enum');


module.exports = {
  newUserValidator: Joi.object({
    name: Joi.string().min(2).max(20).required(),
    surname: Joi.string().min(3).max(30).required(),
    email: Joi.string().regex(regexp.EMAIL).trim().lowercase().required(),
    password: Joi.string().regex(regexp.PASSWORD).required(),
    role: Joi.string().optional(),
  })
};



