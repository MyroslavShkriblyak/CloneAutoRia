const Joi = require('joi');

module.exports = {
  newCarValidator: Joi.object({
    brand: Joi.string().required(),
    model: Joi.string().min(2).required(),
    price: Joi.string().min(0).max(100000).required()
  }),
  editCarValidator: Joi.object({
    brand: Joi.string().optional(),
    model: Joi.string().min(2).optional(),
    price: Joi.string().min(0).max(100000).optional()
  })
};
