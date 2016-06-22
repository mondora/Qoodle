var React  = require("react/addons");
var Router = require("react-router");

// Routing
var DefaultRoute    = Router.DefaultRoute;
var Route           = Router.Route;
var Views           = require("./views");

var routes = (
    <Route path="/" handler={Views.QuestionBuilder}>
        <Route handler={Views.QuestionBuilder} name="another" path="another/" />
        <DefaultRoute handler={Views.QuestionBuilder} />
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler />, document.body);
});

window.React = React;
