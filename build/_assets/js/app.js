webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(37);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRedux = __webpack_require__(167);
	
	var _routes = __webpack_require__(199);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _reduxStore = __webpack_require__(268);
	
	var _reduxStore2 = _interopRequireDefault(_reduxStore);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var App = _react2.default.createElement(
	    _reactRedux.Provider,
	    { store: _reduxStore2.default },
	    _routes2.default
	);
	
	_reactDom2.default.render(App, document.getElementById("root"));

/***/ },

/***/ 199:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(200);
	
	var _history = __webpack_require__(261);
	
	var _history2 = _interopRequireDefault(_history);
	
	var _rootPage = __webpack_require__(262);
	
	var _rootPage2 = _interopRequireDefault(_rootPage);
	
	var _newQoodle = __webpack_require__(265);
	
	var _newQoodle2 = _interopRequireDefault(_newQoodle);
	
	var _listPage = __webpack_require__(267);
	
	var _listPage2 = _interopRequireDefault(_listPage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createElement(
	    _reactRouter.Router,
	    { history: _history2.default },
	    _react2.default.createElement(
	        _reactRouter.Route,
	        { component: _rootPage2.default, path: "/", name: "root" },
	        _react2.default.createElement(_reactRouter.IndexRoute, { component: _listPage2.default, name: "list" }),
	        _react2.default.createElement(_reactRouter.Route, { component: _newQoodle2.default, name: "new", path: "/create" })
	    )
	);

/***/ },

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createHashHistory = __webpack_require__(209);
	
	var _createHashHistory2 = _interopRequireDefault(_createHashHistory);
	
	var _reactRouter = __webpack_require__(200);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reactRouter.useRouterHistory)(_createHashHistory2.default)({
	    queryKey: false
	});

/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(167);
	
	var _masterPage = __webpack_require__(263);
	
	var _masterPage2 = _interopRequireDefault(_masterPage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RootPage = function (_Component) {
	    _inherits(RootPage, _Component);
	
	    function RootPage() {
	        _classCallCheck(this, RootPage);
	
	        return _possibleConstructorReturn(this, (RootPage.__proto__ || Object.getPrototypeOf(RootPage)).apply(this, arguments));
	    }
	
	    _createClass(RootPage, [{
	        key: "renderNotAuthPage",
	        value: function renderNotAuthPage() {
	            return _react2.default.createElement(
	                "div",
	                null,
	                "Not authorized"
	            );
	        }
	    }, {
	        key: "renderAppPage",
	        value: function renderAppPage() {
	            var children = this.props.children;
	
	
	            return _react2.default.createElement(
	                _masterPage2.default,
	                null,
	                children
	            );
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return this.renderAppPage();
	        }
	    }]);
	
	    return RootPage;
	}(_react.Component);
	
	RootPage.propTypes = {
	    children: _react.PropTypes.node
	};
	exports.default = RootPage;

/***/ },

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(167);
	
	var _redux = __webpack_require__(178);
	
	var _header = __webpack_require__(264);
	
	var _header2 = _interopRequireDefault(_header);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/* LIST COMPONENTS */
	
	var MasterPage = function (_Component) {
	    _inherits(MasterPage, _Component);
	
	    function MasterPage() {
	        _classCallCheck(this, MasterPage);
	
	        return _possibleConstructorReturn(this, (MasterPage.__proto__ || Object.getPrototypeOf(MasterPage)).apply(this, arguments));
	    }
	
	    _createClass(MasterPage, [{
	        key: "renderMainPage",
	        value: function renderMainPage() {
	            var children = this.props.children;
	
	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(
	                    "div",
	                    null,
	                    _react2.default.createElement(_header2.default, null),
	                    children
	                )
	            );
	        }
	    }, {
	        key: "renderLoadigInfo",
	        value: function renderLoadigInfo() {
	
	            return _react2.default.createElement("div", null);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return this.renderMainPage();
	        }
	    }]);
	
	    return MasterPage;
	}(_react.Component);
	
	MasterPage.propTypes = {
	    children: _react.PropTypes.node
	};
	exports.default = (0, _reactRedux.connect)(null, null)(MasterPage);

/***/ },

