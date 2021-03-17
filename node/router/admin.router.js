const router = require('express').Router();

const adminController = require('../controller/adminControlle');

router.get('/', adminController.getAllUsers);

router.get('/:id', adminController.getUserById);

router.delete('/:id', adminController.deleteUser);

module.exports = router;
