var Immutable = require("immutable");
var R         = require("ramda");
var React     = require("react");
var Router    = require("react-router");
var Bootstrap = require("react-bootstrap");

var Components  = require("../../components");
var Lib         = require("../../lib");
var Mixins      = require("../../mixins");

var QuestionBuilder = React.createClass({  
    getInitialState: function () {
        return {
            classMenu: ""
        };
    },
    
    renderNewButton: function () {
        return this.canInsert() ? (
            <Bootstrap.Button onClick={this.createNewCompany}>
                {"New"}
            </Bootstrap.Button>
        ) : null;
    },
    render: function () {
        return (
            <Bootstrap.Grid className="av-question-builder">
                <br />
                <Bootstrap.Row>
                    <Bootstrap.Col md={3} xs={12}>
                        HELO
                    </Bootstrap.Col>
                    <Bootstrap.Col md={9} xs={12}>
                        <Bootstrap.Row>
                            <Bootstrap.Col xs={11}>
                                <Bootstrap.ButtonGroup>
                                    {this.renderTabs()}
                                </Bootstrap.ButtonGroup>
                            </Bootstrap.Col>
                            <Bootstrap.Col className="text-right" xs={1}>
                                {this.renderNewButton()}
                            </Bootstrap.Col>
                        </Bootstrap.Row>
                        <Bootstrap.Row>
                            <Bootstrap.Col xs={12}>
                                <hr />
                                <h5>
                                    <Bootstrap.Badge>
                                        5
                                    </Bootstrap.Badge>
                                    {" entities found"}
                                </h5>
                            </Bootstrap.Col>
                            HALO
                    </Bootstrap.Row>
                    </Bootstrap.Col>
                </Bootstrap.Row>
            </Bootstrap.Grid>
        );
    }
});

module.exports = QuestionBuilder;
