var React = require("react");
var Router = require("react-router");


var Example = require("views/example");

module.exports = (
    <Router.Router history={Router.browserHistory}>
        <Router.Route component={Example} name="example" path="/" />
    </Router.Router>
);
