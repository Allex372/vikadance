module.exports = {
    EMAIL_REGEXP: new RegExp(/\S+@\S+\.\S+/),
    PASSWORD_REGEXP: new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
    // SecretWord:
    // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
    SECRET_WORD_REGEXP: new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
};
