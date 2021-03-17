const User = require('../dataBase/model/User');

module.exports = {
    deleteUser: (userData) => User.findByIdAndDelete(userData)
};
