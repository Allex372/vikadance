const router = require('express').Router();

const adminController = require('../controller/adminControlle');

const { authMiddleware } = require('../middleware');

router.delete('/:id', authMiddleware.checkAccessToken,  adminController.deleteUser);

module.exports = router;
