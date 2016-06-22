var constants = require("../lib/constants.js");

var addRoleToGroup = function (group, role) {
    Ceres.call("addRoleToGroup", group, role);
};

var removeRoleFromGroup = function (group, role) {
    Ceres.call("removeRoleFromGroup", group, role);
};

var addGroupToUser = function (group, userId) {
    Ceres.call("addGroupToUser", group, userId);
};

var removeGroupFromUser = function (group, userId) {
    Ceres.call("removeGroupFromUser", group, userId);
};

var removeGroup = function (group) {
    Ceres.call("removeGroup", group);
};

var insertNewGroup = function () {
    Ceres.getCollection("groups").insert({
        name: ""
    });
};

var updateGroup = function (groupId, groupField, groupValue) {
    var modifier = {};
    modifier[groupField] = groupValue;
    Ceres.getCollection("groups").update(groupId, modifier);
};


module.exports = {
    addGroupToUser: addGroupToUser,
    addRoleToGroup: addRoleToGroup,
    insertNewGroup: insertNewGroup,
    removeGroup: removeGroup,
    removeGroupFromUser: removeGroupFromUser,
    removeRoleFromGroup: removeRoleFromGroup,
    updateGroup: updateGroup
};