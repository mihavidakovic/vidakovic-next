webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Projects/Projects.js":
/*!*****************************************!*\
  !*** ./components/Projects/Projects.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Projects; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useOnScreen */ \"./hooks/useOnScreen.js\");\n/* harmony import */ var _Project_ProjectBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Project/ProjectBox */ \"./components/Project/ProjectBox.js\");\nvar _jsxFileName = \"/Users/mihavidakovic/Desktop/Work/Personal/vidakovic-next/components/Projects/Projects.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Projects() {\n  _s();\n\n  var _this = this;\n\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  var onScreen = Object(_hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ref, '-100px');\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      data = _useState[0],\n      setData = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    fetch(\"/projects.json\").then(function (response) {\n      if (!response.ok) {\n        throw response;\n      }\n\n      return response.json(); //we only get here if there is no error\n    }).then(function (json) {\n      setData(json);\n    })[\"catch\"](function (err) {\n      console.log(err);\n    });\n  }, [setData]);\n\n  if (data) {\n    return __jsx(\"div\", {\n      className: onScreen ? \"projects fadeIn\" : \"projects\",\n      ref: ref,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 4\n      }\n    }, data.map(function (project, i) {\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Project_ProjectBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        data: project,\n        key: i,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 9\n        }\n      }));\n    }));\n  } else {\n    return __jsx(\"div\", {\n      className: onScreen ? \"projects fadeIn\" : \"projects\",\n      ref: ref,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 4\n      }\n    }, __jsx(\"p\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 5\n      }\n    }, \"loading\"));\n  }\n}\n\n_s(Projects, \"GbmlcWBRlfli7kL9XtcBwvmqU+s=\", false, function () {\n  return [_hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\n});\n\n_c = Projects;\n\nvar _c;\n\n$RefreshReg$(_c, \"Projects\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0cy5qcz8yYzExIl0sIm5hbWVzIjpbIlByb2plY3RzIiwicmVmIiwidXNlUmVmIiwib25TY3JlZW4iLCJ1c2VPblNjcmVlbiIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJwcm9qZWN0IiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFZSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBQ2xDLE1BQU1DLEdBQUcsR0FBR0Msb0RBQU0sRUFBbEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLGtFQUFXLENBQUNILEdBQUQsRUFBTSxRQUFOLENBQTVCOztBQUZrQyxrQkFHVkksc0RBQVEsRUFIRTtBQUFBLE1BRzNCQyxJQUgyQjtBQUFBLE1BR3JCQyxPQUhxQjs7QUFLbENDLHlEQUFTLENBQUMsWUFBTTtBQUNmQyxTQUFLLENBQUMsZ0JBQUQsQ0FBTCxDQUNFQyxJQURGLENBQ1EsVUFBQUMsUUFBUSxFQUFJO0FBQ2xCLFVBQUksQ0FBQ0EsUUFBUSxDQUFDQyxFQUFkLEVBQWtCO0FBQUUsY0FBTUQsUUFBTjtBQUFnQjs7QUFDcEMsYUFBT0EsUUFBUSxDQUFDRSxJQUFULEVBQVAsQ0FGa0IsQ0FFTTtBQUN4QixLQUpGLEVBS0VILElBTEYsQ0FLUSxVQUFBRyxJQUFJLEVBQUk7QUFDZE4sYUFBTyxDQUFDTSxJQUFELENBQVA7QUFDQSxLQVBGLFdBUVMsVUFBQUMsR0FBRyxFQUFJO0FBQ2RDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0EsS0FWRjtBQVdBLEdBWlEsRUFZTixDQUFDUCxPQUFELENBWk0sQ0FBVDs7QUFlQSxNQUFJRCxJQUFKLEVBQVU7QUFDVCxXQUNDO0FBQUssZUFBUyxFQUFFSCxRQUFRLEdBQUcsaUJBQUgsR0FBdUIsVUFBL0M7QUFBMkQsU0FBRyxFQUFFRixHQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0VLLElBQUksQ0FBQ1csR0FBTCxDQUFTLFVBQUNDLE9BQUQsRUFBVUMsQ0FBVixFQUFnQjtBQUN6QixhQUNFLG1FQUNDLE1BQUMsMkRBQUQ7QUFBWSxZQUFJLEVBQUVELE9BQWxCO0FBQTJCLFdBQUcsRUFBRUMsQ0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURELENBREY7QUFLQSxLQU5BLENBREYsQ0FERDtBQVdBLEdBWkQsTUFZTztBQUNOLFdBQ0M7QUFBSyxlQUFTLEVBQUVoQixRQUFRLEdBQUcsaUJBQUgsR0FBdUIsVUFBL0M7QUFBMkQsU0FBRyxFQUFFRixHQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxDQUREO0FBTUE7QUFDRDs7R0F4Q3VCRCxRO1VBRU5JLDBEOzs7S0FGTUosUSIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlT25TY3JlZW4gZnJvbSAnLi4vLi4vaG9va3MvdXNlT25TY3JlZW4nO1xuXG5pbXBvcnQgUHJvamVjdEJveCBmcm9tICcuLi9Qcm9qZWN0L1Byb2plY3RCb3gnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0cygpIHtcblx0Y29uc3QgcmVmID0gdXNlUmVmKCk7XG5cdGNvbnN0IG9uU2NyZWVuID0gdXNlT25TY3JlZW4ocmVmLCAnLTEwMHB4Jyk7XG5cdGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKCk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRmZXRjaChcIi9wcm9qZWN0cy5qc29uXCIpXG5cdFx0XHQudGhlbiggcmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRpZiAoIXJlc3BvbnNlLm9rKSB7IHRocm93IHJlc3BvbnNlIH1cblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKSAgLy93ZSBvbmx5IGdldCBoZXJlIGlmIHRoZXJlIGlzIG5vIGVycm9yXG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oIGpzb24gPT4ge1xuXHRcdFx0XHRzZXREYXRhKGpzb24pXG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKCBlcnIgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnIpXG5cdFx0XHR9KTtcblx0fSwgW3NldERhdGFdKVxuXG5cblx0aWYgKGRhdGEpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e29uU2NyZWVuID8gXCJwcm9qZWN0cyBmYWRlSW5cIiA6IFwicHJvamVjdHNcIn0gcmVmPXtyZWZ9PlxuXHRcdFx0XHR7ZGF0YS5tYXAoKHByb2plY3QsIGkpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHRcdDxQcm9qZWN0Qm94IGRhdGE9e3Byb2plY3R9IGtleT17aX0gLz5cblx0XHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdH0pIH1cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e29uU2NyZWVuID8gXCJwcm9qZWN0cyBmYWRlSW5cIiA6IFwicHJvamVjdHNcIn0gcmVmPXtyZWZ9PlxuXHRcdFx0XHQ8cD5sb2FkaW5nPC9wPlxuXHRcdFx0PC9kaXY+XG5cblx0XHQpXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Projects/Projects.js\n");

/***/ })

})