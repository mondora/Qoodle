var BPromise = require("bluebird");
var chalk    = require("chalk");
var _        = require("lodash");

var build = require("./build.js");
var buildPromises = _.keys(build).map(function (key) {
    return build[key]("web.test");
});
BPromise.all(buildPromises).then(function () {
    console.log(chalk.green("SUCCESS"));
});