/***/ 264:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(167);
	
	var _redux = __webpack_require__(178);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Header = function (_Component) {
	    _inherits(Header, _Component);
	
	    function Header() {
	        _classCallCheck(this, Header);
	
	        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));
	
	        _this.state = {
	            isOpenMenu: false
	        };
	        return _this;
	    }
	
	    _createClass(Header, [{
	        key: "toggleMenu",
	        value: function toggleMenu() {
	            this.setState({
	                isOpenMenu: !this.state.isOpenMenu
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                { className: "header" },
	                _react2.default.createElement(
	                    "div",
	                    { className: "floatLeft" },
	                    _react2.default.createElement("i", { className: "hamburger fa fa-bars", onClick: this.toggleMenu.bind(this), "aria-hidden": "true" }),
	                    _react2.default.createElement(
	                        "div",
	                        { className: this.state.isOpenMenu ? "containerMenu" : "containerMenu hidden" },
	                        _react2.default.createElement(
	                            "div",
	                            { style: { padding: 10, borderBottom: '1px solid #ccE3E1' }, onclick: "location.href='create.html'" },
	                            "ADD NEW QOODLE"
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            { style: { padding: 10, borderBottom: '1px solid #ccE3E1' } },
	                            "LIST QOODLE"
	                        )
	                    ),
	                    _react2.default.createElement("img", { src: "_assets/img/logo.png", style: { verticalAlign: 'middle', width: 100 } })
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { className: "floatRight" },
	                    _react2.default.createElement(
	                        "div",
	                        { className: "btn littleOne" },
	                        _react2.default.createElement("span", { className: "ti-power-off" })
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Header;
	}(_react.Component);
	
	exports.default = (0, _reactRedux.connect)(null, null)(Header);

/***/ },

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(37);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRedux = __webpack_require__(167);
	
	var _redux = __webpack_require__(178);
	
	var _createTable = __webpack_require__(266);
	
	var _createTable2 = _interopRequireDefault(_createTable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/////////////List Actions
	
	
	var RichiestePage = function (_Component) {
	    _inherits(RichiestePage, _Component);
	
	    function RichiestePage() {
	        _classCallCheck(this, RichiestePage);
	
	        return _possibleConstructorReturn(this, (RichiestePage.__proto__ || Object.getPrototypeOf(RichiestePage)).apply(this, arguments));
	    }
	
	    _createClass(RichiestePage, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                { style: { margin: "20px" } },
	                _react2.default.createElement(
	                    "div",
	                    { className: "blockChoice" },
	                    _react2.default.createElement(
	                        "div",
	                        { className: "cardContainer" },
	                        _react2.default.createElement("input", { type: "text", placeholder: "Title", className: "inputChoice" })
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "labelChoice divTooltip", "data-title": "campo obbligatorio!" },
	                        _react2.default.createElement("i", { className: "ti-alert", "aria-hidden": "true",
	                            style: { fontSize: 10, marginLeft: 2, marginRight: 16, color: 'rgb(79, 116, 142)' } }),
	                        _react2.default.createElement(
	                            "div",
	                            null,
	                            "Title Qoodle"
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { className: "blockChoice" },
	                    _react2.default.createElement(
	                        "div",
	                        { className: "cardContainer" },
	                        _react2.default.createElement("textarea", { placeholder: "Description", className: "inputChoice" })
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "labelChoice divTooltip", "data-title": "campo obbligatorio!" },
	                        _react2.default.createElement("i", { className: "ti-alert", "aria-hidden": "true",
	                            style: { fontSize: 10, marginLeft: 2, marginRight: 16, color: 'rgb(79, 116, 142)' } }),
	                        _react2.default.createElement(
	                            "div",
	                            null,
	                            "Description"
	                        )
	                    )
	                ),
	                _react2.default.createElement(_createTable2.default, null)
	            );
	        }
	    }]);
	
	    return RichiestePage;
	}(_react.Component);
	
	exports.default = RichiestePage;

/***/ },

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(167);
	
	var _redux = __webpack_require__(178);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CreateTable = function (_Component) {
	    _inherits(CreateTable, _Component);
	
	    function CreateTable() {
	        _classCallCheck(this, CreateTable);
	
	        var _this = _possibleConstructorReturn(this, (CreateTable.__proto__ || Object.getPrototypeOf(CreateTable)).call(this));
	
	        _this.state = {
	            isOpenMenu: false,
	            struct: [{
	                name: "Name",
	                type: "text"
	            }, {
	                name: "Number of person",
	                type: "number"
	            }, {
	                name: "Number of vegans",
	                type: "number"
	            }],
	            elementsTable: [{
	                "Name": "Francesco",
	                "Number of person": 4,
	                "Number of vegans": 4
	            }, {
	                "Name": "Chiara",
	                "Number of person": 2,
	                "Number of vegans": 0
	            }, {
	                "Name": "Davide",
	                "Number of person": 1,
	                "Number of vegans": 0
	            }]
	        };
	        return _this;
	    }
	
	    _createClass(CreateTable, [{
	        key: "addStruct",
	        value: function addStruct() {
	            var stateStruct = this.state.struct;
	            stateStruct.push({ name: "new", type: "number" });
	
	            this.setState({
	                struct: stateStruct
	            });
	        }
	    }, {
	        key: "renderHeader",
	        value: function renderHeader() {
	            var structure = this.state.struct;
	            var strucArr = [];
	            Object.keys(structure).forEach(function (key, index) {
	                strucArr.push(_react2.default.createElement(
	                    "th",
	                    { scope: "col" },
	                    structure[key].name
	                ));
	            });
	            return strucArr;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "table",
	                { className: "responsive-table" },
	                _react2.default.createElement("caption", null),
	                _react2.default.createElement(
	                    "thead",
	                    null,
	                    _react2.default.createElement(
	                        "tr",
	                        null,
	                        this.renderHeader(),
	                        _react2.default.createElement(
	                            "th",
	                            { onClick: this.addStruct.bind(this), style: { cursor: "pointer", backgroundColor: "#FFF", color: "#f5b95f", border: "1px solid #f5b95f" } },
	                            _react2.default.createElement(
	                                "div",
	                                null,
	                                "+"
	                            )
	                        )
	                    )
	                ),
	                _react2.default.createElement("tfoot", null),
	                _react2.default.createElement("tbody", null)
	            );
	        }
	    }]);
	
	    return CreateTable;
	}(_react.Component);
	
	exports.default = (0, _reactRedux.connect)(null, null)(CreateTable);

/***/ },

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(37);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRedux = __webpack_require__(167);
	
	var _redux = __webpack_require__(178);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/////////////List Actions
	
	
	var ListPage = function (_Component) {
	    _inherits(ListPage, _Component);
	
	    function ListPage() {
	        _classCallCheck(this, ListPage);
	
	        return _possibleConstructorReturn(this, (ListPage.__proto__ || Object.getPrototypeOf(ListPage)).apply(this, arguments));
	    }
	
	    _createClass(ListPage, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                null,
	                "LIST"
	            );
	        }
	    }]);
	
	    return ListPage;
	}(_react.Component);
	
	exports.default = ListPage;

