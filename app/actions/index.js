var R = require("ramda");

var actions = {};

actions = R.mixin(actions, require("./error.jsx"));
actions = R.mixin(actions, require("./login.jsx"));
actions = R.mixin(actions, require("./managing-groups.jsx"));

module.exports = actions;
