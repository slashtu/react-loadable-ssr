/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		3: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + chunkId + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// uncatched error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using System.import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-loadable");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);



var Loading = function Loading(props) {
  if (props.isLoading) {
    if (props.timedOut) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        'Loader timed out!'
      );
    } else if (props.pastDelay) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        'Loading...'
      );
    }
    return null;
  } else if (props.error) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      'Error! Component failed to load'
    );
  }
  return null;
};

Loading.propTypes = {
  isLoading: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  timedOut: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  pastDelay: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  error: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

/* harmony default export */ __webpack_exports__["a"] = (Loading);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ENABLE_DATAFETCH */
/* unused harmony export PUSH */
/* unused harmony export enableDataFetch */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return push; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var ENABLE_DATAFETCH = 'dataFetch/ENABLE_DATAFETCH';
var PUSH = 'dataFetch/PUSH';

var initialState = {
  isDataFetchEnabled: false,
  promises: []
};

/* harmony default export */ __webpack_exports__["a"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case ENABLE_DATAFETCH:
      return _extends({}, state, {
        isDataFetchEnabled: true
      });
    case PUSH:
      return _extends({}, state, {
        promises: [].concat(_toConsumableArray(state.promises), [action.promise])
      });
    default:
      return state;
  }
});

var enableDataFetch = function enableDataFetch() {
  return {
    type: ENABLE_DATAFETCH
  };
};

var push = function push(promise) {
  return {
    type: PUSH,
    promise: promise
  };
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ADOPTIONS_REQUEST */
/* unused harmony export ADOPTIONS_SUCCESS */
/* unused harmony export ADOPTIONS_FAIL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return queryAdoptions; });
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var ADOPTIONS_REQUEST = 'adoptions/ADOPTIONS_REQUEST';
var ADOPTIONS_SUCCESS = 'adoptions/ADOPTIONS_SUCCESS';
var ADOPTIONS_FAIL = 'adoptions/ADOPTIONS_FAIL';

var initialState = [];

/* harmony default export */ __webpack_exports__["a"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case ADOPTIONS_REQUEST:
    case ADOPTIONS_FAIL:
      return state;
    case ADOPTIONS_SUCCESS:
      return [].concat(_toConsumableArray(action.adoptions));
    default:
      return state;
  }
});

var queryAdoptions = function queryAdoptions() {
  return async function (dispatch) {
    dispatch({ type: 'ADOPTIONS_REQUEST' });

    var res = await fetch('http://asms.coa.gov.tw/Asms/api/ViewNowAnimal?pageSize=30&currentPage=' + (~~(Math.random() * 10) + 1));
    var adoptions = await res.json();

    dispatch({ type: ADOPTIONS_SUCCESS, adoptions: Object.values(adoptions) });
  };
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "express"
var external__express_ = __webpack_require__(10);
var external__express__default = /*#__PURE__*/__webpack_require__.n(external__express_);

// EXTERNAL MODULE: external "react-loadable"
var external__react_loadable_ = __webpack_require__(1);
var external__react_loadable__default = /*#__PURE__*/__webpack_require__.n(external__react_loadable_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "react-dom/server"
var server_ = __webpack_require__(11);
var server__default = /*#__PURE__*/__webpack_require__.n(server_);

// EXTERNAL MODULE: external "react-router-dom"
var external__react_router_dom_ = __webpack_require__(4);
var external__react_router_dom__default = /*#__PURE__*/__webpack_require__.n(external__react_router_dom_);

// EXTERNAL MODULE: external "react-loadable/webpack"
var webpack_ = __webpack_require__(12);
var webpack__default = /*#__PURE__*/__webpack_require__.n(webpack_);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(5);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(2);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// EXTERNAL MODULE: ./src/components/Loading.js
var Loading = __webpack_require__(6);

// CONCATENATED MODULE: ./src/routes/index.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var AsyncHome = external__react_loadable__default()({
  loader: function loader() {
    return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 14));
  },
  modules: ['../components/Home'],
  webpack: function webpack() {
    return [/*require.resolve*/(14)];
  },
  loading: Loading["a" /* default */]
});

var AsyncAdoptions = external__react_loadable__default()({
  loader: function loader() {
    return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 15));
  },
  modules: ['../components/Adoptions'],
  webpack: function webpack() {
    return [/*require.resolve*/(15)];
  },
  loading: Loading["a" /* default */]
});

