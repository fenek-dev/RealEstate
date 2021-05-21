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


const initialState = {
  email: ''
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE:
      {
        return _objectSpread(_objectSpread({}, state), action.payload);
      }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yb290UmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9zdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9yZWR1eC91c2VyL3VzZXJSZWR1Y2VyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwid3JhcHBlciIsImNvbWJpbmVSZWR1Y2VycyIsInVzZXIiLCJ1c2VyUmVkdWNlciIsImJpbmRNaWRkbGV3YXJlIiwibWlkZGxld2FyZSIsInRoZW4iLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwibWFrZVN0b3JlIiwiY29udGV4dCIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicm9vdFJlZHVjZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciLCJpbml0aWFsU3RhdGUiLCJlbWFpbCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxDQUFlO0FBQUNDLFdBQUQ7QUFBWUM7QUFBWixDQUFmLEVBQXVDO0FBQ3JDLHNCQUFPLDhEQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0FBRUQsK0RBQWVDLDJEQUFBLENBQWtCSCxLQUFsQixDQUFmLEU7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFFQSwrREFBZUksc0RBQWUsQ0FBQztBQUM3QkMsTUFBSSxFQUFFQyxzREFBV0E7QUFEWSxDQUFELENBQTlCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUMsY0FBYyxHQUFHQyxVQUFVLElBQUk7QUFDbkMsWUFBMkM7QUFDekMsMkpBQW1DQyxJQUFuQyxDQUF3QyxDQUFDO0FBQUNDO0FBQUQsS0FBRCxLQUEyQjtBQUNqRUEseUJBQW1CLENBQUNDLHNEQUFlLENBQUMsR0FBR0gsVUFBSixDQUFoQixDQUFuQjtBQUNELEtBRkQ7QUFHRDs7QUFDRCxTQUFPRyxzREFBZSxDQUFDLEdBQUdILFVBQUosQ0FBdEI7QUFDRCxDQVBEOztBQVNPLE1BQU1JLFNBQVMsR0FBR0MsT0FBTyxJQUFJO0FBQ2xDLFFBQU1DLGNBQWMsR0FBR0MsaURBQW9CLEVBQTNDO0FBQ0EsUUFBTUMsS0FBSyxHQUFHQyxrREFBVyxDQUFDQyxpREFBRCxFQUFjWCxjQUFjLENBQUMsQ0FBQ08sY0FBRCxDQUFELENBQTVCLENBQXpCO0FBQ0EsU0FBT0UsS0FBUDtBQUNELENBSk07QUFNQSxNQUFNYixPQUFPLEdBQUdnQixpRUFBYSxDQUFDUCxTQUFELEVBQVk7QUFBQ1EsT0FBSyxFQUFFO0FBQVIsQ0FBWixDQUE3QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCUDtBQUlBLE1BQU1DLFlBQXVDLEdBQUc7QUFDOUNDLE9BQUssRUFBRTtBQUR1QyxDQUFoRDs7QUFJQSxTQUFTQyxPQUFULENBQWlCQyxLQUFLLEdBQUdILFlBQXpCLEVBQXVDSSxNQUF2QyxFQUEwRTtBQUN4RSxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLQyx1REFBTDtBQUFjO0FBQ1osK0NBQVdILEtBQVgsR0FBcUJDLE1BQU0sQ0FBQ0csT0FBNUI7QUFDRDs7QUFFRDtBQUNFLGFBQU9KLEtBQVA7QUFOSjtBQVFEOztBQUVELCtEQUFlRCxPQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt3cmFwcGVyfSBmcm9tICcuLi9yZWR1eC9zdG9yZSdcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7Q29tcG9uZW50LCBwYWdlUHJvcHN9KSB7XHJcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTXlBcHApXHJcbiIsImltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHVzZXJSZWR1Y2VyIGZyb20gJy4vdXNlci91c2VyUmVkdWNlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgdXNlcjogdXNlclJlZHVjZXIsXHJcbn0pXHJcbiIsImltcG9ydCB7YXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZX0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJ1xyXG5pbXBvcnQge2NyZWF0ZVdyYXBwZXJ9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcclxuXHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3Jvb3RSZWR1Y2VyJ1xyXG5cclxuY29uc3QgYmluZE1pZGRsZXdhcmUgPSBtaWRkbGV3YXJlID0+IHtcclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgaW1wb3J0KCdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nKS50aGVuKCh7Y29tcG9zZVdpdGhEZXZUb29sc30pID0+IHtcclxuICAgICAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpXHJcbiAgICB9KVxyXG4gIH1cclxuICByZXR1cm4gYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtYWtlU3RvcmUgPSBjb250ZXh0ID0+IHtcclxuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKClcclxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBiaW5kTWlkZGxld2FyZShbc2FnYU1pZGRsZXdhcmVdKSlcclxuICByZXR1cm4gc3RvcmVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSwge2RlYnVnOiB0cnVlfSlcclxuIiwiaW1wb3J0IHtIWURSQVRFfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXHJcbmludGVyZmFjZSBVc2VySW5pdGlhbFN0YXRlSW50ZXJmYWNlIHtcclxuICBlbWFpbDogc3RyaW5nXHJcbn1cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBVc2VySW5pdGlhbFN0YXRlSW50ZXJmYWNlID0ge1xyXG4gIGVtYWlsOiAnJyxcclxufVxyXG5cclxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKTogVXNlckluaXRpYWxTdGF0ZUludGVyZmFjZSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBIWURSQVRFOiB7XHJcbiAgICAgIHJldHVybiB7Li4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkfVxyXG4gICAgfVxyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==