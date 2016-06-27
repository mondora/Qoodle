var React = require("react");

var Example = React.createClass({
    render: function () {
        return (
            <div style={{backgroundColor: "red"}}>
                {"this is a route"}
            </div>
        );
    }
});

module.exports = Example;
