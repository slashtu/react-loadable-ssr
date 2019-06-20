webpackJsonp([1],{

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_loadable__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_loadable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Loading__ = __webpack_require__(36);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var AsyncFetchAdoptionsComponent = __WEBPACK_IMPORTED_MODULE_1_react_loadable___default()({
  loader: function loader() {
    return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 103));
  },
  modules: ['./FetchAdoptionsComponent'],
  webpack: function webpack() {
    return [/*require.resolve*/(103)];
  },
  loading: __WEBPACK_IMPORTED_MODULE_2__Loading__["a" /* default */]
});

var Adoptions = function (_Component) {
  _inherits(Adoptions, _Component);

  function Adoptions() {
    _classCallCheck(this, Adoptions);

    return _possibleConstructorReturn(this, (Adoptions.__proto__ || Object.getPrototypeOf(Adoptions)).apply(this, arguments));
  }

  _createClass(Adoptions, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'section',
        { className: 'jumbotron text-center' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          null,
          'Adoptions'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(AsyncFetchAdoptionsComponent, null)
      );
    }
  }]);

  return Adoptions;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Adoptions);

/***/ })

});
//# sourceMappingURL=1.js.map