/***/ },

/***/ 268:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _redux = __webpack_require__(178);
	
	var _reduxLogger = __webpack_require__(269);
	
	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
	
	var _reduxStorage = __webpack_require__(270);
	
	var _reduxStorage2 = _interopRequireDefault(_reduxStorage);
	
	var _reduxStorageEngineLocalstorage = __webpack_require__(293);
	
	var _reduxStorageEngineLocalstorage2 = _interopRequireDefault(_reduxStorageEngineLocalstorage);
	
	var _reduxThunk = __webpack_require__(294);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _reduxStorageDecoratorFilter = __webpack_require__(295);
	
	var _reduxStorageDecoratorFilter2 = _interopRequireDefault(_reduxStorageDecoratorFilter);
	
	var _reducers = __webpack_require__(300);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var reducer = _reduxStorage2.default.reducer(_reducers2.default);
	
	var storageEngine = (0, _reduxStorageDecoratorFilter2.default)((0, _reduxStorageEngineLocalstorage2.default)("b2b_auth_state"), [["auth", "loginAuth"]]);
	
	var storageMiddleware = _reduxStorage2.default.createMiddleware(storageEngine, [], ["LOGIN_START", "LOGIN_SUCCESS", "LOGIN_ERROR", "LOGOUT"]);
	var loader = _reduxStorage2.default.createLoader(storageEngine);
	
	var store = (0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reduxLogger2.default)({ collapsed: true }), storageMiddleware)(_redux.createStore)(reducer);
	
	loader(store);
	
	exports.default = store;

/***/ },

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(178);
	
	//import {documents} from "reducers/documents";
	
	var rootReducer = (0, _redux.combineReducers)({});
	
	exports.default = rootReducer;

/***/ }

});
//# sourceMappingURL=app.js.map