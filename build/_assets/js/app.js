webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(37);
	
	var routes = __webpack_require__(167);
	
	ReactDOM.render(routes, document.getElementById("root"));

/***/ },

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var Router = __webpack_require__(168);
	
	var Example = __webpack_require__(230);
	var Survey = __webpack_require__(231);
	
	module.exports = React.createElement(
	    Router.Router,
	    { history: Router.browserHistory, __self: this
	    },
	    React.createElement(Router.Route, { component: Example, name: "example", path: "/", __self: this
	    }),
	    React.createElement(Router.Route, { component: Survey, name: "survey", path: "/survey/", __self: this
	    })
	);

/***/ },

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	
	var Example = React.createClass({
	    displayName: "Example",
	
	    render: function () {
	        return React.createElement(
	            "div",
	            { style: { backgroundColor: "red" }, __self: this
	            },
	            "this is a route"
	        );
	    }
	});
	
	module.exports = Example;

/***/ },

/***/ 231:
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	
	var Survey = React.createClass({
	    displayName: "Survey",
	
	    render: function () {
	        return React.createElement(
	            "div",
	            { style: { backgroundColor: "red" }, __self: this
	            },
	            "this is a route"
	        );
	    }
	});
	
	module.exports = Survey;

/***/ }

});
//# sourceMappingURL=app.js.map