exports.ids = [2];
exports.modules = {

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external__isomorphic_unfetch_ = __webpack_require__(18);
var external__isomorphic_unfetch__default = /*#__PURE__*/__webpack_require__.n(external__isomorphic_unfetch_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(2);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// EXTERNAL MODULE: external "react-redux"
var external__react_redux_ = __webpack_require__(5);
var external__react_redux__default = /*#__PURE__*/__webpack_require__.n(external__react_redux_);

// EXTERNAL MODULE: external "redux"
var external__redux_ = __webpack_require__(3);
var external__redux__default = /*#__PURE__*/__webpack_require__.n(external__redux_);

// EXTERNAL MODULE: ./src/store/reducers/dataFetch.js
var dataFetch = __webpack_require__(7);

// CONCATENATED MODULE: ./src/hocs/fetchData.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*global __SERVER__*/







var mapStateToProps = function mapStateToProps(state) {
  var isDataFetchEnabled = state.dataFetch.isDataFetchEnabled;
  return { isDataFetchEnabled: isDataFetchEnabled };
};

var fetchData_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch,
    push: Object(external__redux_["bindActionCreators"])(dataFetch["b" /* push */], dispatch)
  };
};

var fetchData_fetchData = function fetchData(fetch) {
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


        if (true) {
          push(fetch({ dispatch: dispatch }));
        } else if (isDataFetchEnabled) {
          fetch({ dispatch: dispatch });
        }
        return _this;
      }

      _createClass(DataLoader, [{
        key: 'render',
        value: function render() {
          return external__react__default.a.createElement(WrappedComponent, this.props);
        }
      }]);

      return DataLoader;
    }(external__react_["Component"]), _class.propTypes = {
      isDataFetchEnabled: external__prop_types__default.a.bool.isRequired,
      dispatch: external__prop_types__default.a.func.isRequired,
      push: external__prop_types__default.a.func.isRequired
    }, _temp);

    return Object(external__react_redux_["connect"])(mapStateToProps, fetchData_mapDispatchToProps)(DataLoader);
  };
};

/* harmony default export */ var hocs_fetchData = (fetchData_fetchData);
// EXTERNAL MODULE: ./src/store/reducers/adoptions.js
var reducers_adoptions = __webpack_require__(8);

// CONCATENATED MODULE: ./src/components/FetchAdoptionsComponent.js
var FetchAdoptionsComponent__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, FetchAdoptionsComponent__class, _class2, _temp2;

function FetchAdoptionsComponent__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function FetchAdoptionsComponent__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function FetchAdoptionsComponent__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var FetchAdoptionsComponent_mapStateToProps = function mapStateToProps(_ref) {
  var adoptions = _ref.adoptions;

  return { adoptions: adoptions };
};

var FetchAdoptionsComponent_fetchAdoptions = function fetchAdoptions(_ref2) {
  var dispatch = _ref2.dispatch;

  return dispatch(Object(reducers_adoptions["b" /* queryAdoptions */])());
};

var FetchAdoptionsComponent_FetchAdoptionsComponent = (_dec = hocs_fetchData(FetchAdoptionsComponent_fetchAdoptions), _dec2 = Object(external__react_redux_["connect"])(FetchAdoptionsComponent_mapStateToProps), _dec(FetchAdoptionsComponent__class = _dec2(FetchAdoptionsComponent__class = (_temp2 = _class2 = function (_Component) {
  FetchAdoptionsComponent__inherits(FetchAdoptionsComponent, _Component);

  function FetchAdoptionsComponent() {
    var _ref3;

    var _temp, _this, _ret;

    FetchAdoptionsComponent__classCallCheck(this, FetchAdoptionsComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = FetchAdoptionsComponent__possibleConstructorReturn(this, (_ref3 = FetchAdoptionsComponent.__proto__ || Object.getPrototypeOf(FetchAdoptionsComponent)).call.apply(_ref3, [this].concat(args))), _this), _this.renderImages = function (adoptions) {
      return adoptions.map(function (e) {
        return external__react__default.a.createElement(
          'div',
          { key: e.AnimalId, className: 'col-sm' },
          external__react__default.a.createElement('img', { src: 'http://asms.coa.gov.tw/Amlapp/Upload/pic/' + e.pic, alt: e.AnimalId })
        );
      });
    }, _temp), FetchAdoptionsComponent__possibleConstructorReturn(_this, _ret);
  }

  FetchAdoptionsComponent__createClass(FetchAdoptionsComponent, [{
    key: 'render',
    value: function render() {
      var adoptions = this.props.adoptions;

      return external__react__default.a.createElement(
        'div',
        { className: 'row' },
        this.renderImages(adoptions)
      );
    }
  }]);

  return FetchAdoptionsComponent;
}(external__react_["Component"]), _class2.propTypes = {
  adoptions: external__prop_types__default.a.array
}, _temp2)) || FetchAdoptionsComponent__class) || FetchAdoptionsComponent__class);


/* harmony default export */ var components_FetchAdoptionsComponent = __webpack_exports__["default"] = (FetchAdoptionsComponent_FetchAdoptionsComponent);

/***/ })

};;
//# sourceMappingURL=2.js.map