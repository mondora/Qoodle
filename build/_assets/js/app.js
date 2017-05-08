webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _reactDom = __webpack_require__(1);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _routes = __webpack_require__(185);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var App = _routes2.default;
	
	_reactDom2.default.render(App, document.getElementById("root"));

/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(186);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(187);
	
	var _history = __webpack_require__(250);
	
	var _history2 = _interopRequireDefault(_history);
	
	var _rootPage = __webpack_require__(251);
	
	var _rootPage2 = _interopRequireDefault(_rootPage);
	
	var _newQoodle = __webpack_require__(254);
	
	var _newQoodle2 = _interopRequireDefault(_newQoodle);
	
	var _listPage = __webpack_require__(512);
	
	var _listPage2 = _interopRequireDefault(_listPage);
	
	var _qoodleView = __webpack_require__(532);
	
	var _qoodleView2 = _interopRequireDefault(_qoodleView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createElement(
	    _reactRouter.Router,
	    { history: _history2.default },
	    _react2.default.createElement(
	        _reactRouter.Route,
	        { component: _rootPage2.default, path: "/", name: "root" },
	        _react2.default.createElement(_reactRouter.Route, { component: _newQoodle2.default, name: "new", path: "/create" })
	    )
	);

/***/ },

/***/ 250:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createHashHistory = __webpack_require__(197);
	
	var _createHashHistory2 = _interopRequireDefault(_createHashHistory);
	
	var _reactRouter = __webpack_require__(187);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reactRouter.useRouterHistory)(_createHashHistory2.default)({
	    queryKey: false
	});

/***/ },

/***/ 251:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(186);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _masterPage = __webpack_require__(252);
	
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

/***/ 252:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(186);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _header = __webpack_require__(253);
	
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
	exports.default = MasterPage;

/***/ },

/***/ 253:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(186);
	
	var _react2 = _interopRequireDefault(_react);
	
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
	                    _react2.default.createElement("i", { className: "hamburger fa fa-bars", "aria-hidden": "true" }),
	                    _react2.default.createElement(
	                        "div",
	                        { className: this.state.isOpenMenu ? "containerMenu" : "containerMenu hidden" },
	                        _react2.default.createElement(
	                            "div",
	                            { style: { padding: 10, borderBottom: '1px solid #ccE3E1' } },
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
	
	exports.default = Header;

/***/ },

/***/ 254:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(186);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ColumnCreationModal = __webpack_require__(255);
	
	var _ColumnCreationModal2 = _interopRequireDefault(_ColumnCreationModal);
	
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
	                { className: "row" },
	                _react2.default.createElement(_ColumnCreationModal2.default, { onAdd: function onAdd() {
	                        return console.log('ciao');
	                    } })
	            );
	        }
	    }]);
	
	    return RichiestePage;
	}(_react.Component);
	
	exports.default = RichiestePage;

/***/ },

