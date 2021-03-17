module.exports = {
    EMAIL_REGEXP: new RegExp(/\S+@\S+\.\S+/),
    PASSWORD_REGEXP: new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
};
