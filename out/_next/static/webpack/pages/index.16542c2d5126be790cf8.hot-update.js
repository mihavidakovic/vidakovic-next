webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Projects/Projects.js":
/*!*****************************************!*\
  !*** ./components/Projects/Projects.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Projects; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useOnScreen */ \"./hooks/useOnScreen.js\");\n/* harmony import */ var _Project_Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Project/Project */ \"./components/Project/Project.js\");\nvar _jsxFileName = \"/Users/mihavidakovic/Desktop/Work/Personal/vidakovic-next/components/Projects/Projects.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Projects() {\n  _s();\n\n  var _this = this;\n\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  var onScreen = Object(_hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ref, '-100px');\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      data = _useState[0],\n      setData = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setData([{\n      \"name\": \"NyonSport\",\n      \"type\": \"Corporate identity & website design\",\n      \"tags\": [\"logo\", \"web design\", \"buissines cards\"]\n    }]);\n  }, [data]);\n\n  if (data) {\n    return __jsx(\"div\", {\n      className: onScreen ? \"projects fadeIn\" : \"projects\",\n      ref: ref,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 7\n      }\n    }, data.map(function (project, key) {\n      return __jsx(_Project_Project__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        data: project,\n        key: key,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 19\n        }\n      });\n    }));\n  } else {\n    return __jsx(\"div\", {\n      className: onScreen ? \"projects fadeIn\" : \"projects\",\n      ref: ref,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 7\n      }\n    }, __jsx(\"p\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }\n    }, \"loading\"));\n  }\n}\n\n_s(Projects, \"GbmlcWBRlfli7kL9XtcBwvmqU+s=\", false, function () {\n  return [_hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\n});\n\n_c = Projects;\n\nvar _c;\n\n$RefreshReg$(_c, \"Projects\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0cy5qcz8yYzExIl0sIm5hbWVzIjpbIlByb2plY3RzIiwicmVmIiwidXNlUmVmIiwib25TY3JlZW4iLCJ1c2VPblNjcmVlbiIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJ1c2VFZmZlY3QiLCJtYXAiLCJwcm9qZWN0Iiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFDakMsTUFBTUMsR0FBRyxHQUFHQyxvREFBTSxFQUFsQjtBQUNBLE1BQU1DLFFBQVEsR0FBR0Msa0VBQVcsQ0FBQ0gsR0FBRCxFQUFNLFFBQU4sQ0FBNUI7O0FBRmlDLGtCQUdUSSxzREFBUSxFQUhDO0FBQUEsTUFHMUJDLElBSDBCO0FBQUEsTUFHcEJDLE9BSG9COztBQUtqQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2RELFdBQU8sQ0FBQyxDQUNGO0FBQ0UsY0FBUSxXQURWO0FBRUUsY0FBUSxxQ0FGVjtBQUdFLGNBQVEsQ0FBQyxNQUFELEVBQVMsWUFBVCxFQUF1QixpQkFBdkI7QUFIVixLQURFLENBQUQsQ0FBUDtBQU9ELEdBUlEsRUFRTixDQUFDRCxJQUFELENBUk0sQ0FBVDs7QUFXQSxNQUFJQSxJQUFKLEVBQVU7QUFDUixXQUNFO0FBQUssZUFBUyxFQUFFSCxRQUFRLEdBQUcsaUJBQUgsR0FBdUIsVUFBL0M7QUFBMkQsU0FBRyxFQUFFRixHQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dLLElBQUksQ0FBQ0csR0FBTCxDQUFTLFVBQUNDLE9BQUQsRUFBVUMsR0FBVixFQUFrQjtBQUMxQixhQUFRLE1BQUMsd0RBQUQ7QUFBUyxZQUFJLEVBQUVELE9BQWY7QUFBd0IsV0FBRyxFQUFFQyxHQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQVI7QUFDRCxLQUZBLENBREgsQ0FERjtBQU9ELEdBUkQsTUFRTztBQUNMLFdBQ0U7QUFBSyxlQUFTLEVBQUVSLFFBQVEsR0FBRyxpQkFBSCxHQUF1QixVQUEvQztBQUEyRCxTQUFHLEVBQUVGLEdBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBREY7QUFNRDtBQUNGOztHQWhDdUJELFE7VUFFTEksMEQ7OztLQUZLSixRIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VPblNjcmVlbiBmcm9tICcuLi8uLi9ob29rcy91c2VPblNjcmVlbic7XG5cbmltcG9ydCBQcm9qZWN0IGZyb20gJy4uL1Byb2plY3QvUHJvamVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzKCkge1xuICBjb25zdCByZWYgPSB1c2VSZWYoKTtcbiAgY29uc3Qgb25TY3JlZW4gPSB1c2VPblNjcmVlbihyZWYsICctMTAwcHgnKTtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldERhdGEoW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIk55b25TcG9ydFwiLFxuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiQ29ycG9yYXRlIGlkZW50aXR5ICYgd2Vic2l0ZSBkZXNpZ25cIixcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXCJsb2dvXCIsIFwid2ViIGRlc2lnblwiLCBcImJ1aXNzaW5lcyBjYXJkc1wiXVxuICAgICAgICAgIH1cbiAgICAgICAgXSlcbiAgfSwgW2RhdGFdKVxuXG5cbiAgaWYgKGRhdGEpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e29uU2NyZWVuID8gXCJwcm9qZWN0cyBmYWRlSW5cIiA6IFwicHJvamVjdHNcIn0gcmVmPXtyZWZ9PlxuICAgICAgICB7ZGF0YS5tYXAoKHByb2plY3QsIGtleSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoPFByb2plY3QgZGF0YT17cHJvamVjdH0ga2V5PXtrZXl9IC8+KVxuICAgICAgICB9KSB9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtvblNjcmVlbiA/IFwicHJvamVjdHMgZmFkZUluXCIgOiBcInByb2plY3RzXCJ9IHJlZj17cmVmfT5cbiAgICAgICAgPHA+bG9hZGluZzwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Projects/Projects.js\n");

/***/ })

})