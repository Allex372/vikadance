const Joi = require('joi');
const { regexp } = require('../../constant');

module.exports = Joi.object({
    email: Joi.string().regex(regexp.EMAIL_REGEXP).required(),
    secret_word: Joi.string().regex(regexp.SECRET_WORD_REGEXP).required(),
    new_password: Joi.string().alphanum().min(8).required()
});
