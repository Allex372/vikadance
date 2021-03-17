const jwt = require('jsonwebtoken');
const { O_Auth } = require('../dataBase/model');
const { config: { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } } = require('../config');
const { constants: { AUTHORIZATION }, errorCodesEnum,   } = require('../constant');
const { ErrorHendler, errorMessage } = require('../textMessages');
const { authService } = require('../service');

module.exports = {
    checkAccessToken: async (req, res, next) => {
        try {
            const access_token = req.get('Authorization');

            if (!access_token) {
                throw new Error('You have not token')
            }

            const tokens = O_Auth.findOne({ access_token }).populate('user');

            if (!tokens){
                throw new Error('Not valid token');
            }

            jwt.verify(access_token, JWT_ACCESS_SECRET, (err) => {
                if (err){
                    throw new Error('Not verify token');
                }
            });

            next();
        } catch (e) {
          res.json(e.message)
        }
    },

    checkRefreshTokenMiddleware: async (req, res, next) => {
        try {
            const refresh_token = req.get(AUTHORIZATION);

            if (!refresh_token) {
                throw new ErrorHendler(errorCodesEnum.BAD_REQUEST, errorMessage.TOKEN_REQUIRED.customCode);
            }

            jwt.verify(refresh_token, JWT_REFRESH_SECRET, (err) => {
                if (err) {
                    throw new ErrorHendler(errorCodesEnum.UNAUTHORIZED, errorMessage.NOT_VALID_TOKEN.customCode);
                }
            });

            const tokens = await authService.findByParams({ refresh_token });

            if (!tokens) {
                throw new ErrorHendler(errorCodesEnum.NOT_FOUND, errorMessage.NOT_FOUND.customCode);
            }

            req.tokenInfo = tokens;
            next();
        } catch (e) {
            next(e);
        }
    }
};
