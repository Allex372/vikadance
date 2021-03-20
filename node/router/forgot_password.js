const router = require('express').Router();

const { forgotPasswordController } = require('../controller');
const { forgotPasswordMiddleware } = require('../middleware');

router.post('/',
    forgotPasswordMiddleware.isEmailRegistered,
    forgotPasswordMiddleware.isUserValid,
    forgotPasswordController.getUser_ChangePassword);

module.exports = router;
