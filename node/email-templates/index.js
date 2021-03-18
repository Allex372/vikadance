const { emailActions } = require('../constant');

module.exports = {
    [emailActions.WELCOME]: {
        templateName: 'welcome',
        subject: 'Welcome on board'
    }
};
