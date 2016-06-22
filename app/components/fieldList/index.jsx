var React = require("react");

var FieldList = React.createClass({
    propTypes: {
        segments: React.PropTypes.arrayOf(React.PropTypes.node)
    },
    renderSegment: function (segment, index) {
        return (
            <label
                key={index}
                className="btn btn-default"
            >
                {segment}
            </label>
        );
    },
    render: function () {
        return (
            <div className="btn-group btn-breadcrumb">
                {this.props.segments.map(this.renderSegment)}
            </div>
        );
    }
});

module.exports = FieldList;
