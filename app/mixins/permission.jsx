var BPromise  = require("bluebird");
var R         = require("ramda");
var React     = require("react");

var Lib  = require("../lib");

var getPermissionsMixin = function getPermissionsMixin (role) {
    return {
        render: function () {
            var hasPermissions = Lib.Utils.isUserInRole(
                this.props.currentUser,
                this.props.groups,
                role
            );
            return hasPermissions ? this.renderIfAllowed() : (
                <div
                    style={{
                        width: "100%",
                        color: "#9e9e9e",
                        textAlign: "center",
                        paddingTop: 100
                    }}
                >
                    <h3>{"You are not allowed to view this page"}</h3>
                    <h5>
                        {"Required role: "}
                        <b>{role}</b>
                    </h5>
                </div>
            );
        }
    };
};

module.exports = getPermissionsMixin;
