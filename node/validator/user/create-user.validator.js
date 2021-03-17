const Joi = require('joi');
const { regexp } = require('../../constant');

module.exports = Joi.object({
    login: Joi.string().alphanum().min(3).max(20).required(),
    email: Joi.string().regex(regexp.EMAIL_REGEXP).required(),
    password: Joi.string().alphanum().min(8).required()
});
