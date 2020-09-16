webpackHotUpdate_N_E("pages/project/[slug]",{

/***/ "./components/Slider/Slider.js":
/*!*************************************!*\
  !*** ./components/Slider/Slider.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _jsxFileName = \"/Users/mihavidakovic/Desktop/Work/Personal/vidakovic-next/components/Slider/Slider.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nfunction Slider(props) {\n  _s();\n\n  var _settings,\n      _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      images = _useState[0],\n      setImages = _useState[1];\n\n  console.log(props.images);\n  var settings = (_settings = {\n    dots: false,\n    infinite: true,\n    speed: 500,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    fade: true,\n    lazyLoad: false,\n    autoplay: true\n  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_settings, \"speed\", 500), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_settings, \"autoplaySpeed\", 3000), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_settings, \"cssEase\", \"ease-in-out\"), _settings);\n\n  var slider = __jsx(react_slick__WEBPACK_IMPORTED_MODULE_5___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    className: \"content-slider\"\n  }, settings, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 3\n    }\n  }), props.images.map(function (image, key) {\n    return __jsx(\"div\", {\n      className: \"slide-block\",\n      key: key,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 6\n      }\n    }, __jsx(\"div\", {\n      className: \"slide-block__content\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 7\n      }\n    }, image.descriptiom != \"\" ? __jsx(\"div\", {\n      \"class\": \"content__description\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 8\n      }\n    }, __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }\n    }, image.description)) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null), __jsx(\"img\", {\n      src: image.image,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 8\n      }\n    })));\n  }));\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, slider);\n}\n\n_s(Slider, \"wjpnIn6UVSNnNnc5n/JyvNQDGaQ=\");\n\n_c = Slider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\n\nvar _c;\n\n$RefreshReg$(_c, \"Slider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TbGlkZXIvU2xpZGVyLmpzPzRkOWUiXSwibmFtZXMiOlsiU2xpZGVyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImltYWdlcyIsInNldEltYWdlcyIsImNvbnNvbGUiLCJsb2ciLCJzZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJmYWRlIiwibGF6eUxvYWQiLCJhdXRvcGxheSIsInNsaWRlciIsIm1hcCIsImltYWdlIiwia2V5IiwiZGVzY3JpcHRpb20iLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQUE7O0FBQUE7QUFBQTs7QUFBQSxrQkFDTUMsc0RBQVEsRUFEZDtBQUFBLE1BQ2ZDLE1BRGU7QUFBQSxNQUNQQyxTQURPOztBQUV0QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlMLEtBQUssQ0FBQ0UsTUFBbEI7QUFFQSxNQUFNSSxRQUFRO0FBQ2JDLFFBQUksRUFBRSxLQURPO0FBRWJDLFlBQVEsRUFBRSxJQUZHO0FBR2JDLFNBQUssRUFBRSxHQUhNO0FBSWJDLGdCQUFZLEVBQUUsQ0FKRDtBQUtiQyxrQkFBYyxFQUFFLENBTEg7QUFNYkMsUUFBSSxFQUFFLElBTk87QUFPYkMsWUFBUSxFQUFFLEtBUEc7QUFRYkMsWUFBUSxFQUFFO0FBUkcsbUhBU04sR0FUTSx5SEFVRSxJQVZGLG1IQVdKLGFBWEksYUFBZDs7QUFjQSxNQUFNQyxNQUFNLEdBQ1gsTUFBQyxrREFBRDtBQUFhLGFBQVMsRUFBQztBQUF2QixLQUE0Q1QsUUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNFTixLQUFLLENBQUNFLE1BQU4sQ0FBYWMsR0FBYixDQUFpQixVQUFDQyxLQUFELEVBQVFDLEdBQVIsRUFBZ0I7QUFDakMsV0FDQztBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQTZCLFNBQUcsRUFBRUEsR0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDO0FBQUssZUFBUyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRUQsS0FBSyxDQUFDRSxXQUFOLElBQXFCLEVBQXJCLEdBQ0Q7QUFBSyxlQUFNLHNCQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU9GLEtBQUssQ0FBQ0csV0FBYixDQURELENBREMsR0FJSSxrRUFMTixFQU1DO0FBQUssU0FBRyxFQUFFSCxLQUFLLENBQUNBLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFORCxDQURELENBREQ7QUFZQSxHQWJBLENBREYsQ0FERDs7QUFvQkEsU0FDQyxtRUFDRUYsTUFERixDQUREO0FBTUE7O0dBNUNRaEIsTTs7S0FBQUEsTTtBQThDTUEscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NsaWRlci9TbGlkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBTbGlkZXJTbGljayBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcblxuZnVuY3Rpb24gU2xpZGVyKHByb3BzKSB7XG5cdGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZSgpO1xuXHRjb25zb2xlLmxvZyhwcm9wcy5pbWFnZXMpXG5cblx0Y29uc3Qgc2V0dGluZ3MgPSB7XG5cdFx0ZG90czogZmFsc2UsXG5cdFx0aW5maW5pdGU6IHRydWUsXG5cdFx0c3BlZWQ6IDUwMCxcblx0XHRzbGlkZXNUb1Nob3c6IDEsXG5cdFx0c2xpZGVzVG9TY3JvbGw6IDEsXG5cdFx0ZmFkZTogdHJ1ZSxcblx0XHRsYXp5TG9hZDogZmFsc2UsXG5cdFx0YXV0b3BsYXk6IHRydWUsXG5cdFx0c3BlZWQ6IDUwMCxcblx0XHRhdXRvcGxheVNwZWVkOiAzMDAwLFxuXHRcdGNzc0Vhc2U6IFwiZWFzZS1pbi1vdXRcIlxuXHR9O1xuXG5cdGNvbnN0IHNsaWRlciA9IChcblx0XHQ8U2xpZGVyU2xpY2sgY2xhc3NOYW1lPVwiY29udGVudC1zbGlkZXJcIiB7Li4uc2V0dGluZ3N9PlxuXHRcdFx0e3Byb3BzLmltYWdlcy5tYXAoKGltYWdlLCBrZXkpID0+IHtcblx0XHRcdFx0cmV0dXJuKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtYmxvY2tcIiBrZXk9e2tleX0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWJsb2NrX19jb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdHtpbWFnZS5kZXNjcmlwdGlvbSAhPSBcIlwiID8gKFxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGVudF9fZGVzY3JpcHRpb25cIj5cblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57aW1hZ2UuZGVzY3JpcHRpb259PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0KSA6ICg8PjwvPil9XG5cdFx0XHRcdFx0XHRcdDxpbWcgc3JjPXtpbWFnZS5pbWFnZX0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpXG5cdFx0XHR9KVxuXHRcdFx0fVxuXHRcdDwvU2xpZGVyU2xpY2s+XG5cdCk7XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0e3NsaWRlcn1cblx0XHQ8Lz5cblx0KVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Slider/Slider.js\n");

/***/ })

})