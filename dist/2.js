webpackJsonp([2],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hocs_fetchData__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_reducers_adoptions__ = __webpack_require__(45);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class, _class2, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var mapStateToProps = function mapStateToProps(_ref) {
  var adoptions = _ref.adoptions;

  return { adoptions: adoptions };
};

var fetchAdoptions = function fetchAdoptions(_ref2) {
  var dispatch = _ref2.dispatch;

  return dispatch(Object(__WEBPACK_IMPORTED_MODULE_5_reducers_adoptions__["b" /* queryAdoptions */])());
};

var FetchAdoptionsComponent = (_dec = Object(__WEBPACK_IMPORTED_MODULE_4__hocs_fetchData__["a" /* default */])(fetchAdoptions), _dec2 = Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["b" /* connect */])(mapStateToProps), _dec(_class = _dec2(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(FetchAdoptionsComponent, _Component);

  function FetchAdoptionsComponent() {
    var _ref3;

    var _temp, _this, _ret;

    _classCallCheck(this, FetchAdoptionsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = FetchAdoptionsComponent.__proto__ || Object.getPrototypeOf(FetchAdoptionsComponent)).call.apply(_ref3, [this].concat(args))), _this), _this.renderImages = function (adoptions) {
      return adoptions.map(function (e) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { key: e.AnimalId, className: 'col-sm' },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: 'http://asms.coa.gov.tw/Amlapp/Upload/pic/' + e.pic, alt: e.AnimalId })
        );
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FetchAdoptionsComponent, [{
    key: 'render',
    value: function render() {
      var adoptions = this.props.adoptions;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: 'row' },
        this.renderImages(adoptions)
      );
    }
  }]);

  return FetchAdoptionsComponent;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]), _class2.propTypes = {
  adoptions: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array
}, _temp2)) || _class) || _class);


/* harmony default export */ __webpack_exports__["default"] = (FetchAdoptionsComponent);

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var index = typeof fetch=='function' ? fetch.bind() : function(url, options) {
	options = options || {};
	return new Promise( function (resolve, reject) {
		var request = new XMLHttpRequest();

		request.open(options.method || 'get', url, true);

		for (var i in options.headers) {
			request.setRequestHeader(i, options.headers[i]);
		}

		request.withCredentials = options.credentials=='include';

		request.onload = function () {
			resolve(response());
		};

		request.onerror = reject;

		request.send(options.body || null);

		function response() {
			var keys = [],
				all = [],
				headers = {},
				header;

			request.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (m, key, value) {
				keys.push(key = key.toLowerCase());
				all.push([key, value]);
				header = headers[key];
				headers[key] = header ? (header + "," + value) : value;
			});

			return {
				ok: (request.status/100|0) == 2,		// 200-299
				status: request.status,
				statusText: request.statusText,
				url: request.responseURL,
				clone: response,
				text: function () { return Promise.resolve(request.responseText); },
				json: function () { return Promise.resolve(request.responseText).then(JSON.parse); },
				blob: function () { return Promise.resolve(new Blob([request.response])); },
				headers: {
					keys: function () { return keys; },
					entries: function () { return all; },
					get: function (n) { return headers[n.toLowerCase()]; },
					has: function (n) { return n.toLowerCase() in headers; }
				}
			};
		}
	});
};

/* harmony default export */ __webpack_exports__["default"] = (index);
//# sourceMappingURL=unfetch.es.js.map


/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

module.exports = window.fetch || (window.fetch = __webpack_require__(116).default || __webpack_require__(116));


/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reducers_dataFetch__ = __webpack_require__(20);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*global __SERVER__*/







var mapStateToProps = function mapStateToProps(state) {
  var isDataFetchEnabled = state.dataFetch.isDataFetchEnabled;
  return { isDataFetchEnabled: isDataFetchEnabled };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch,
    push: Object(__WEBPACK_IMPORTED_MODULE_1_redux__["b" /* bindActionCreators */])(__WEBPACK_IMPORTED_MODULE_4_reducers_dataFetch__["c" /* push */], dispatch)
  };
};

var fetchData = function fetchData(fetch) {
  return function (WrappedComponent) {
    var _class, _temp;

    var DataLoader = (_temp = _class = function (_Component) {
      _inherits(DataLoader, _Component);

      function DataLoader(props) {
        _classCallCheck(this, DataLoader);

        var _this = _possibleConstructorReturn(this, (DataLoader.__proto__ || Object.getPrototypeOf(DataLoader)).call(this, props));

        var dispatch = props.dispatch,
            isDataFetchEnabled = props.isDataFetchEnabled,
            push = props.push;


        if (false) {
          push(fetch({ dispatch: dispatch }));
        } else if (isDataFetchEnabled) {
          fetch({ dispatch: dispatch });
        }
        return _this;
      }

      _createClass(DataLoader, [{
        key: 'render',
        value: function render() {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(WrappedComponent, this.props);
        }
      }]);

      return DataLoader;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]), _class.propTypes = {
      isDataFetchEnabled: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool.isRequired,
      dispatch: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,
      push: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired
    }, _temp);

    return Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(DataLoader);
  };
};

/* harmony default export */ __webpack_exports__["a"] = (fetchData);

/***/ })

});
//# sourceMappingURL=2.js.map