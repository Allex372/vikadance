const router = require('express').Router();

const adminController = require('../controller/adminControlle');

router.get('/', adminController.getAllUsers);

router.get('/:id', adminController.getUserById);

router.post('/', adminController.createAdminProfile);

router.post('/find', adminController.findByEmail);

// router.post('/spam', adminController.sendSpamEmails);

router.delete('/:id', adminController.deleteUser);

module.exports = router;
