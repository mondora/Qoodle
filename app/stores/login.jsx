var Immutable = require("immutable");
var Fluxxor   = require("fluxxor");

var constants = require("../lib/constants.js");

var LoginStore = Fluxxor.createStore({
    initialize: function () {
        this.currentUserId = null;
        this.loggingIn = true;
        this.loggedIn = false;
        this.bindActions(
            constants.LOGIN, this.onLogin,
            constants.LOGOUT, this.onLogout
        );
    },
    onLogin: function (payload) {
        // TODO Don't use Ceres directly
        this.currentUserId = Ceres.userId;
        this.loggingIn = false;
        this.loggedIn = true;
        this.emit("change");
    },
    onLogout: function (payload) {
        this.currentUserId = null;
        this.loggingIn = false;
        this.loggedIn = false;
        this.emit("change");
    },
    isLoggingIn: function () {
        return this.loggingIn;
    },
    isLoggedIn: function () {
        return this.loggedIn;
    },
    getCurrentUser: function () {
        // TODO review
        var Users = Ceres.getCollection("users");
        var currentUserRQ = Users.reactiveQuery({_id: this.currentUserId});
        return Immutable.fromJS(currentUserRQ.result[0]);
    }
});

module.exports = LoginStore;