/***/ 255:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(186);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(256);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactBootstrap = __webpack_require__(260);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ColumnCreationModal = function (_Component) {
	    _inherits(ColumnCreationModal, _Component);
	
	    function ColumnCreationModal() {
	        _classCallCheck(this, ColumnCreationModal);
	
	        var _this = _possibleConstructorReturn(this, (ColumnCreationModal.__proto__ || Object.getPrototypeOf(ColumnCreationModal)).call(this));
	
	        _this.state = {
	            name: '',
	            min: 0
	        };
	        return _this;
	    }
	
	    _createClass(ColumnCreationModal, [{
	        key: 'render',
	        value: function render() {
	            var onAdd = this.props.onAdd;
	
	            return _react2.default.createElement(
	                _reactBootstrap.Modal.Dialog,
	                null,
	                _react2.default.createElement(
	                    _reactBootstrap.Modal.Header,
	                    null,
	                    _react2.default.createElement(
	                        _reactBootstrap.Modal.Title,
	                        null,
	                        "Nuova colonna"
	                    )
	                ),
	                _react2.default.createElement(
	                    _reactBootstrap.Modal.Body,
	                    null,
	                    _react2.default.createElement(
	                        'form',
	                        null,
	                        _react2.default.createElement(
	                            _reactBootstrap.FormGroup,
	                            null,
	                            _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text', placeholder: 'Nome' })
	                        ),
	                        _react2.default.createElement(
	                            _reactBootstrap.FormGroup,
	                            null,
	                            _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text', placeholder: 'Min' })
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    _reactBootstrap.Modal.Footer,
	                    null,
	                    _react2.default.createElement(
	                        _reactBootstrap.Button,
	                        { onClick: onAdd },
	                        "Aggiungi"
	                    )
	                )
	            );
	        }
	    }]);
	
	    return ColumnCreationModal;
	}(_react.Component);
	
	ColumnCreationModal.propTypes = {
	    onAdd: _propTypes2.default.func.isRequired
	};
	exports.default = ColumnCreationModal;

/***/ },

/***/ 512:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(186);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(1);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _redux = __webpack_require__(513);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/////////////List Actions
	
	
	var ListPage = function (_Component) {
	    _inherits(ListPage, _Component);
	
	    function ListPage() {
	        _classCallCheck(this, ListPage);
	
	        var _this = _possibleConstructorReturn(this, (ListPage.__proto__ || Object.getPrototypeOf(ListPage)).call(this));
	
	        _this.state = {
	            struct: [{
	                titolo: "Christams Dinner",
	                descrizione: "pranzo di natale",
	                total_response: 5,
	                closing_date: new Date("October 13, 2014 11:13:00").toDateString()
	            }, {
	                titolo: "Gas",
	                descrizione: "acquisto di frutta",
	                total_response: 3,
	                closing_date: new Date("May 13, 2014 11:13:00").toDateString()
	            }]
	        };
	        return _this;
	    }
	
	    _createClass(ListPage, [{
	        key: "renderHeader",
	        value: function renderHeader() {
	            return Object.keys(this.state.struct[0]).map(function (e) {
	                return _react2.default.createElement(
	                    "th",
	                    { scope: "col" },
	                    e
	                );
	            });
	        }
	    }, {
	        key: "renderBody",
	        value: function renderBody() {
	            var righe = [];
	            var riga = [];
	            var obj;
	
	            for (var i = 0; i < this.state.struct.length; i++) {
	                obj = this.state.struct[i];
	                riga = Object.keys(obj).map(function (e) {
	                    return _react2.default.createElement(
	                        "td",
	                        null,
	                        obj[e]
	                    );
	                });
	                righe.push(_react2.default.createElement(
	                    "tr",
	                    null,
	                    riga
	                ));
	            }
	
	            return righe;
	        }
	    }, {
	        key: "renderFooterTable",
	        value: function renderFooterTable() {
	            var span = Object.keys(this.state.struct[0]).length; //numero colonne da unire
	            return _react2.default.createElement(
	                "td",
	                { scope: "col", colSpan: span },
	                "I qoodle presenti in memoria sono:  ",
	                this.state.struct.length
	            );
	        }
	    }, {
	        key: "renderTable",
	        value: function renderTable() {
	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(
	                    "table",
	                    { className: "responsive-table" },
	                    _react2.default.createElement(
	                        "caption",
	                        null,
	                        "List of open Qoodles"
	                    ),
	                    _react2.default.createElement(
	                        "thead",
	                        null,
	                        _react2.default.createElement(
	                            "tr",
	                            null,
	                            this.renderHeader()
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "tfoot",
	                        null,
	                        this.renderFooterTable()
	                    ),
	                    _react2.default.createElement(
	                        "tbody",
	                        null,
	                        this.renderBody()
	                    )
	                )
	            );
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return this.renderTable();
	        }
	    }]);
	
	    return ListPage;
	}(_react.Component);
	
	exports.default = ListPage;

/***/ },

