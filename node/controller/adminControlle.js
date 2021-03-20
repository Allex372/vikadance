const adminService = require('../service/adminService');
const { passwordHelper } = require('../helper');
const { ErrorHendler, errorMessage: { USER_WAS_DELETED, USER_IS_CREATED } } = require('../textMessages');

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

    findByEmail: async (req, res) => {
        try {
            const { email } = req.body;
            const finderUser = await adminService.findByEmail(email);
            res.json(finderUser);
        } catch (e) {
            res.json(e.message);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const userData = req.params.id;
            await adminService.deleteUser(userData);

            throw new ErrorHendler(USER_WAS_DELETED.status, USER_WAS_DELETED.customCode);
        } catch (e) {
            res.json(e.message);
        }
    },

    // sendSpamEmails: async (req, res, next) => {
    //     try {
    //         const { email, password, role } = req.body;
    //
    //         const user = await adminService.findAdminByEmail(email);
    //
    //         if (!user) {
    //             throw new ErrorHendler(errorMessage.USER_NOT_FOUND.status);
    //         }
    //
    //         await passwordHelper.compare(password, user.password);
    //
    //         if (email !== 'admin@gmail.com' && role !== 'admin') {
    //             res.json('Error');
    //         }
    //
    //         const emailMass = [];
    //
    //         await User.find({}, (err, users) => {
    //             users.forEach((el) => emailMass.push(el.email));
    //         });
    //
    //         await emailService.sendMailMass(emailActions.INFO, emailMass);
    //
    //         res.json('SenT');
    //     } catch (e) {
    //         next(e);
    //     }
    // },

    createAdminProfile: async (req, res, next) => {
        try {
            const { email, role, password } = req.body;

            const hashPassword = await passwordHelper.hash(password);

            await adminService.createUser({ ...req.body, password: hashPassword });

            res.json(USER_IS_CREATED);

            next();
        } catch (e) {
            next(e);
        }
    }
};
