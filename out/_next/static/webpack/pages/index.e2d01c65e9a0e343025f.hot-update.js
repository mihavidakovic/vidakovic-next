webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Projects/Projects.js":
/*!*****************************************!*\
  !*** ./components/Projects/Projects.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Projects; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useOnScreen */ \"./hooks/useOnScreen.js\");\n/* harmony import */ var _Project_Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Project/Project */ \"./components/Project/Project.js\");\nvar _jsxFileName = \"/Users/mihavidakovic/Desktop/Work/Personal/vidakovic-next/components/Projects/Projects.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Projects() {\n  _s();\n\n  var _this = this;\n\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  var onScreen = Object(_hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ref, '-100px');\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      data = _useState[0],\n      setData = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setData([{\n      \"name\": \"NyonSport\",\n      \"image\": \"/projects/nsg.jpg\",\n      \"type\": \"Corporate identity & website design\",\n      \"tags\": [\"logo\", \"web design\", \"buissines cards\"],\n      \"temp\": false\n    }, {\n      \"name\": \"covid19.si\",\n      \"image\": \"/projects/covid19.jpg\",\n      \"type\": \"Brand identity, website design & full-stack development\",\n      \"tags\": [\"logo\", \"web design\", \"buissines cards\"],\n      \"temp\": false\n    }, {\n      \"name\": \"Dominvrt.si\",\n      \"image\": \"/projects/dominvrt.jpg\",\n      \"type\": \"Brand identity, website design & front-end development\",\n      \"tags\": [\"logo\", \"web design\", \"buissines cards\"],\n      \"temp\": false\n    }, {\n      \"name\": \"Bibaleze.si\",\n      \"image\": \"/projects/bibaleze.jpg\",\n      \"type\": \"Brand identity, website design & front-end developmentBrand identity, website design & front-end developmentBrand identity, website design & front-end development\",\n      \"tags\": [\"logo\", \"web design\", \"buissines cards\"],\n      \"temp\": false\n    }, {\n      \"name\": \"\",\n      \"image\": \"\",\n      \"type\": \"\",\n      \"tags\": [],\n      \"temp\": true\n    }, {\n      \"name\": \"\",\n      \"image\": \"\",\n      \"type\": \"\",\n      \"tags\": [],\n      \"temp\": true\n    }, {\n      \"name\": \"\",\n      \"image\": \"\",\n      \"type\": \"\",\n      \"tags\": [],\n      \"temp\": true\n    }]);\n  }, [setData]);\n\n  if (data) {\n    return __jsx(\"div\", {\n      className: onScreen ? \"projects fadeIn\" : \"projects\",\n      ref: ref,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 4\n      }\n    }, data.map(function (project, key) {\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Project_Project__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        data: project,\n        key: key,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 9\n        }\n      }));\n    }));\n  } else {\n    return __jsx(\"div\", {\n      className: onScreen ? \"projects fadeIn\" : \"projects\",\n      ref: ref,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 4\n      }\n    }, __jsx(\"p\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 5\n      }\n    }, \"loading\"));\n  }\n}\n\n_s(Projects, \"GbmlcWBRlfli7kL9XtcBwvmqU+s=\", false, function () {\n  return [_hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\n});\n\n_c = Projects;\n\nvar _c;\n\n$RefreshReg$(_c, \"Projects\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0cy5qcz8yYzExIl0sIm5hbWVzIjpbIlByb2plY3RzIiwicmVmIiwidXNlUmVmIiwib25TY3JlZW4iLCJ1c2VPblNjcmVlbiIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJ1c2VFZmZlY3QiLCJtYXAiLCJwcm9qZWN0Iiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFDbEMsTUFBTUMsR0FBRyxHQUFHQyxvREFBTSxFQUFsQjtBQUNBLE1BQU1DLFFBQVEsR0FBR0Msa0VBQVcsQ0FBQ0gsR0FBRCxFQUFNLFFBQU4sQ0FBNUI7O0FBRmtDLGtCQUdWSSxzREFBUSxFQUhFO0FBQUEsTUFHM0JDLElBSDJCO0FBQUEsTUFHckJDLE9BSHFCOztBQUtsQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2ZELFdBQU8sQ0FBQyxDQUNMO0FBQ0MsY0FBUSxXQURUO0FBRUMsZUFBUyxtQkFGVjtBQUdDLGNBQVEscUNBSFQ7QUFJQyxjQUFRLENBQUMsTUFBRCxFQUFTLFlBQVQsRUFBdUIsaUJBQXZCLENBSlQ7QUFLQyxjQUFRO0FBTFQsS0FESyxFQVFMO0FBQ0MsY0FBUSxZQURUO0FBRUMsZUFBUyx1QkFGVjtBQUdDLGNBQVEseURBSFQ7QUFJQyxjQUFRLENBQUMsTUFBRCxFQUFTLFlBQVQsRUFBdUIsaUJBQXZCLENBSlQ7QUFLQyxjQUFRO0FBTFQsS0FSSyxFQWVMO0FBQ0MsY0FBUSxhQURUO0FBRUMsZUFBUyx3QkFGVjtBQUdDLGNBQVEsd0RBSFQ7QUFJQyxjQUFRLENBQUMsTUFBRCxFQUFTLFlBQVQsRUFBdUIsaUJBQXZCLENBSlQ7QUFLQyxjQUFRO0FBTFQsS0FmSyxFQXNCTDtBQUNDLGNBQVEsYUFEVDtBQUVDLGVBQVMsd0JBRlY7QUFHQyxjQUFRLG9LQUhUO0FBSUMsY0FBUSxDQUFDLE1BQUQsRUFBUyxZQUFULEVBQXVCLGlCQUF2QixDQUpUO0FBS0MsY0FBUTtBQUxULEtBdEJLLEVBNkJMO0FBQ0MsY0FBUSxFQURUO0FBRUMsZUFBUyxFQUZWO0FBR0MsY0FBUSxFQUhUO0FBSUMsY0FBUSxFQUpUO0FBS0MsY0FBUTtBQUxULEtBN0JLLEVBb0NMO0FBQ0MsY0FBUSxFQURUO0FBRUMsZUFBUyxFQUZWO0FBR0MsY0FBUSxFQUhUO0FBSUMsY0FBUSxFQUpUO0FBS0MsY0FBUTtBQUxULEtBcENLLEVBMkNMO0FBQ0MsY0FBUSxFQURUO0FBRUMsZUFBUyxFQUZWO0FBR0MsY0FBUSxFQUhUO0FBSUMsY0FBUSxFQUpUO0FBS0MsY0FBUTtBQUxULEtBM0NLLENBQUQsQ0FBUDtBQW1EQSxHQXBEUSxFQW9ETixDQUFDQSxPQUFELENBcERNLENBQVQ7O0FBdURBLE1BQUlELElBQUosRUFBVTtBQUNULFdBQ0M7QUFBSyxlQUFTLEVBQUVILFFBQVEsR0FBRyxpQkFBSCxHQUF1QixVQUEvQztBQUEyRCxTQUFHLEVBQUVGLEdBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRUssSUFBSSxDQUFDRyxHQUFMLENBQVMsVUFBQ0MsT0FBRCxFQUFVQyxHQUFWLEVBQWtCO0FBQzNCLGFBQ0UsbUVBQ0MsTUFBQyx3REFBRDtBQUFTLFlBQUksRUFBRUQsT0FBZjtBQUF3QixXQUFHLEVBQUVDLEdBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERCxDQURGO0FBS0EsS0FOQSxDQURGLENBREQ7QUFXQSxHQVpELE1BWU87QUFDTixXQUNDO0FBQUssZUFBUyxFQUFFUixRQUFRLEdBQUcsaUJBQUgsR0FBdUIsVUFBL0M7QUFBMkQsU0FBRyxFQUFFRixHQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxDQUREO0FBTUE7QUFDRDs7R0FoRnVCRCxRO1VBRU5JLDBEOzs7S0FGTUosUSIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlT25TY3JlZW4gZnJvbSAnLi4vLi4vaG9va3MvdXNlT25TY3JlZW4nO1xuXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuLi9Qcm9qZWN0L1Byb2plY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0cygpIHtcblx0Y29uc3QgcmVmID0gdXNlUmVmKCk7XG5cdGNvbnN0IG9uU2NyZWVuID0gdXNlT25TY3JlZW4ocmVmLCAnLTEwMHB4Jyk7XG5cdGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKCk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZXREYXRhKFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJOeW9uU3BvcnRcIixcblx0XHRcdFx0XHRcdFwiaW1hZ2VcIjogXCIvcHJvamVjdHMvbnNnLmpwZ1wiLFxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiQ29ycG9yYXRlIGlkZW50aXR5ICYgd2Vic2l0ZSBkZXNpZ25cIixcblx0XHRcdFx0XHRcdFwidGFnc1wiOiBbXCJsb2dvXCIsIFwid2ViIGRlc2lnblwiLCBcImJ1aXNzaW5lcyBjYXJkc1wiXSxcblx0XHRcdFx0XHRcdFwidGVtcFwiOiBmYWxzZVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiY292aWQxOS5zaVwiLFxuXHRcdFx0XHRcdFx0XCJpbWFnZVwiOiBcIi9wcm9qZWN0cy9jb3ZpZDE5LmpwZ1wiLFxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiQnJhbmQgaWRlbnRpdHksIHdlYnNpdGUgZGVzaWduICYgZnVsbC1zdGFjayBkZXZlbG9wbWVudFwiLFxuXHRcdFx0XHRcdFx0XCJ0YWdzXCI6IFtcImxvZ29cIiwgXCJ3ZWIgZGVzaWduXCIsIFwiYnVpc3NpbmVzIGNhcmRzXCJdLFxuXHRcdFx0XHRcdFx0XCJ0ZW1wXCI6IGZhbHNlXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJEb21pbnZydC5zaVwiLFxuXHRcdFx0XHRcdFx0XCJpbWFnZVwiOiBcIi9wcm9qZWN0cy9kb21pbnZydC5qcGdcIixcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcIkJyYW5kIGlkZW50aXR5LCB3ZWJzaXRlIGRlc2lnbiAmIGZyb250LWVuZCBkZXZlbG9wbWVudFwiLFxuXHRcdFx0XHRcdFx0XCJ0YWdzXCI6IFtcImxvZ29cIiwgXCJ3ZWIgZGVzaWduXCIsIFwiYnVpc3NpbmVzIGNhcmRzXCJdLFxuXHRcdFx0XHRcdFx0XCJ0ZW1wXCI6IGZhbHNlXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJCaWJhbGV6ZS5zaVwiLFxuXHRcdFx0XHRcdFx0XCJpbWFnZVwiOiBcIi9wcm9qZWN0cy9iaWJhbGV6ZS5qcGdcIixcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcIkJyYW5kIGlkZW50aXR5LCB3ZWJzaXRlIGRlc2lnbiAmIGZyb250LWVuZCBkZXZlbG9wbWVudEJyYW5kIGlkZW50aXR5LCB3ZWJzaXRlIGRlc2lnbiAmIGZyb250LWVuZCBkZXZlbG9wbWVudEJyYW5kIGlkZW50aXR5LCB3ZWJzaXRlIGRlc2lnbiAmIGZyb250LWVuZCBkZXZlbG9wbWVudFwiLFxuXHRcdFx0XHRcdFx0XCJ0YWdzXCI6IFtcImxvZ29cIiwgXCJ3ZWIgZGVzaWduXCIsIFwiYnVpc3NpbmVzIGNhcmRzXCJdLFxuXHRcdFx0XHRcdFx0XCJ0ZW1wXCI6IGZhbHNlXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcIm5hbWVcIjogXCJcIixcblx0XHRcdFx0XHRcdFwiaW1hZ2VcIjogXCJcIixcblx0XHRcdFx0XHRcdFwidHlwZVwiOiBcIlwiLFxuXHRcdFx0XHRcdFx0XCJ0YWdzXCI6IFtdLFxuXHRcdFx0XHRcdFx0XCJ0ZW1wXCI6IHRydWVcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFwibmFtZVwiOiBcIlwiLFxuXHRcdFx0XHRcdFx0XCJpbWFnZVwiOiBcIlwiLFxuXHRcdFx0XHRcdFx0XCJ0eXBlXCI6IFwiXCIsXG5cdFx0XHRcdFx0XHRcInRhZ3NcIjogW10sXG5cdFx0XHRcdFx0XHRcInRlbXBcIjogdHJ1ZVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XCJuYW1lXCI6IFwiXCIsXG5cdFx0XHRcdFx0XHRcImltYWdlXCI6IFwiXCIsXG5cdFx0XHRcdFx0XHRcInR5cGVcIjogXCJcIixcblx0XHRcdFx0XHRcdFwidGFnc1wiOiBbXSxcblx0XHRcdFx0XHRcdFwidGVtcFwiOiB0cnVlXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XSlcblx0fSwgW3NldERhdGFdKVxuXG5cblx0aWYgKGRhdGEpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e29uU2NyZWVuID8gXCJwcm9qZWN0cyBmYWRlSW5cIiA6IFwicHJvamVjdHNcIn0gcmVmPXtyZWZ9PlxuXHRcdFx0XHR7ZGF0YS5tYXAoKHByb2plY3QsIGtleSkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdFx0PFByb2plY3QgZGF0YT17cHJvamVjdH0ga2V5PXtrZXl9IC8+XG5cdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHR9KSB9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtvblNjcmVlbiA/IFwicHJvamVjdHMgZmFkZUluXCIgOiBcInByb2plY3RzXCJ9IHJlZj17cmVmfT5cblx0XHRcdFx0PHA+bG9hZGluZzwvcD5cblx0XHRcdDwvZGl2PlxuXG5cdFx0KVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Projects/Projects.js\n");

/***/ })

})