/***/ 532:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(186);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(1);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _riassunto = __webpack_require__(533);
	
	var _riassunto2 = _interopRequireDefault(_riassunto);
	
	var _qvHeaderTable = __webpack_require__(534);
	
	var _qvHeaderTable2 = _interopRequireDefault(_qvHeaderTable);
	
	var _qvFooterTable = __webpack_require__(535);
	
	var _qvFooterTable2 = _interopRequireDefault(_qvFooterTable);
	
	var _qv_input_table = __webpack_require__(536);
	
	var _qv_input_table2 = _interopRequireDefault(_qv_input_table);
	
	var _qvRowTable = __webpack_require__(537);
	
	var _qvRowTable2 = _interopRequireDefault(_qvRowTable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var QoodleView = function (_Component) {
	    _inherits(QoodleView, _Component);
	
	    function QoodleView() {
	        _classCallCheck(this, QoodleView);
	
	        var _this = _possibleConstructorReturn(this, (QoodleView.__proto__ || Object.getPrototypeOf(QoodleView)).call(this));
	
	        _this.state = {
	            isOpenMenu: false,
	            currentValue: {},
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
	
	    _createClass(QoodleView, [{
	        key: "handleChange",
	        value: function handleChange(fieldName, event) {
	            // var currentValue = this.state.currentValue;// se ho già qualcosa
	            // currentValue[fieldName] = event.target.value;
	            var result = {};
	            for (var attrname in this.state.currentValue) {
	                result[attrname] = this.state.currentValue[attrname];
	            }
	            console.log(event);
	            result[fieldName] = event.target.value;
	
	            this.setState({ currentValue: result });
	            //console.log(fieldName);
	            //console.log(event.target.value);
	        }
	    }, {
	        key: "handleKeyPress",
	        value: function handleKeyPress(event) {
	            //console.log(event.charCode);
	            //console.log(Object.keys(this.state.currentValue).length);
	            //console.log(this.state.currentValue + "   " + this.state.struct.length)
	            //controllo che almeno 3 campi siano inizializzati
	            if (event.charCode === 13 && Object.keys(this.state.currentValue).length === this.state.struct.length) {
	                this.setState({ elementsTable: this.state.elementsTable.concat([this.state.currentValue]) });
	            }
	        }
	    }, {
	        key: "somma",
	        value: function somma(itemKey, obj) {
	            var sum = 0;
	            //obj sono i dati dei partecipanti.
	            //prop conterrà name, numberofperson etc
	            //per ogni proprietà delloggetto (se sto considerando quella proprietà) &&  se è un numero lo sommo
	            for (var prop in obj) {
	                if (obj.hasOwnProperty(prop) && itemKey === prop && typeof parseInt(obj[prop]) == "number") {
	                    sum += parseInt(obj[prop]);
	                } else if (Object.prototype.toString.call(obj[prop]) === '[object Object]') {
	                    sum += this.somma(itemKey, obj[prop]);
	                }
	            }
	            return sum;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            //per ogni elemento mi creo una riga come deciso da QVRowTable
	            var dataRows = [];
	            var elementi = this.state.elementsTable;
	
	            for (var i = 0; i < elementi.length; i++) {
	                dataRows.push(_react2.default.createElement(_qvRowTable2.default, { ele: elementi[i] }));
	            }
	            console.log(dataRows);
	
	            return _react2.default.createElement(
	                "div",
	                { className: "container" },
	                _react2.default.createElement(
	                    "div",
	                    { id: "rowStats" },
	                    _react2.default.createElement(_riassunto2.default, { struct: this.state.struct, elementsTable: this.state.elementsTable })
	                ),
	                _react2.default.createElement(
	                    "table",
	                    { className: "responsive-table" },
	                    _react2.default.createElement(
	                        "caption",
	                        null,
	                        " A Christmas Dinner"
	                    ),
	                    _react2.default.createElement(
	                        "thead",
	                        null,
	                        _react2.default.createElement(_qvHeaderTable2.default, { struct: this.state.struct })
	                    ),
	                    _react2.default.createElement(
	                        "tfoot",
	                        null,
	                        _react2.default.createElement(_qvFooterTable2.default, { struct: this.state.struct, elementsTable: this.state.elementsTable })
	                    ),
	                    _react2.default.createElement(
	                        "tbody",
	                        null,
	                        _react2.default.createElement(_qv_input_table2.default, { onChangeTip: this.handleChange.bind(this), onKeyTip: this.handleKeyPress.bind(this), struct: this.state.struct }),
	                        dataRows
	                    )
	                )
	            );
	        }
	    }]);
	
	    return QoodleView;
	}(_react.Component);
	
	exports.default = QoodleView;

/***/ },

/***/ 533:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(186);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(1);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Riassunto = function (_Component) {
	    _inherits(Riassunto, _Component);
	
	    function Riassunto(props) {
	        _classCallCheck(this, Riassunto);
	
	        var _this = _possibleConstructorReturn(this, (Riassunto.__proto__ || Object.getPrototypeOf(Riassunto)).call(this, props));
	
	        _this.state = { str: _this.props.struct,
	            elements: _this.props.elementsTable
	        };
	
	        return _this;
	    }
	
	    _createClass(Riassunto, [{
	        key: "summa",
	        value: function summa(itemKey, obj) {
	            var sum = 0;
	            //obj sono i dati dei partecipanti.
	            //prop conterrà name, numberofperson etc
	            //per ogni proprietà delloggetto (se sto considerando quella proprietà) &&  se è un numero lo sommo
	            for (var prop in obj) {
	                if (obj.hasOwnProperty(prop) && itemKey === prop && typeof parseInt(obj[prop]) == "number") {
	                    sum += parseInt(obj[prop]);
	                } else if (Object.prototype.toString.call(obj[prop]) === '[object Object]') {
	                    sum += this.summa(itemKey, obj[prop]);
	                }
	            }
	            return sum;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var sintesi = [];
	            var somma;
	            var lbl;
	
	            for (var i = 0; i < this.state.str.length; i++) {
	                if (i != 0) {
	                    somma = this.state.str[i].type == "number" ? this.summa(this.state.str[i].name, this.state.elements) : "";
	                    lbl = this.state.str[i].name;
	                } else {
	                    somma = this.state.elements.length; //nel primo caso devo contare quante occorrenze ho.
	                    lbl = "Total Response";
	                }
	                sintesi.push(_react2.default.createElement(
	                    "div",
	                    { className: "cellStats" },
	                    somma,
	                    _react2.default.createElement(
	                        "label",
	                        null,
	                        lbl
	                    )
	                ));
	            }
	            return _react2.default.createElement(
	                "div",
	                null,
	                sintesi
	            );
	        }
	    }]);
	
	    return Riassunto;
	}(_react.Component);
	
	exports.default = Riassunto;

/***/ },

/***/ 534:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(186);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(1);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var QVHeaderTable = function (_Component) {
	    _inherits(QVHeaderTable, _Component);
	
	    function QVHeaderTable(props) {
	        _classCallCheck(this, QVHeaderTable);
	
	        var _this = _possibleConstructorReturn(this, (QVHeaderTable.__proto__ || Object.getPrototypeOf(QVHeaderTable)).call(this, props));
	
	        _this.state = { str: _this.props.struct };
	
	        return _this;
	    }
	
	    _createClass(QVHeaderTable, [{
	        key: "render",
	        value: function render() {
	            var headerItem = [];
	            for (var i = 0; i < this.state.str.length; i++) {
	                headerItem.push(_react2.default.createElement(
	                    "th",
	                    { scope: "col" },
	                    this.state.str[i].name
	                ));
	            }
	
	            return _react2.default.createElement(
	                "tr",
	                null,
	                headerItem
	            );
	        }
	    }]);
	
	    return QVHeaderTable;
	}(_react.Component);
	
	exports.default = QVHeaderTable;

/***/ },

