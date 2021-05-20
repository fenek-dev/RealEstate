(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/store */ "./redux/store.ts");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\_Projects\\RealEstate\\src\\client\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (_redux_store__WEBPACK_IMPORTED_MODULE_1__.wrapper.withRedux(MyApp));

/***/ }),

/***/ "./redux/rootReducer.ts":
/*!******************************!*\
  !*** ./redux/rootReducer.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user_userReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/userReducer */ "./redux/user/userReducer.ts");


/* harmony default export */ __webpack_exports__["default"] = ((0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  user: _user_userReducer__WEBPACK_IMPORTED_MODULE_1__.default
}));

/***/ }),

/***/ "./redux/store.ts":
/*!************************!*\
  !*** ./redux/store.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeStore": function() { return /* binding */ makeStore; },
/* harmony export */   "wrapper": function() { return /* binding */ wrapper; }
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rootReducer */ "./redux/rootReducer.ts");





const bindMiddleware = middleware => {
  if (true) {
    Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! redux-devtools-extension */ "redux-devtools-extension", 23)).then(({
      composeWithDevTools
    }) => {
      composeWithDevTools((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(...middleware));
    });
  }

  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(...middleware);
};

const makeStore = context => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();
  const store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_rootReducer__WEBPACK_IMPORTED_MODULE_3__.default, bindMiddleware([sagaMiddleware]));
  return store;
};
const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__.createWrapper)(makeStore, {
  debug: true
});

/***/ }),

/***/ "./redux/user/userReducer.ts":
/*!***********************************!*\
  !*** ./redux/user/userReducer.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {};

function reducer(state = initialState, action) {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE:
      {
        return _objectSpread(_objectSpread({}, state), action.payload);
      }

    case 'ADD':
      return _objectSpread(_objectSpread({}, state), {}, {
        count: state.count + 1
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-redux-wrapper");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-devtools-extension");;

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-saga");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yb290UmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9zdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9yZWR1eC91c2VyL3VzZXJSZWR1Y2VyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwid3JhcHBlciIsImNvbWJpbmVSZWR1Y2VycyIsInVzZXIiLCJ1c2VyUmVkdWNlciIsImJpbmRNaWRkbGV3YXJlIiwibWlkZGxld2FyZSIsInRoZW4iLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwibWFrZVN0b3JlIiwiY29udGV4dCIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicm9vdFJlZHVjZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciLCJpbml0aWFsU3RhdGUiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsInBheWxvYWQiLCJjb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxDQUFlO0FBQUNDLFdBQUQ7QUFBWUM7QUFBWixDQUFmLEVBQXVDO0FBQ3JDLHNCQUFPLDhEQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0FBRUQsK0RBQWVDLDJEQUFBLENBQWtCSCxLQUFsQixDQUFmLEU7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFFQSwrREFBZUksc0RBQWUsQ0FBQztBQUM3QkMsTUFBSSxFQUFFQyxzREFBV0E7QUFEWSxDQUFELENBQTlCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUMsY0FBYyxHQUFHQyxVQUFVLElBQUk7QUFDbkMsWUFBMkM7QUFDekMsMkpBQW1DQyxJQUFuQyxDQUF3QyxDQUFDO0FBQUNDO0FBQUQsS0FBRCxLQUEyQjtBQUNqRUEseUJBQW1CLENBQUNDLHNEQUFlLENBQUMsR0FBR0gsVUFBSixDQUFoQixDQUFuQjtBQUNELEtBRkQ7QUFHRDs7QUFDRCxTQUFPRyxzREFBZSxDQUFDLEdBQUdILFVBQUosQ0FBdEI7QUFDRCxDQVBEOztBQVNPLE1BQU1JLFNBQVMsR0FBR0MsT0FBTyxJQUFJO0FBQ2xDLFFBQU1DLGNBQWMsR0FBR0MsaURBQW9CLEVBQTNDO0FBQ0EsUUFBTUMsS0FBSyxHQUFHQyxrREFBVyxDQUFDQyxpREFBRCxFQUFjWCxjQUFjLENBQUMsQ0FBQ08sY0FBRCxDQUFELENBQTVCLENBQXpCO0FBQ0EsU0FBT0UsS0FBUDtBQUNELENBSk07QUFNQSxNQUFNYixPQUFPLEdBQUdnQixpRUFBYSxDQUFDUCxTQUFELEVBQVk7QUFBQ1EsT0FBSyxFQUFFO0FBQVIsQ0FBWixDQUE3QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCUDtBQUVBLE1BQU1DLFlBQXVDLEdBQUcsRUFBaEQ7O0FBRUEsU0FBU0MsT0FBVCxDQUFpQkMsS0FBSyxHQUFHRixZQUF6QixFQUF1Q0csTUFBdkMsRUFBMEU7QUFDeEUsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBS0MsdURBQUw7QUFBYztBQUNaLCtDQUFXSCxLQUFYLEdBQXFCQyxNQUFNLENBQUNHLE9BQTVCO0FBQ0Q7O0FBRUQsU0FBSyxLQUFMO0FBQ0UsNkNBQVdKLEtBQVg7QUFBa0JLLGFBQUssRUFBRUwsS0FBSyxDQUFDSyxLQUFOLEdBQWM7QUFBdkM7O0FBRUY7QUFDRSxhQUFPTCxLQUFQO0FBVEo7QUFXRDs7QUFFRCwrREFBZUQsT0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsd0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7d3JhcHBlcn0gZnJvbSAnLi4vcmVkdXgvc3RvcmUnXHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoe0NvbXBvbmVudCwgcGFnZVByb3BzfSkge1xyXG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE15QXBwKVxyXG4iLCJpbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSAncmVkdXgnXHJcbmltcG9ydCB1c2VyUmVkdWNlciBmcm9tICcuL3VzZXIvdXNlclJlZHVjZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIHVzZXI6IHVzZXJSZWR1Y2VyLFxyXG59KVxyXG4iLCJpbXBvcnQge2FwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmV9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSdcclxuaW1wb3J0IHtjcmVhdGVXcmFwcGVyfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXHJcblxyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yb290UmVkdWNlcidcclxuXHJcbmNvbnN0IGJpbmRNaWRkbGV3YXJlID0gbWlkZGxld2FyZSA9PiB7XHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgIGltcG9ydCgncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJykudGhlbigoe2NvbXBvc2VXaXRoRGV2VG9vbHN9KSA9PiB7XHJcbiAgICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpKVxyXG4gICAgfSlcclxuICB9XHJcbiAgcmV0dXJuIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWFrZVN0b3JlID0gY29udGV4dCA9PiB7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpXHJcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgYmluZE1pZGRsZXdhcmUoW3NhZ2FNaWRkbGV3YXJlXSkpXHJcbiAgcmV0dXJuIHN0b3JlXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihtYWtlU3RvcmUsIHtkZWJ1ZzogdHJ1ZX0pXHJcbiIsImltcG9ydCB7SFlEUkFURX0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xyXG5pbnRlcmZhY2UgVXNlckluaXRpYWxTdGF0ZUludGVyZmFjZSB7fVxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFVzZXJJbml0aWFsU3RhdGVJbnRlcmZhY2UgPSB7fVxyXG5cclxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKTogVXNlckluaXRpYWxTdGF0ZUludGVyZmFjZSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBIWURSQVRFOiB7XHJcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkfVxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgJ0FERCc6XHJcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIGNvdW50OiBzdGF0ZS5jb3VudCArIDF9XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9