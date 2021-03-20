const { User } = require('../dataBase/model');

module.exports = {
    findByEmail: (email) => User.findOne({ email }),
    updateUserPassword: (userEmail, newPassword) => User.updateOne({ email: userEmail }, { $set: { password: newPassword } })
};