/***/ 535:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(186);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(1);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//NON UTILIZZATO PERCHÈ NON AGGIORNA LO STATO... STRANO
	
	var QVFooterTable = function (_Component) {
	    _inherits(QVFooterTable, _Component);
	
	    function QVFooterTable(props) {
	        _classCallCheck(this, QVFooterTable);
	
	        return _possibleConstructorReturn(this, (QVFooterTable.__proto__ || Object.getPrototypeOf(QVFooterTable)).call(this, props));
	    }
	
	    _createClass(QVFooterTable, [{
	        key: "summa",
	        value: function summa(itemKey, obj) {
	            var sum = 0;
	            //obj sono i dati dei partecipanti.
	            //prop conterrà name, numberofperson etc
	            //per ogni proprietà delloggetto (se sto considerando quella proprietà) &&  se è un numero lo sommo
	            for (var prop in obj) {
	                if (obj.hasOwnProperty(prop) && itemKey === prop && typeof parseInt(obj[prop]) == "number") {
	                    sum += parseInt(obj[prop]);
	                } else if (Object.prototype.toString.call(obj[prop]) === '[object Object]') {
	                    sum += this.summa(itemKey, obj[prop]);
	                }
	            }
	            return sum;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var footerItem = [];
	
	            for (var i = 0; i < this.props.struct.length; i++) {
	                var somma;
	                //per ogni elemento dell'array struct controllo il tipo(se number)
	                //passo a somma il nome del campo, e l'array di elementi pieni (oggetti)
	                somma = this.props.struct[i].type === "number" ? this.summa(this.props.struct[i].name, this.props.elementsTable) : "";
	
	                //cambia l'i, cioè, a che "descrizione campo" siamo, ma ne prendo sempre il nome.
	                //quindi poi ciclo sugli elements, ma ogni volta con lo stesso nome
	
	                footerItem.push(_react2.default.createElement(
	                    "td",
	                    { scope: "col" },
	                    somma
	                ));
	            }
	            console.log(this.props.struct.length);
	
	            return _react2.default.createElement(
	                "tr",
	                null,
	                footerItem
	            );
	        }
	    }]);
	
	    return QVFooterTable;
	}(_react.Component);
	
	exports.default = QVFooterTable;

