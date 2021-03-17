const { O_Auth } = require('../dataBase/model');

module.exports = {
    findUser: (userId) => O_Auth.findOne({ "_user_id": userId })
};
