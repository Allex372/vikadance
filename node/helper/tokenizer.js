const jwt = require('jsonwebtoken');
const { config:{ JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } } = require('../config');

module.exports = () => {
    const access_token = jwt.sign({}, JWT_ACCESS_SECRET, { expiresIn: '20s' });
    const refresh_token = jwt.sign({}, JWT_REFRESH_SECRET, { expiresIn: '30d' });

    return{
        access_token,
        refresh_token
    };
};

