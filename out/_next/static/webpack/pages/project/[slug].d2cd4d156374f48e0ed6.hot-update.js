webpackHotUpdate_N_E("pages/project/[slug]",{

/***/ "./pages/project/[slug].js":
/*!*********************************!*\
  !*** ./pages/project/[slug].js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Project; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/mihavidakovic/Desktop/Work/Personal/vidakovic-next/pages/project/[slug].js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction Project(_ref) {\n  _s();\n\n  var router = _ref.router;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      ProjectData = _useState[0],\n      setProjectData = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    fetch(\"/projects.json\").then(function (response) {\n      if (!response.ok) {\n        throw response;\n      }\n\n      return response.json(); //we only get here if there is no error\n    }).then(function (json) {\n      console.log(router);\n      setProjectData(lodash__WEBPACK_IMPORTED_MODULE_3___default.a.filter(json, {\n        \"slug\": \"slug\"\n      }));\n    })[\"catch\"](function (err) {\n      console.log(err);\n    });\n  }, []);\n  return __jsx(\"div\", {\n    className: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 3\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 4\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, \"Ime - Vidakovic.si\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/img/favicon.ico\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }), __jsx(\"meta\", {\n    name: \"description\",\n    content: \"Web, UI/UX and Front-end developer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }), __jsx(\"meta\", {\n    name: \"keywords\",\n    content: \"HTML, CSS, JavaScript, Web Design, Miha Vidakovi\\u010D, Miha, Vidakovi\\u010D\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }), __jsx(\"meta\", {\n    name: \"author\",\n    content: \"Miha Vidakovi\\u010D\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }\n  }), __jsx(\"meta\", {\n    name: \"viewport\",\n    content: \"width=device-width, initial-scale=1.0\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }\n  }), __jsx(\"script\", {\n    async: true,\n    src: \"https://www.googletagmanager.com/gtag/js?id=UA-133841417-1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }\n  }), __jsx(\"script\", {\n    dangerouslySetInnerHTML: {\n      __html: \"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\twindow.dataLayer = window.dataLayer || [];\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tfunction gtag(){dataLayer.push(arguments);}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tgtag('js', new Date());\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tgtag('config', 'UA-133841417-1');\\n\\t\\t\\t\\t\\t\\t\\t\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }\n  })), __jsx(\"section\", {\n    className: \"page project\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 4\n    }\n  }, \"to je projekt xxx\"));\n}\n\n_s(Project, \"Sk4ZVVZqixrU1vLJOhh2n5+FyG8=\");\n\n_c = Project;\n\nvar _c;\n\n$RefreshReg$(_c, \"Project\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdC9bc2x1Z10uanM/NWMxZCJdLCJuYW1lcyI6WyJQcm9qZWN0Iiwicm91dGVyIiwidXNlU3RhdGUiLCJQcm9qZWN0RGF0YSIsInNldFByb2plY3REYXRhIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiXyIsImZpbHRlciIsImVyciIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE9BQVQsT0FBMkI7QUFBQTs7QUFBQSxNQUFUQyxNQUFTLFFBQVRBLE1BQVM7O0FBQUEsa0JBRUhDLHNEQUFRLEVBRkw7QUFBQSxNQUVsQ0MsV0FGa0M7QUFBQSxNQUVyQkMsY0FGcUI7O0FBSXpDQyx5REFBUyxDQUFDLFlBQU07QUFDZkMsU0FBSyxDQUFDLGdCQUFELENBQUwsQ0FDRUMsSUFERixDQUNRLFVBQUFDLFFBQVEsRUFBSTtBQUNsQixVQUFJLENBQUNBLFFBQVEsQ0FBQ0MsRUFBZCxFQUFrQjtBQUFFLGNBQU1ELFFBQU47QUFBZ0I7O0FBQ3BDLGFBQU9BLFFBQVEsQ0FBQ0UsSUFBVCxFQUFQLENBRmtCLENBRU07QUFDeEIsS0FKRixFQUtFSCxJQUxGLENBS1EsVUFBQUcsSUFBSSxFQUFJO0FBQ2RDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZWCxNQUFaO0FBQ0FHLG9CQUFjLENBQUNTLDZDQUFDLENBQUNDLE1BQUYsQ0FBU0osSUFBVCxFQUFlO0FBQUMsZ0JBQVE7QUFBVCxPQUFmLENBQUQsQ0FBZDtBQUNBLEtBUkYsV0FTUyxVQUFBSyxHQUFHLEVBQUk7QUFDZEosYUFBTyxDQUFDQyxHQUFSLENBQVlHLEdBQVo7QUFDQSxLQVhGO0FBWUEsR0FiUSxFQWFOLEVBYk0sQ0FBVDtBQWdCQSxTQUNDO0FBQUssYUFBUyxFQUFDLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREQsRUFFQztBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBQyxrQkFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZELEVBR0M7QUFBTSxRQUFJLEVBQUMsYUFBWDtBQUF5QixXQUFPLEVBQUMsb0NBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRCxFQUlDO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBc0IsV0FBTyxFQUFDLDhFQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkQsRUFLQztBQUFNLFFBQUksRUFBQyxRQUFYO0FBQW9CLFdBQU8sRUFBQyxxQkFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxELEVBTUM7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFzQixXQUFPLEVBQUMsdUNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORCxFQU9DO0FBQ0MsU0FBSyxNQUROO0FBRUMsT0FBRyxFQUFDLDREQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRCxFQVlDO0FBQ0MsMkJBQXVCLEVBQUU7QUFDeEJDLFlBQU07QUFEa0IsS0FEMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpELENBREQsRUF3QkM7QUFBUyxhQUFTLEVBQUMsY0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkF4QkQsQ0FERDtBQThCQTs7R0FsRHVCaEIsTzs7S0FBQUEsTyIsImZpbGUiOiIuL3BhZ2VzL3Byb2plY3QvW3NsdWddLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdCh7cm91dGVyfSkge1xuXG5cdGNvbnN0IFtQcm9qZWN0RGF0YSwgc2V0UHJvamVjdERhdGFdID0gdXNlU3RhdGUoKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGZldGNoKFwiL3Byb2plY3RzLmpzb25cIilcblx0XHRcdC50aGVuKCByZXNwb25zZSA9PiB7XG5cdFx0XHRcdGlmICghcmVzcG9uc2Uub2spIHsgdGhyb3cgcmVzcG9uc2UgfVxuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpICAvL3dlIG9ubHkgZ2V0IGhlcmUgaWYgdGhlcmUgaXMgbm8gZXJyb3Jcblx0XHRcdH0pXG5cdFx0XHQudGhlbigganNvbiA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHJvdXRlcilcblx0XHRcdFx0c2V0UHJvamVjdERhdGEoXy5maWx0ZXIoanNvbiwge1wic2x1Z1wiOiBcInNsdWdcIn0pKVxuXHRcdFx0fSlcblx0XHRcdC5jYXRjaCggZXJyID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coZXJyKVxuXHRcdFx0fSk7XG5cdH0sIFtdKVxuXG5cdFxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiXCI+XG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0PHRpdGxlPkltZSAtIFZpZGFrb3ZpYy5zaTwvdGl0bGU+XG5cdFx0XHRcdDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2ltZy9mYXZpY29uLmljb1wiIC8+XG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJXZWIsIFVJL1VYIGFuZCBGcm9udC1lbmQgZGV2ZWxvcGVyXCIgLz5cblx0XHRcdFx0PG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cIkhUTUwsIENTUywgSmF2YVNjcmlwdCwgV2ViIERlc2lnbiwgTWloYSBWaWRha292acSNLCBNaWhhLCBWaWRha292acSNXCIgLz5cblx0XHRcdFx0PG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJNaWhhIFZpZGFrb3ZpxI1cIiAvPlxuXHRcdFx0XHQ8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG5cdFx0XHRcdDxzY3JpcHRcblx0XHRcdFx0XHRhc3luY1xuXHRcdFx0XHRcdHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9VUEtMTMzODQxNDE3LTFcIlxuXHRcdFx0XHQvPlxuXG5cdFx0XHRcdDxzY3JpcHRcblx0XHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuXHRcdFx0XHRcdFx0X19odG1sOiBgXG5cdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcblx0XHRcdFx0XHRcdFx0XHRcdGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cblx0XHRcdFx0XHRcdFx0XHRcdGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRndGFnKCdjb25maWcnLCAnVUEtMTMzODQxNDE3LTEnKTtcblx0XHRcdFx0XHRcdFx0YCxcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9IZWFkPlxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwicGFnZSBwcm9qZWN0XCI+XG5cdFx0XHQgdG8gamUgcHJvamVrdCB4eHhcblx0XHRcdDwvc2VjdGlvbj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/project/[slug].js\n");

/***/ })

})