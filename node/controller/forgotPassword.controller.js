const { forgotPasswordService } = require('../service');
const { passwordHelper } = require('../helper');
const { ErrorHendler, errorMessage: { USER_NOT_FOUND } } = require('../textMessages');

module.exports = {
    getUser_ChangePassword: async (req, res) => {
        try {
            const { email, secret_word, new_password } = req.body;

            const user = await forgotPasswordService.findByEmail(email);

            if (!user) {
                throw new ErrorHendler(USER_NOT_FOUND.status, USER_NOT_FOUND.customCode);
            }

            await passwordHelper.compare(secret_word, user.secret_word);

            const hash_New_Password = await passwordHelper.hash(new_password);

            await forgotPasswordService.updateUserPassword(email, hash_New_Password);

            res.json('password updated');
        } catch (e) {
            res.json(e.message);
        }
    },

};
