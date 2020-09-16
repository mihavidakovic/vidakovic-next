webpackHotUpdate_N_E("pages/project/[slug]",{

/***/ "./components/Slider/Slider.js":
/*!*************************************!*\
  !*** ./components/Slider/Slider.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _jsxFileName = \"/Users/mihavidakovic/Desktop/Work/Personal/vidakovic-next/components/Slider/Slider.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nfunction Slider(props) {\n  _s();\n\n  var _settings,\n      _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      images = _useState[0],\n      setImages = _useState[1];\n\n  console.log(props.images);\n  var settings = (_settings = {\n    dots: false,\n    infinite: true,\n    speed: 500,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    fade: true,\n    lazyLoad: false,\n    autoplay: true\n  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_settings, \"speed\", 500), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_settings, \"autoplaySpeed\", 3000), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_settings, \"cssEase\", \"ease-in-out\"), _settings);\n\n  var slider = __jsx(react_slick__WEBPACK_IMPORTED_MODULE_5___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    className: \"content-slider\"\n  }, settings, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 3\n    }\n  }), props.images.map(function (image, key) {\n    return __jsx(\"div\", {\n      className: \"slide-block\",\n      key: key,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 6\n      }\n    }, __jsx(\"div\", {\n      className: \"slide-block__content\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 7\n      }\n    }, image.description === \"\" ? __jsx(\"div\", {\n      \"class\": \"content__description\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 8\n      }\n    }, __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }\n    }, image.description)) : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null), __jsx(\"img\", {\n      src: image.image,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 8\n      }\n    })));\n  }));\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, slider);\n}\n\n_s(Slider, \"wjpnIn6UVSNnNnc5n/JyvNQDGaQ=\");\n\n_c = Slider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\n\nvar _c;\n\n$RefreshReg$(_c, \"Slider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TbGlkZXIvU2xpZGVyLmpzPzRkOWUiXSwibmFtZXMiOlsiU2xpZGVyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImltYWdlcyIsInNldEltYWdlcyIsImNvbnNvbGUiLCJsb2ciLCJzZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJmYWRlIiwibGF6eUxvYWQiLCJhdXRvcGxheSIsInNsaWRlciIsIm1hcCIsImltYWdlIiwia2V5IiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUFBOztBQUFBO0FBQUE7O0FBQUEsa0JBQ01DLHNEQUFRLEVBRGQ7QUFBQSxNQUNmQyxNQURlO0FBQUEsTUFDUEMsU0FETzs7QUFFdEJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxLQUFLLENBQUNFLE1BQWxCO0FBRUEsTUFBTUksUUFBUTtBQUNiQyxRQUFJLEVBQUUsS0FETztBQUViQyxZQUFRLEVBQUUsSUFGRztBQUdiQyxTQUFLLEVBQUUsR0FITTtBQUliQyxnQkFBWSxFQUFFLENBSkQ7QUFLYkMsa0JBQWMsRUFBRSxDQUxIO0FBTWJDLFFBQUksRUFBRSxJQU5PO0FBT2JDLFlBQVEsRUFBRSxLQVBHO0FBUWJDLFlBQVEsRUFBRTtBQVJHLG1IQVNOLEdBVE0seUhBVUUsSUFWRixtSEFXSixhQVhJLGFBQWQ7O0FBY0EsTUFBTUMsTUFBTSxHQUNYLE1BQUMsa0RBQUQ7QUFBYSxhQUFTLEVBQUM7QUFBdkIsS0FBNENULFFBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDRU4sS0FBSyxDQUFDRSxNQUFOLENBQWFjLEdBQWIsQ0FBaUIsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSLEVBQWdCO0FBQ2pDLFdBQ0M7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUE2QixTQUFHLEVBQUVBLEdBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQztBQUFLLGVBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0VELEtBQUssQ0FBQ0UsV0FBTixLQUFzQixFQUF0QixHQUNEO0FBQUssZUFBTSxzQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFPRixLQUFLLENBQUNFLFdBQWIsQ0FERCxDQURDLEdBSUksa0VBTE4sRUFNQztBQUFLLFNBQUcsRUFBRUYsS0FBSyxDQUFDQSxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTkQsQ0FERCxDQUREO0FBWUEsR0FiQSxDQURGLENBREQ7O0FBb0JBLFNBQ0MsbUVBQ0VGLE1BREYsQ0FERDtBQU1BOztHQTVDUWhCLE07O0tBQUFBLE07QUE4Q01BLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TbGlkZXIvU2xpZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgU2xpZGVyU2xpY2sgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5cbmZ1bmN0aW9uIFNsaWRlcihwcm9wcykge1xuXHRjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gdXNlU3RhdGUoKTtcblx0Y29uc29sZS5sb2cocHJvcHMuaW1hZ2VzKVxuXG5cdGNvbnN0IHNldHRpbmdzID0ge1xuXHRcdGRvdHM6IGZhbHNlLFxuXHRcdGluZmluaXRlOiB0cnVlLFxuXHRcdHNwZWVkOiA1MDAsXG5cdFx0c2xpZGVzVG9TaG93OiAxLFxuXHRcdHNsaWRlc1RvU2Nyb2xsOiAxLFxuXHRcdGZhZGU6IHRydWUsXG5cdFx0bGF6eUxvYWQ6IGZhbHNlLFxuXHRcdGF1dG9wbGF5OiB0cnVlLFxuXHRcdHNwZWVkOiA1MDAsXG5cdFx0YXV0b3BsYXlTcGVlZDogMzAwMCxcblx0XHRjc3NFYXNlOiBcImVhc2UtaW4tb3V0XCJcblx0fTtcblxuXHRjb25zdCBzbGlkZXIgPSAoXG5cdFx0PFNsaWRlclNsaWNrIGNsYXNzTmFtZT1cImNvbnRlbnQtc2xpZGVyXCIgey4uLnNldHRpbmdzfT5cblx0XHRcdHtwcm9wcy5pbWFnZXMubWFwKChpbWFnZSwga2V5KSA9PiB7XG5cdFx0XHRcdHJldHVybihcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWJsb2NrXCIga2V5PXtrZXl9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzbGlkZS1ibG9ja19fY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHR7aW1hZ2UuZGVzY3JpcHRpb24gPT09IFwiXCIgPyAoXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50X19kZXNjcmlwdGlvblwiPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPntpbWFnZS5kZXNjcmlwdGlvbn08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQpIDogKDw+PC8+KX1cblx0XHRcdFx0XHRcdFx0PGltZyBzcmM9e2ltYWdlLmltYWdlfSAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdClcblx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0PC9TbGlkZXJTbGljaz5cblx0KTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHR7c2xpZGVyfVxuXHRcdDwvPlxuXHQpXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Slider/Slider.js\n");

/***/ })

})