var routes_Routes = (_temp = _class = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        'div',
        { className: 'container' },
        external__react__default.a.createElement(
          'header',
          { className: 'navbar navbar-expand-lg navbar-light bg-light' },
          external__react__default.a.createElement(
            'ul',
            { className: 'nav' },
            external__react__default.a.createElement(
              'li',
              { className: 'nav-item' },
              external__react__default.a.createElement(
                external__react_router_dom_["Link"],
                { className: 'nav-link', to: '/' },
                'Home'
              )
            ),
            external__react__default.a.createElement(
              'li',
              { className: 'nav-item' },
              external__react__default.a.createElement(
                external__react_router_dom_["Link"],
                { className: 'nav-link', to: '/adoptions' },
                'Adoptions'
              )
            )
          )
        ),
        external__react__default.a.createElement(external__react_router_dom_["Route"], { exact: true, path: '/', component: AsyncHome }),
        external__react__default.a.createElement(external__react_router_dom_["Route"], { path: '/adoptions', component: AsyncAdoptions })
      );
    }
  }]);

  return Routes;
}(external__react_["Component"]), _class.propTypes = {
  fetchQueue: external__prop_types__default.a.array,
  store: external__prop_types__default.a.object
}, _temp);

/* harmony default export */ var routes = (routes_Routes);
// EXTERNAL MODULE: external "redux"
var external__redux_ = __webpack_require__(3);
var external__redux__default = /*#__PURE__*/__webpack_require__.n(external__redux_);

// EXTERNAL MODULE: external "redux-thunk"
var external__redux_thunk_ = __webpack_require__(16);
var external__redux_thunk__default = /*#__PURE__*/__webpack_require__.n(external__redux_thunk_);

// EXTERNAL MODULE: ./src/store/reducers/dataFetch.js
var dataFetch = __webpack_require__(7);

// EXTERNAL MODULE: ./src/store/reducers/adoptions.js
var adoptions = __webpack_require__(8);

// CONCATENATED MODULE: ./src/store/reducers/reducers.js





var reducers_reducers = {
  dataFetch: dataFetch["a" /* default */],
  adoptions: adoptions["a" /* default */]
};

/* harmony default export */ var store_reducers_reducers = (Object(external__redux_["combineReducers"])(reducers_reducers));
// CONCATENATED MODULE: ./src/store/configStore.js

/*global __CLIENT__*/




var configStore_createStore = function createStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var middleware = [external__redux_thunk__default.a];

  if (false) {
    var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createReduxStore(reducers, initialState, composeEnhancers(applyMiddleware.apply(undefined, middleware)));
  } else {
    return Object(external__redux_["createStore"])(store_reducers_reducers, initialState, external__redux_["applyMiddleware"].apply(undefined, middleware));
  }
};
// EXTERNAL MODULE: ./dist/react-loadable.json
var react_loadable = __webpack_require__(17);
var react_loadable_default = /*#__PURE__*/__webpack_require__.n(react_loadable);

// CONCATENATED MODULE: ./src/server/renderer/index.js












var renderer_renderer = function renderer() {
  return function (req, res) {
    var modules = [];
    var context = {};
    var store = configStore_createStore();

    // pre-render for async data fetching
    server__default.a.renderToString(external__react__default.a.createElement(
      external__react_loadable__default.a.Capture,
      { report: function report(moduleName) {
          return modules.push(moduleName);
        } },
      external__react__default.a.createElement(
        external__react_redux_["Provider"],
        { store: store },
        external__react__default.a.createElement(
          external__react_router_dom_["StaticRouter"],
          { location: req.url, context: context },
          external__react__default.a.createElement(routes, null)
        )
      )
    ));

    var state = store.getState();
    var promises = state.dataFetch && state.dataFetch.promises;

    Promise.all(promises).then(function () {
      var bundles = Object(webpack_["getBundles"])(react_loadable_default.a, modules);

      var styles = bundles.filter(function (bundle) {
        return bundle.file.endsWith('.css');
      });
      var components = bundles.filter(function (bundle) {
        return bundle.file.endsWith('.js');
      });

      var html = server__default.a.renderToString(external__react__default.a.createElement(
        external__react_loadable__default.a.Capture,
        { report: function report(moduleName) {
            return modules.push(moduleName);
          } },
        external__react__default.a.createElement(
          external__react_redux_["Provider"],
          { store: store },
          external__react__default.a.createElement(
            external__react_router_dom_["StaticRouter"],
            { location: req.url, context: context },
            external__react__default.a.createElement(routes, null)
          )
        )
      ));

      var serialization = JSON.stringify(store.getState()).replace(/</g, '\\u003c');

      res.send('\n        <!doctype html>\n        <html lang="en">\n          <head>\n            <meta charset="UTF-8">\n            <meta name="viewport" content="width=device-width, initial-scale=1.0">\n            <meta http-equiv="X-UA-Compatible" content="ie=edge">\n            <title>My App</title>\n            ' + styles.map(function (style) {
        return '<link href="/dist/' + style.file + '" rel="stylesheet"/>';
      }).join('\n') + '\n            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" \n            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">\n          </head>\n          <body>\n            <div id="app">' + html + '</div>\n            <script src="/dist/main.js"></script>\n            ' + components.map(function (script) {
        return '<script src="/dist/' + script.file + '"></script>';
      }).join('\n') + '\n            <script type="text/javascript" charSet="utf-8">\n              window.__STORE__ = ' + serialization + '\n            </script>\n            <script>window.main();</script>\n          </body>\n        </html>\n      ');
    });
  };
};

