webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Projects/Projects.js":
/*!*****************************************!*\
  !*** ./components/Projects/Projects.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Projects; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useOnScreen */ \"./hooks/useOnScreen.js\");\n/* harmony import */ var _Project_Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Project/Project */ \"./components/Project/Project.js\");\nvar _jsxFileName = \"/Users/mihavidakovic/Desktop/Work/Personal/vidakovic-next/components/Projects/Projects.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Projects() {\n  _s();\n\n  var _this = this;\n\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  var onScreen = Object(_hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ref, '-100px');\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      data = _useState[0],\n      setData = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setData([{\n      \"name\": \"NyonSport\",\n      \"image\": \"/projects/nsg.jpg\",\n      \"type\": \"Corporate identity & website design\",\n      \"tags\": [\"logo\", \"web design\", \"buissines cards\"]\n    }, {\n      \"name\": \"covid19.si\",\n      \"image\": \"/projects/covid19.jpg\",\n      \"type\": \"Brand identity, website design & full-stack development\",\n      \"tags\": [\"logo\", \"web design\", \"buissines cards\"]\n    }, {\n      \"name\": \"Dominvrt.si\",\n      \"image\": \"/projects/dominvrt.jpg\",\n      \"type\": \"Brand identity, website design & front-end development\",\n      \"tags\": [\"logo\", \"web design\", \"buissines cards\"]\n    }, {\n      \"name\": \"Bibaleze.si\",\n      \"image\": \"/projects/bibaleze.jpg\",\n      \"type\": \"Brand identity, website design & front-end development\",\n      \"tags\": [\"logo\", \"web design\", \"buissines cards\"]\n    }]);\n  }, [setData]);\n\n  if (data) {\n    return __jsx(\"div\", {\n      className: onScreen ? \"projects fadeIn\" : \"projects\",\n      ref: ref,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 7\n      }\n    }, data.map(function (project, key) {\n      return __jsx(_Project_Project__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        data: project,\n        key: key,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 19\n        }\n      });\n    }));\n  } else {\n    return __jsx(\"div\", {\n      className: onScreen ? \"projects fadeIn\" : \"projects\",\n      ref: ref,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 7\n      }\n    }, __jsx(\"p\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }\n    }, \"loading\"));\n  }\n}\n\n_s(Projects, \"GbmlcWBRlfli7kL9XtcBwvmqU+s=\", false, function () {\n  return [_hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\n});\n\n_c = Projects;\n\nvar _c;\n\n$RefreshReg$(_c, \"Projects\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0cy9Qcm9qZWN0cy5qcz8yYzExIl0sIm5hbWVzIjpbIlByb2plY3RzIiwicmVmIiwidXNlUmVmIiwib25TY3JlZW4iLCJ1c2VPblNjcmVlbiIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJ1c2VFZmZlY3QiLCJtYXAiLCJwcm9qZWN0Iiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFDakMsTUFBTUMsR0FBRyxHQUFHQyxvREFBTSxFQUFsQjtBQUNBLE1BQU1DLFFBQVEsR0FBR0Msa0VBQVcsQ0FBQ0gsR0FBRCxFQUFNLFFBQU4sQ0FBNUI7O0FBRmlDLGtCQUdUSSxzREFBUSxFQUhDO0FBQUEsTUFHMUJDLElBSDBCO0FBQUEsTUFHcEJDLE9BSG9COztBQUtqQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2RELFdBQU8sQ0FBQyxDQUNGO0FBQ0UsY0FBUSxXQURWO0FBRUUsZUFBUyxtQkFGWDtBQUdFLGNBQVEscUNBSFY7QUFJRSxjQUFRLENBQUMsTUFBRCxFQUFTLFlBQVQsRUFBdUIsaUJBQXZCO0FBSlYsS0FERSxFQU9GO0FBQ0UsY0FBUSxZQURWO0FBRUUsZUFBUyx1QkFGWDtBQUdFLGNBQVEseURBSFY7QUFJRSxjQUFRLENBQUMsTUFBRCxFQUFTLFlBQVQsRUFBdUIsaUJBQXZCO0FBSlYsS0FQRSxFQWFGO0FBQ0UsY0FBUSxhQURWO0FBRUUsZUFBUyx3QkFGWDtBQUdFLGNBQVEsd0RBSFY7QUFJRSxjQUFRLENBQUMsTUFBRCxFQUFTLFlBQVQsRUFBdUIsaUJBQXZCO0FBSlYsS0FiRSxFQW1CRjtBQUNFLGNBQVEsYUFEVjtBQUVFLGVBQVMsd0JBRlg7QUFHRSxjQUFRLHdEQUhWO0FBSUUsY0FBUSxDQUFDLE1BQUQsRUFBUyxZQUFULEVBQXVCLGlCQUF2QjtBQUpWLEtBbkJFLENBQUQsQ0FBUDtBQTBCRCxHQTNCUSxFQTJCTixDQUFDQSxPQUFELENBM0JNLENBQVQ7O0FBOEJBLE1BQUlELElBQUosRUFBVTtBQUNSLFdBQ0U7QUFBSyxlQUFTLEVBQUVILFFBQVEsR0FBRyxpQkFBSCxHQUF1QixVQUEvQztBQUEyRCxTQUFHLEVBQUVGLEdBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0ssSUFBSSxDQUFDRyxHQUFMLENBQVMsVUFBQ0MsT0FBRCxFQUFVQyxHQUFWLEVBQWtCO0FBQzFCLGFBQVEsTUFBQyx3REFBRDtBQUFTLFlBQUksRUFBRUQsT0FBZjtBQUF3QixXQUFHLEVBQUVDLEdBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBUjtBQUNELEtBRkEsQ0FESCxDQURGO0FBT0QsR0FSRCxNQVFPO0FBQ0wsV0FDRTtBQUFLLGVBQVMsRUFBRVIsUUFBUSxHQUFHLGlCQUFILEdBQXVCLFVBQS9DO0FBQTJELFNBQUcsRUFBRUYsR0FBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsQ0FERjtBQU1EO0FBQ0Y7O0dBbkR1QkQsUTtVQUVMSSwwRDs7O0tBRktKLFEiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2plY3RzL1Byb2plY3RzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZU9uU2NyZWVuIGZyb20gJy4uLy4uL2hvb2tzL3VzZU9uU2NyZWVuJztcblxuaW1wb3J0IFByb2plY3QgZnJvbSAnLi4vUHJvamVjdC9Qcm9qZWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdHMoKSB7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBvblNjcmVlbiA9IHVzZU9uU2NyZWVuKHJlZiwgJy0xMDBweCcpO1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RGF0YShbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiTnlvblNwb3J0XCIsXG4gICAgICAgICAgICBcImltYWdlXCI6IFwiL3Byb2plY3RzL25zZy5qcGdcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIkNvcnBvcmF0ZSBpZGVudGl0eSAmIHdlYnNpdGUgZGVzaWduXCIsXG4gICAgICAgICAgICBcInRhZ3NcIjogW1wibG9nb1wiLCBcIndlYiBkZXNpZ25cIiwgXCJidWlzc2luZXMgY2FyZHNcIl1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImNvdmlkMTkuc2lcIixcbiAgICAgICAgICAgIFwiaW1hZ2VcIjogXCIvcHJvamVjdHMvY292aWQxOS5qcGdcIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIkJyYW5kIGlkZW50aXR5LCB3ZWJzaXRlIGRlc2lnbiAmIGZ1bGwtc3RhY2sgZGV2ZWxvcG1lbnRcIixcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXCJsb2dvXCIsIFwid2ViIGRlc2lnblwiLCBcImJ1aXNzaW5lcyBjYXJkc1wiXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiRG9taW52cnQuc2lcIixcbiAgICAgICAgICAgIFwiaW1hZ2VcIjogXCIvcHJvamVjdHMvZG9taW52cnQuanBnXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJCcmFuZCBpZGVudGl0eSwgd2Vic2l0ZSBkZXNpZ24gJiBmcm9udC1lbmQgZGV2ZWxvcG1lbnRcIixcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXCJsb2dvXCIsIFwid2ViIGRlc2lnblwiLCBcImJ1aXNzaW5lcyBjYXJkc1wiXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJuYW1lXCI6IFwiQmliYWxlemUuc2lcIixcbiAgICAgICAgICAgIFwiaW1hZ2VcIjogXCIvcHJvamVjdHMvYmliYWxlemUuanBnXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJCcmFuZCBpZGVudGl0eSwgd2Vic2l0ZSBkZXNpZ24gJiBmcm9udC1lbmQgZGV2ZWxvcG1lbnRcIixcbiAgICAgICAgICAgIFwidGFnc1wiOiBbXCJsb2dvXCIsIFwid2ViIGRlc2lnblwiLCBcImJ1aXNzaW5lcyBjYXJkc1wiXVxuICAgICAgICAgIH0sXG4gICAgICAgIF0pXG4gIH0sIFtzZXREYXRhXSlcblxuXG4gIGlmIChkYXRhKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtvblNjcmVlbiA/IFwicHJvamVjdHMgZmFkZUluXCIgOiBcInByb2plY3RzXCJ9IHJlZj17cmVmfT5cbiAgICAgICAge2RhdGEubWFwKChwcm9qZWN0LCBrZXkpID0+IHtcbiAgICAgICAgICByZXR1cm4gKDxQcm9qZWN0IGRhdGE9e3Byb2plY3R9IGtleT17a2V5fSAvPilcbiAgICAgICAgfSkgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17b25TY3JlZW4gPyBcInByb2plY3RzIGZhZGVJblwiIDogXCJwcm9qZWN0c1wifSByZWY9e3JlZn0+XG4gICAgICAgIDxwPmxvYWRpbmc8L3A+XG4gICAgICA8L2Rpdj5cblxuICAgIClcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Projects/Projects.js\n");

/***/ })

})