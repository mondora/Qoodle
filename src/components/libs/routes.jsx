var React = require("react");
var Router = require("react-router");


var Survey = require("views/survey");

module.exports = (
    <Router.Router history={Router.browserHistory}>
        <Router.Route component={Survey} name="survey" path="/survey/" />
    </Router.Router>
);
