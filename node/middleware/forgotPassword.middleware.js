const { ErrorHendler, errorMessage } = require('../textMessages');
const { registrationService } = require('../service');
const { userForgotPasswordValidator } = require('../validator');

module.exports = {
    isUserValid: (req, res, next) => {
        try {
            const { error } = userForgotPasswordValidator.forgotPasswordValidator.validate(req.body);

            if (error) {
                throw new Error(error.details[0].message);
            }

            next();
        } catch (e) {
            next(e);
        }
    },

    isEmailRegistered: async (req, res, next) => {
        try {
            const { email } = req.body;

            const isEmail = await registrationService.findEmail(email);

            if (!isEmail) {
                throw new ErrorHendler(errorMessage.USER_NOT_FOUND.status, errorMessage.USER_NOT_FOUND.customCode);
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};
