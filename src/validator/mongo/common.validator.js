const Joi = require('joi');

const { regexp } = require('../../enum');

module.exports = {
  idValidator: Joi.string().regex(regexp.MONGO_ID)
}
