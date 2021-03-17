const { userService } = require('../service');

module.exports = {
    deleteUser: async (req, res) => {
        try {
            // const userData = req.params.id;
            // await userService.deleteUser(userData);

            const { userId } = req.params

            res.json(`${userId} was deleted`);
        } catch (e) {
            res.json(e.message);
        }
    }
};
