var constants = require("../lib/constants.js");

var login = function () {
    this.dispatch(constants.LOGIN, null);
};

var logout = function () {
    this.dispatch(constants.LOGOUT, null);
};

module.exports = {
    login: login,
    logout: logout
};