/* harmony default export */ var server_renderer = (renderer_renderer);
// CONCATENATED MODULE: ./src/server/server.js




var app = external__express__default()();

app.use('/dist', external__express__default.a.static('dist'));

app.get('*', server_renderer());

external__react_loadable__default.a.preloadAll().then(function () {
  app.listen(3000, function () {
    console.log('Running on http://localhost:3000/');
  });
}).catch(function (err) {
  return console.log(err);
});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-loadable/webpack");

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = {"../components/Home":[{"id":37,"name":"./src/components/Home.js","file":"0.js","publicPath":"/dist/0.js"},{"id":37,"name":"./src/components/Home.js","file":"0.js.map","publicPath":"/dist/0.js.map"}],"../components/Adoptions":[{"id":38,"name":"./src/components/Adoptions.js","file":"1.js","publicPath":"/dist/1.js"},{"id":38,"name":"./src/components/Adoptions.js","file":"1.js.map","publicPath":"/dist/1.js.map"}],"./FetchAdoptionsComponent":[{"id":103,"name":"./src/components/FetchAdoptionsComponent.js","file":"2.js","publicPath":"/dist/2.js"},{"id":103,"name":"./src/components/FetchAdoptionsComponent.js","file":"2.js.map","publicPath":"/dist/2.js.map"}],"unfetch":[{"id":104,"name":"./node_modules/unfetch/dist/unfetch.es.js","file":"2.js","publicPath":"/dist/2.js"},{"id":104,"name":"./node_modules/unfetch/dist/unfetch.es.js","file":"2.js.map","publicPath":"/dist/2.js.map"}],"isomorphic-unfetch":[{"id":105,"name":"./node_modules/isomorphic-unfetch/browser.js","file":"2.js","publicPath":"/dist/2.js"},{"id":105,"name":"./node_modules/isomorphic-unfetch/browser.js","file":"2.js.map","publicPath":"/dist/2.js.map"}],"hocs/fetchData":[{"id":106,"name":"./src/hocs/fetchData.js","file":"2.js","publicPath":"/dist/2.js"},{"id":106,"name":"./src/hocs/fetchData.js","file":"2.js.map","publicPath":"/dist/2.js.map"}],"react":[{"id":0,"name":"./node_modules/react/index.js","file":"main.js","publicPath":"/dist/main.js"},{"id":0,"name":"./node_modules/react/index.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"prop-types":[{"id":1,"name":"./node_modules/prop-types/index.js","file":"main.js","publicPath":"/dist/main.js"},{"id":1,"name":"./node_modules/prop-types/index.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"warning":[{"id":2,"name":"./node_modules/warning/warning.js","file":"main.js","publicPath":"/dist/main.js"},{"id":2,"name":"./node_modules/warning/warning.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"invariant":[{"id":3,"name":"./node_modules/invariant/browser.js","file":"main.js","publicPath":"/dist/main.js"},{"id":3,"name":"./node_modules/invariant/browser.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"history":[{"id":4,"name":"./node_modules/history/esm/history.js","file":"main.js","publicPath":"/dist/main.js"},{"id":4,"name":"./node_modules/history/esm/history.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"react-is":[{"id":5,"name":"./node_modules/react-is/index.js","file":"main.js","publicPath":"/dist/main.js"},{"id":5,"name":"./node_modules/react-is/index.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"@babel/runtime/helpers/esm/extends":[{"id":6,"name":"./node_modules/@babel/runtime/helpers/esm/extends.js","file":"main.js","publicPath":"/dist/main.js"},{"id":6,"name":"./node_modules/@babel/runtime/helpers/esm/extends.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"redux":[{"id":7,"name":"./node_modules/redux/es/index.js","file":"main.js","publicPath":"/dist/main.js"},{"id":7,"name":"./node_modules/redux/es/index.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"object-assign":[{"id":8,"name":"./node_modules/object-assign/index.js","file":"main.js","publicPath":"/dist/main.js"},{"id":8,"name":"./node_modules/object-assign/index.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"prop-types/checkPropTypes":[{"id":9,"name":"./node_modules/prop-types/checkPropTypes.js","file":"main.js","publicPath":"/dist/main.js"},{"id":9,"name":"./node_modules/prop-types/checkPropTypes.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./../../webpack/buildin/global.js":[{"id":10,"name":"./node_modules/webpack/buildin/global.js","file":"main.js","publicPath":"/dist/main.js"},{"id":10,"name":"./node_modules/webpack/buildin/global.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./Router":[{"id":11,"name":"./node_modules/react-router-dom/es/Router.js","file":"main.js","publicPath":"/dist/main.js"},{"id":11,"name":"./node_modules/react-router-dom/es/Router.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"react-router/es/Router":[{"id":12,"name":"./node_modules/react-router/es/Router.js","file":"main.js","publicPath":"/dist/main.js"},{"id":12,"name":"./node_modules/react-router/es/Router.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"react-router/es/matchPath":[{"id":13,"name":"./node_modules/react-router/es/matchPath.js","file":"main.js","publicPath":"/dist/main.js"},{"id":13,"name":"./node_modules/react-router/es/matchPath.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"../utils/warning":[{"id":14,"name":"./node_modules/react-redux/es/utils/warning.js","file":"main.js","publicPath":"/dist/main.js"},{"id":14,"name":"./node_modules/react-redux/es/utils/warning.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":[{"id":15,"name":"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js","file":"main.js","publicPath":"/dist/main.js"},{"id":15,"name":"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"react-loadable":[{"id":16,"name":"./node_modules/react-loadable/lib/index.js","file":"main.js","publicPath":"/dist/main.js"},{"id":16,"name":"./node_modules/react-loadable/lib/index.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"reducers/dataFetch":[{"id":17,"name":"./src/store/reducers/dataFetch.js","file":"main.js","publicPath":"/dist/main.js"},{"id":17,"name":"./src/store/reducers/dataFetch.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./lib/ReactPropTypesSecret":[{"id":18,"name":"./node_modules/prop-types/lib/ReactPropTypesSecret.js","file":"main.js","publicPath":"/dist/main.js"},{"id":18,"name":"./node_modules/prop-types/lib/ReactPropTypesSecret.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"react-router-dom":[{"id":19,"name":"./node_modules/react-router-dom/es/index.js","file":"main.js","publicPath":"/dist/main.js"},{"id":19,"name":"./node_modules/react-router-dom/es/index.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./Link":[{"id":20,"name":"./node_modules/react-router-dom/es/Link.js","file":"main.js","publicPath":"/dist/main.js"},{"id":20,"name":"./node_modules/react-router-dom/es/Link.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./Route":[{"id":21,"name":"./node_modules/react-router-dom/es/Route.js","file":"main.js","publicPath":"/dist/main.js"},{"id":21,"name":"./node_modules/react-router-dom/es/Route.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"react-router/es/Route":[{"id":22,"name":"./node_modules/react-router/es/Route.js","file":"main.js","publicPath":"/dist/main.js"},{"id":22,"name":"./node_modules/react-router/es/Route.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"path-to-regexp":[{"id":23,"name":"./node_modules/react-router/node_modules/path-to-regexp/index.js","file":"main.js","publicPath":"/dist/main.js"},{"id":23,"name":"./node_modules/react-router/node_modules/path-to-regexp/index.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"react-router/es/generatePath":[{"id":24,"name":"./node_modules/react-router/es/generatePath.js","file":"main.js","publicPath":"/dist/main.js"},{"id":24,"name":"./node_modules/react-router/es/generatePath.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"@babel/runtime/helpers/esm/inheritsLoose":[{"id":25,"name":"./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js","file":"main.js","publicPath":"/dist/main.js"},{"id":25,"name":"./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"../utils/PropTypes":[{"id":26,"name":"./node_modules/react-redux/es/utils/PropTypes.js","file":"main.js","publicPath":"/dist/main.js"},{"id":26,"name":"./node_modules/react-redux/es/utils/PropTypes.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./components/connectAdvanced":[{"id":27,"name":"./node_modules/react-redux/es/components/connectAdvanced.js","file":"main.js","publicPath":"/dist/main.js"},{"id":27,"name":"./node_modules/react-redux/es/components/connectAdvanced.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./createStore":[{"id":28,"name":"./node_modules/redux/es/createStore.js","file":"main.js","publicPath":"/dist/main.js"},{"id":28,"name":"./node_modules/redux/es/createStore.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"lodash-es/isPlainObject":[{"id":29,"name":"./node_modules/lodash-es/isPlainObject.js","file":"main.js","publicPath":"/dist/main.js"},{"id":29,"name":"./node_modules/lodash-es/isPlainObject.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./_Symbol.js":[{"id":30,"name":"./node_modules/lodash-es/_Symbol.js","file":"main.js","publicPath":"/dist/main.js"},{"id":30,"name":"./node_modules/lodash-es/_Symbol.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./utils/warning":[{"id":31,"name":"./node_modules/redux/es/utils/warning.js","file":"main.js","publicPath":"/dist/main.js"},{"id":31,"name":"./node_modules/redux/es/utils/warning.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./compose":[{"id":32,"name":"./node_modules/redux/es/compose.js","file":"main.js","publicPath":"/dist/main.js"},{"id":32,"name":"./node_modules/redux/es/compose.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./wrapMapToProps":[{"id":33,"name":"./node_modules/react-redux/es/connect/wrapMapToProps.js","file":"main.js","publicPath":"/dist/main.js"},{"id":33,"name":"./node_modules/react-redux/es/connect/wrapMapToProps.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"../utils/verifyPlainObject":[{"id":34,"name":"./node_modules/react-redux/es/utils/verifyPlainObject.js","file":"main.js","publicPath":"/dist/main.js"},{"id":34,"name":"./node_modules/react-redux/es/utils/verifyPlainObject.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"react-redux":[{"id":35,"name":"./node_modules/react-redux/es/index.js","file":"main.js","publicPath":"/dist/main.js"},{"id":35,"name":"./node_modules/react-redux/es/index.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"../components/Loading":[{"id":36,"name":"./src/components/Loading.js","file":"main.js","publicPath":"/dist/main.js"},{"id":36,"name":"./src/components/Loading.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"reducers/adoptions":[{"id":39,"name":"./src/store/reducers/adoptions.js","file":"main.js","publicPath":"/dist/main.js"},{"id":39,"name":"./src/store/reducers/adoptions.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./src/client":[{"id":40,"name":"./src/client.js","file":"main.js","publicPath":"/dist/main.js"},{"id":40,"name":"./src/client.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./cjs/react.development.js":[{"id":41,"name":"./node_modules/react/cjs/react.development.js","file":"main.js","publicPath":"/dist/main.js"},{"id":41,"name":"./node_modules/react/cjs/react.development.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"react-dom":[{"id":42,"name":"./node_modules/react-dom/index.js","file":"main.js","publicPath":"/dist/main.js"},{"id":42,"name":"./node_modules/react-dom/index.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./cjs/react-dom.development.js":[{"id":43,"name":"./node_modules/react-dom/cjs/react-dom.development.js","file":"main.js","publicPath":"/dist/main.js"},{"id":43,"name":"./node_modules/react-dom/cjs/react-dom.development.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"scheduler":[{"id":44,"name":"./node_modules/scheduler/index.js","file":"main.js","publicPath":"/dist/main.js"},{"id":44,"name":"./node_modules/scheduler/index.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./cjs/scheduler.development.js":[{"id":45,"name":"./node_modules/scheduler/cjs/scheduler.development.js","file":"main.js","publicPath":"/dist/main.js"},{"id":45,"name":"./node_modules/scheduler/cjs/scheduler.development.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"scheduler/tracing":[{"id":46,"name":"./node_modules/scheduler/tracing.js","file":"main.js","publicPath":"/dist/main.js"},{"id":46,"name":"./node_modules/scheduler/tracing.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./cjs/scheduler-tracing.development.js":[{"id":47,"name":"./node_modules/scheduler/cjs/scheduler-tracing.development.js","file":"main.js","publicPath":"/dist/main.js"},{"id":47,"name":"./node_modules/scheduler/cjs/scheduler-tracing.development.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./cjs/react-is.development.js":[{"id":48,"name":"./node_modules/react-is/cjs/react-is.development.js","file":"main.js","publicPath":"/dist/main.js"},{"id":48,"name":"./node_modules/react-is/cjs/react-is.development.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./factoryWithTypeCheckers":[{"id":49,"name":"./node_modules/prop-types/factoryWithTypeCheckers.js","file":"main.js","publicPath":"/dist/main.js"},{"id":49,"name":"./node_modules/prop-types/factoryWithTypeCheckers.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./BrowserRouter":[{"id":50,"name":"./node_modules/react-router-dom/es/BrowserRouter.js","file":"main.js","publicPath":"/dist/main.js"},{"id":50,"name":"./node_modules/react-router-dom/es/BrowserRouter.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"resolve-pathname":[{"id":51,"name":"./node_modules/resolve-pathname/index.js","file":"main.js","publicPath":"/dist/main.js"},{"id":51,"name":"./node_modules/resolve-pathname/index.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"value-equal":[{"id":52,"name":"./node_modules/value-equal/index.js","file":"main.js","publicPath":"/dist/main.js"},{"id":52,"name":"./node_modules/value-equal/index.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"tiny-warning":[{"id":53,"name":"./node_modules/tiny-warning/dist/tiny-warning.esm.js","file":"main.js","publicPath":"/dist/main.js"},{"id":53,"name":"./node_modules/tiny-warning/dist/tiny-warning.esm.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"tiny-invariant":[{"id":54,"name":"./node_modules/tiny-invariant/dist/tiny-invariant.esm.js","file":"main.js","publicPath":"/dist/main.js"},{"id":54,"name":"./node_modules/tiny-invariant/dist/tiny-invariant.esm.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./HashRouter":[{"id":55,"name":"./node_modules/react-router-dom/es/HashRouter.js","file":"main.js","publicPath":"/dist/main.js"},{"id":55,"name":"./node_modules/react-router-dom/es/HashRouter.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./MemoryRouter":[{"id":56,"name":"./node_modules/react-router-dom/es/MemoryRouter.js","file":"main.js","publicPath":"/dist/main.js"},{"id":56,"name":"./node_modules/react-router-dom/es/MemoryRouter.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"react-router/es/MemoryRouter":[{"id":57,"name":"./node_modules/react-router/es/MemoryRouter.js","file":"main.js","publicPath":"/dist/main.js"},{"id":57,"name":"./node_modules/react-router/es/MemoryRouter.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./NavLink":[{"id":58,"name":"./node_modules/react-router-dom/es/NavLink.js","file":"main.js","publicPath":"/dist/main.js"},{"id":58,"name":"./node_modules/react-router-dom/es/NavLink.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"isarray":[{"id":59,"name":"./node_modules/react-router/node_modules/isarray/index.js","file":"main.js","publicPath":"/dist/main.js"},{"id":59,"name":"./node_modules/react-router/node_modules/isarray/index.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./Prompt":[{"id":60,"name":"./node_modules/react-router-dom/es/Prompt.js","file":"main.js","publicPath":"/dist/main.js"},{"id":60,"name":"./node_modules/react-router-dom/es/Prompt.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"react-router/es/Prompt":[{"id":61,"name":"./node_modules/react-router/es/Prompt.js","file":"main.js","publicPath":"/dist/main.js"},{"id":61,"name":"./node_modules/react-router/es/Prompt.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./Redirect":[{"id":62,"name":"./node_modules/react-router-dom/es/Redirect.js","file":"main.js","publicPath":"/dist/main.js"},{"id":62,"name":"./node_modules/react-router-dom/es/Redirect.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"react-router/es/Redirect":[{"id":63,"name":"./node_modules/react-router/es/Redirect.js","file":"main.js","publicPath":"/dist/main.js"},{"id":63,"name":"./node_modules/react-router/es/Redirect.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./StaticRouter":[{"id":64,"name":"./node_modules/react-router-dom/es/StaticRouter.js","file":"main.js","publicPath":"/dist/main.js"},{"id":64,"name":"./node_modules/react-router-dom/es/StaticRouter.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"react-router/es/StaticRouter":[{"id":65,"name":"./node_modules/react-router/es/StaticRouter.js","file":"main.js","publicPath":"/dist/main.js"},{"id":65,"name":"./node_modules/react-router/es/StaticRouter.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./Switch":[{"id":66,"name":"./node_modules/react-router-dom/es/Switch.js","file":"main.js","publicPath":"/dist/main.js"},{"id":66,"name":"./node_modules/react-router-dom/es/Switch.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"react-router/es/Switch":[{"id":67,"name":"./node_modules/react-router/es/Switch.js","file":"main.js","publicPath":"/dist/main.js"},{"id":67,"name":"./node_modules/react-router/es/Switch.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./generatePath":[{"id":68,"name":"./node_modules/react-router-dom/es/generatePath.js","file":"main.js","publicPath":"/dist/main.js"},{"id":68,"name":"./node_modules/react-router-dom/es/generatePath.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./matchPath":[{"id":69,"name":"./node_modules/react-router-dom/es/matchPath.js","file":"main.js","publicPath":"/dist/main.js"},{"id":69,"name":"./node_modules/react-router-dom/es/matchPath.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./withRouter":[{"id":70,"name":"./node_modules/react-router-dom/es/withRouter.js","file":"main.js","publicPath":"/dist/main.js"},{"id":70,"name":"./node_modules/react-router-dom/es/withRouter.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"react-router/es/withRouter":[{"id":71,"name":"./node_modules/react-router/es/withRouter.js","file":"main.js","publicPath":"/dist/main.js"},{"id":71,"name":"./node_modules/react-router/es/withRouter.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"hoist-non-react-statics":[{"id":72,"name":"./node_modules/react-router/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js","file":"main.js","publicPath":"/dist/main.js"},{"id":75,"name":"./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js","file":"main.js","publicPath":"/dist/main.js"},{"id":72,"name":"./node_modules/react-router/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js","file":"main.js.map","publicPath":"/dist/main.js.map"},{"id":75,"name":"./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./components/Provider":[{"id":73,"name":"./node_modules/react-redux/es/components/Provider.js","file":"main.js","publicPath":"/dist/main.js"},{"id":73,"name":"./node_modules/react-redux/es/components/Provider.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"@babel/runtime/helpers/esm/assertThisInitialized":[{"id":74,"name":"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js","file":"main.js","publicPath":"/dist/main.js"},{"id":74,"name":"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"../utils/Subscription":[{"id":76,"name":"./node_modules/react-redux/es/utils/Subscription.js","file":"main.js","publicPath":"/dist/main.js"},{"id":76,"name":"./node_modules/react-redux/es/utils/Subscription.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./connect/connect":[{"id":77,"name":"./node_modules/react-redux/es/connect/connect.js","file":"main.js","publicPath":"/dist/main.js"},{"id":77,"name":"./node_modules/react-redux/es/connect/connect.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"../utils/shallowEqual":[{"id":78,"name":"./node_modules/react-redux/es/utils/shallowEqual.js","file":"main.js","publicPath":"/dist/main.js"},{"id":78,"name":"./node_modules/react-redux/es/utils/shallowEqual.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./mapDispatchToProps":[{"id":79,"name":"./node_modules/react-redux/es/connect/mapDispatchToProps.js","file":"main.js","publicPath":"/dist/main.js"},{"id":79,"name":"./node_modules/react-redux/es/connect/mapDispatchToProps.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./_baseGetTag.js":[{"id":80,"name":"./node_modules/lodash-es/_baseGetTag.js","file":"main.js","publicPath":"/dist/main.js"},{"id":80,"name":"./node_modules/lodash-es/_baseGetTag.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./_root.js":[{"id":81,"name":"./node_modules/lodash-es/_root.js","file":"main.js","publicPath":"/dist/main.js"},{"id":81,"name":"./node_modules/lodash-es/_root.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./_freeGlobal.js":[{"id":82,"name":"./node_modules/lodash-es/_freeGlobal.js","file":"main.js","publicPath":"/dist/main.js"},{"id":82,"name":"./node_modules/lodash-es/_freeGlobal.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./_getRawTag.js":[{"id":83,"name":"./node_modules/lodash-es/_getRawTag.js","file":"main.js","publicPath":"/dist/main.js"},{"id":83,"name":"./node_modules/lodash-es/_getRawTag.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./_objectToString.js":[{"id":84,"name":"./node_modules/lodash-es/_objectToString.js","file":"main.js","publicPath":"/dist/main.js"},{"id":84,"name":"./node_modules/lodash-es/_objectToString.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./_getPrototype.js":[{"id":85,"name":"./node_modules/lodash-es/_getPrototype.js","file":"main.js","publicPath":"/dist/main.js"},{"id":85,"name":"./node_modules/lodash-es/_getPrototype.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./_overArg.js":[{"id":86,"name":"./node_modules/lodash-es/_overArg.js","file":"main.js","publicPath":"/dist/main.js"},{"id":86,"name":"./node_modules/lodash-es/_overArg.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./isObjectLike.js":[{"id":87,"name":"./node_modules/lodash-es/isObjectLike.js","file":"main.js","publicPath":"/dist/main.js"},{"id":87,"name":"./node_modules/lodash-es/isObjectLike.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"symbol-observable":[{"id":88,"name":"./node_modules/symbol-observable/es/index.js","file":"main.js","publicPath":"/dist/main.js"},{"id":88,"name":"./node_modules/symbol-observable/es/index.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./../../webpack/buildin/harmony-module.js":[{"id":89,"name":"./node_modules/webpack/buildin/harmony-module.js","file":"main.js","publicPath":"/dist/main.js"},{"id":89,"name":"./node_modules/webpack/buildin/harmony-module.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./ponyfill.js":[{"id":90,"name":"./node_modules/symbol-observable/es/ponyfill.js","file":"main.js","publicPath":"/dist/main.js"},{"id":90,"name":"./node_modules/symbol-observable/es/ponyfill.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./combineReducers":[{"id":91,"name":"./node_modules/redux/es/combineReducers.js","file":"main.js","publicPath":"/dist/main.js"},{"id":91,"name":"./node_modules/redux/es/combineReducers.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./bindActionCreators":[{"id":92,"name":"./node_modules/redux/es/bindActionCreators.js","file":"main.js","publicPath":"/dist/main.js"},{"id":92,"name":"./node_modules/redux/es/bindActionCreators.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./applyMiddleware":[{"id":93,"name":"./node_modules/redux/es/applyMiddleware.js","file":"main.js","publicPath":"/dist/main.js"},{"id":93,"name":"./node_modules/redux/es/applyMiddleware.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./isPlainObject":[{"id":94,"name":"./node_modules/react-redux/es/utils/isPlainObject.js","file":"main.js","publicPath":"/dist/main.js"},{"id":94,"name":"./node_modules/react-redux/es/utils/isPlainObject.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./mapStateToProps":[{"id":95,"name":"./node_modules/react-redux/es/connect/mapStateToProps.js","file":"main.js","publicPath":"/dist/main.js"},{"id":95,"name":"./node_modules/react-redux/es/connect/mapStateToProps.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./mergeProps":[{"id":96,"name":"./node_modules/react-redux/es/connect/mergeProps.js","file":"main.js","publicPath":"/dist/main.js"},{"id":96,"name":"./node_modules/react-redux/es/connect/mergeProps.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./selectorFactory":[{"id":97,"name":"./node_modules/react-redux/es/connect/selectorFactory.js","file":"main.js","publicPath":"/dist/main.js"},{"id":97,"name":"./node_modules/react-redux/es/connect/selectorFactory.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./verifySubselectors":[{"id":98,"name":"./node_modules/react-redux/es/connect/verifySubselectors.js","file":"main.js","publicPath":"/dist/main.js"},{"id":98,"name":"./node_modules/react-redux/es/connect/verifySubselectors.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"./routes":[{"id":99,"name":"./src/routes/index.js","file":"main.js","publicPath":"/dist/main.js"},{"id":99,"name":"./src/routes/index.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"store/configStore":[{"id":100,"name":"./src/store/configStore.js","file":"main.js","publicPath":"/dist/main.js"},{"id":100,"name":"./src/store/configStore.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"redux-thunk":[{"id":101,"name":"./node_modules/redux-thunk/es/index.js","file":"main.js","publicPath":"/dist/main.js"},{"id":101,"name":"./node_modules/redux-thunk/es/index.js","file":"main.js.map","publicPath":"/dist/main.js.map"}],"reducers/reducers":[{"id":102,"name":"./src/store/reducers/reducers.js","file":"main.js","publicPath":"/dist/main.js"},{"id":102,"name":"./src/store/reducers/reducers.js","file":"main.js.map","publicPath":"/dist/main.js.map"}]}

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map