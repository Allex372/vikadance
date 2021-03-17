const adminService = require('../service/adminService');

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            const users = await adminService.findAllUser();

            res.json(users);
        } catch (e) {
            res.json(e.message);
        }
    },

    getUserById: async (req, res) => {
        try {
            const userData = req.params.id;
            const finderUser = await adminService.findUserById(userData);
            res.json(finderUser);
        } catch (e) {
            res.json(e.message);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const userData = req.params.id;
            await adminService.deleteUser(userData);

            console.log(userData);

            res.json('User Deleted');
        } catch (e) {
            res.json(e.message);
        }
    }
};