/***/ },

/***/ 536:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(186);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(1);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var QVInputTable = function (_Component) {
	    _inherits(QVInputTable, _Component);
	
	    function QVInputTable(props) {
	        _classCallCheck(this, QVInputTable);
	
	        return _possibleConstructorReturn(this, (QVInputTable.__proto__ || Object.getPrototypeOf(QVInputTable)).call(this, props));
	    }
	
	    //richiamo le mesime funzioni
	
	
	    _createClass(QVInputTable, [{
	        key: "handleInputChange",
	        value: function handleInputChange(fieldName, e) {
	
	            this.props.onChangeTip(fieldName, e);
	        }
	    }, {
	        key: "handleInputKeyPress",
	        value: function handleInputKeyPress(e) {
	            this.props.onKeyTip(e);
	        }
	    }, {
	        key: "renderColumns",
	        value: function renderColumns() {
	            {}
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var struttura = this.props.struct; //mi prendo la struttura
	            var cellItem = [];
	
	            for (var i = 0; i < struttura.length; i++) {
	                cellItem.push(_react2.default.createElement(
	                    "td",
	                    null,
	                    " ",
	                    _react2.default.createElement("input", { onChange: this.handleInputChange.bind(this, struttura[i].name), onKeyPress: this.handleInputKeyPress.bind(this), type: struttura[i].type, placeholder: struttura[i].name, min: 0 })
	                ));
	            }
	
	            return _react2.default.createElement(
	                "tr",
	                null,
	                cellItem
	            );
	        }
	    }]);
	
	    return QVInputTable;
	}(_react.Component);
	
	exports.default = QVInputTable;

/***/ },

/***/ 537:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(186);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(1);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var QVRowTable = function (_Component) {
	  _inherits(QVRowTable, _Component);
	
	  function QVRowTable(props) {
	    _classCallCheck(this, QVRowTable);
	
	    //props avrò un solo parametro con l'elemento
	    return _possibleConstructorReturn(this, (QVRowTable.__proto__ || Object.getPrototypeOf(QVRowTable)).call(this, props));
	  }
	
	  _createClass(QVRowTable, [{
	    key: "render",
	    value: function render() {
	      var _this2 = this;
	
	      var riga = [];
	
	      //pusho un array contenente ognuno il valore di un campo dell'oggetto(tra td)
	      riga.push(Object.keys(this.props.ele).map(function (e) {
	        return _react2.default.createElement(
	          "td",
	          null,
	          _this2.props.ele[e]
	        );
	      }));
	      return _react2.default.createElement(
	        "tr",
	        null,
	        riga
	      );
	    }
	  }]);
	
	  return QVRowTable;
	}(_react.Component);
	
	exports.default = QVRowTable;

/***/ }

});
//# sourceMappingURL=app.js.map