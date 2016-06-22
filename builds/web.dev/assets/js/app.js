webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var React  = __webpack_require__(1);
	var Router = __webpack_require__(163);

	// Routing
	var DefaultRoute    = Router.DefaultRoute;
	var Route           = Router.Route;
	var Views           = __webpack_require__(213);

	var routes = (
	    React.createElement(Route, {path: "/", handler: Views.QuestionBuilder}, 
	        React.createElement(Route, {handler: Views.QuestionBuilder, name: "another", path: "another/"}), 
	        React.createElement(DefaultRoute, {handler: Views.QuestionBuilder})
	    )
	);

	Router.run(routes, function (Handler) {
	    React.render(React.createElement(Handler, null), document.body);
	});

	window.React = React;


/***/ },

/***/ 213:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    QuestionBuilder: __webpack_require__(214),
	    Another: __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./another/another.jsx\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	};


/***/ },

/***/ 214:
/***/ function(module, exports, __webpack_require__) {

	var Immutable = __webpack_require__(215);
	var R         = __webpack_require__(216);
	var React     = __webpack_require__(165);
	var Router    = __webpack_require__(163);
	var Bootstrap = __webpack_require__(217);

	var Components  = __webpack_require__(277);
	var Lib         = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../lib\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	var Mixins      = __webpack_require__(280);

	var QuestionBuilder = React.createClass({displayName: "QuestionBuilder",  
	    getInitialState: function () {
	        return {
	            classMenu: ""
	        };
	    },
	    
	    renderNewButton: function () {
	        return this.canInsert() ? (
	            React.createElement(Bootstrap.Button, {onClick: this.createNewCompany}, 
	                "New"
	            )
	        ) : null;
	    },
	    render: function () {
	        return (
	            React.createElement(Bootstrap.Grid, {className: "av-question-builder"}, 
	                React.createElement("br", null), 
	                React.createElement(Bootstrap.Row, null, 
	                    React.createElement(Bootstrap.Col, {md: 3, xs: 12}, 
	                        "HELO"
	                    ), 
	                    React.createElement(Bootstrap.Col, {md: 9, xs: 12}, 
	                        React.createElement(Bootstrap.Row, null, 
	                            React.createElement(Bootstrap.Col, {xs: 11}, 
	                                React.createElement(Bootstrap.ButtonGroup, null, 
	                                    this.renderTabs()
	                                )
	                            ), 
	                            React.createElement(Bootstrap.Col, {className: "text-right", xs: 1}, 
	                                this.renderNewButton()
	                            )
	                        ), 
	                        React.createElement(Bootstrap.Row, null, 
	                            React.createElement(Bootstrap.Col, {xs: 12}, 
	                                React.createElement("hr", null), 
	                                React.createElement("h5", null, 
	                                    React.createElement(Bootstrap.Badge, null, 
	                                        "5"
	                                    ), 
	                                    " entities found"
	                                )
	                            ), 
	                            "HALO"
	                    )
	                    )
	                )
	            )
	        );
	    }
	});

	module.exports = QuestionBuilder;


/***/ },

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    FieldList:           __webpack_require__(278),
	    FieldSetting:        __webpack_require__(279)
	};


/***/ },

/***/ 278:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(165);

	var FieldList = React.createClass({displayName: "FieldList",
	    propTypes: {
	        segments: React.PropTypes.arrayOf(React.PropTypes.node)
	    },
	    renderSegment: function (segment, index) {
	        return (
	            React.createElement("label", {
	                key: index, 
	                className: "btn btn-default"
	            }, 
	                segment
	            )
	        );
	    },
	    render: function () {
	        return (
	            React.createElement("div", {className: "btn-group btn-breadcrumb"}, 
	                this.props.segments.map(this.renderSegment)
	            )
	        );
	    }
	});

	module.exports = FieldList;


/***/ },

/***/ 279:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(165);

	var FieldSetting = React.createClass({displayName: "FieldSetting",
	    propTypes: {
	        segments: React.PropTypes.arrayOf(React.PropTypes.node)
	    },
	    renderSegment: function (segment, index) {
	        return (
	            React.createElement("label", {
	                key: index, 
	                className: "btn btn-default"
	            }, 
	                segment
	            )
	        );
	    },
	    render: function () {
	        return (
	            React.createElement("div", {className: "btn-group btn-breadcrumb"}, 
	                this.props.segments.map(this.renderSegment)
	            )
	        );
	    }
	});

	module.exports = FieldSetting;


/***/ },

/***/ 280:
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    getPermissionsMixin: __webpack_require__(281),
	    CompaniesConverter:  __webpack_require__(284)
	};


/***/ },

/***/ 281:
/***/ function(module, exports, __webpack_require__) {

	var BPromise  = __webpack_require__(282);
	var R         = __webpack_require__(216);
	var React     = __webpack_require__(165);

	var Lib  = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../lib\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var getPermissionsMixin = function getPermissionsMixin (role) {
	    return {
	        render: function () {
	            var hasPermissions = Lib.Utils.isUserInRole(
	                this.props.currentUser,
	                this.props.groups,
	                role
	            );
	            return hasPermissions ? this.renderIfAllowed() : (
	                React.createElement("div", {
	                    style: {
	                        width: "100%",
	                        color: "#9e9e9e",
	                        textAlign: "center",
	                        paddingTop: 100
	                    }
	                }, 
	                    React.createElement("h3", null, "You are not allowed to view this page"), 
	                    React.createElement("h5", null, 
	                        "Required role: ", 
	                        React.createElement("b", null, role)
	                    )
	                )
	            );
	        }
	    };
	};

	module.exports = getPermissionsMixin;


/***/ },

/***/ 284:
/***/ function(module, exports, __webpack_require__) {

	var R         = __webpack_require__(216);
	var React     = __webpack_require__(165);
	var Immutable = __webpack_require__(215);

	var CompaniesConverter = {
	    propTypes: {
	        companies: React.PropTypes.instanceOf(Immutable.Iterable)
	    },
	    getCompanyIdFromName: function (companyName) {
	        var selectedCompany = this.getCompanyFromName(companyName);
	        if (selectedCompany) {
	            return selectedCompany.get("_id");
	        }
	    },
	    getCompanyFromName: function (companyName) {
	        return R.find(function (company) {
	            return company.getIn(["latest", "mainInfo", "name"]) === companyName;
	        })(this.props.companies.toArray());
	    },
	    getCompanyNameFromId: function (companyId) {
	        var selectedCompany = this.getCompanyFromId(companyId);
	        if (selectedCompany) {
	            return selectedCompany.getIn(["latest", "mainInfo", "name"]);
	        }
	    },
	    getCompanyFromId: function (companyId) {
	        return R.find(function (company) {
	            return company.get("_id") === companyId;
	        })(this.props.companies.toArray());
	    }
	};

	module.exports = CompaniesConverter;


/***/ }

});