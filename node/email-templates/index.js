const { emailActions } = require('../constant');

module.exports = {
    [emailActions.WELCOME]: {
        templateName: 'welcome',
        subject: 'Welcome on board'
    },
    [emailActions.INFO]: {
        templateName: 'info',
        subject: 'We want to be a friends with You'
    }
};
