"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/operations",{

/***/ "./component/balance.tsx":
/*!*******************************!*\
  !*** ./component/balance.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Balance = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), balance = ref[0], setBalance = ref[1];\n    var fetchData = function() {\n        var _ref = _asyncToGenerator(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var data;\n            return _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default().get('/api/current-balance');\n                    case 3:\n                        data = _ctx.sent.data;\n                        setBalance(data.balance | 0);\n                        _ctx.next = 9;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7\n                ]\n            ]);\n        }));\n        return function fetchData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetchData();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"article\", {\n        className: \"rounded-lg border border-gray-100 bg-white p-6 px-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"flex items-center justify-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-gray-500\",\n                            children: \"Balance\"\n                        }, void 0, false, {\n                            fileName: \"/app/component/balance.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 15\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            className: \"text-2xl font-medium text-gray-900\",\n                            children: [\n                                \"$ \",\n                                balance\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/app/component/balance.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 15\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/app/component/balance.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                    className: \"rounded-full bg-blue-100 p-3 text-blue-600\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"svg\", {\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        className: \"h-8 w-8\",\n                        fill: \"none\",\n                        viewBox: \"0 0 24 24\",\n                        stroke: \"currentColor\",\n                        strokeWidth: \"2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"path\", {\n                            strokeLinecap: \"round\",\n                            strokeLinejoin: \"round\",\n                            d: \"M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z\"\n                        }, void 0, false, {\n                            fileName: \"/app/component/balance.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 17\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/app/component/balance.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 15\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/app/component/balance.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/app/component/balance.tsx\",\n            lineNumber: 23,\n            columnNumber: 11\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/app/component/balance.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this));\n};\n_s(Balance, \"3Dw6O3taL+RJ0YzpEV8JM5PybOA=\");\n_c = Balance;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Balance);\nvar _c;\n$RefreshReg$(_c, \"Balance\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvYmFsYW5jZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMkM7QUFDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLEdBQUssQ0FBQ0csT0FBTyxHQUFhLFFBQzFCLEdBRGdDLENBQUM7O0lBRS9CLEdBQUssQ0FBeUJGLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQWpDRyxPQUFPLEdBQWdCSCxHQUFXLEtBQXpCSSxVQUFVLEdBQUlKLEdBQVc7SUFFekMsR0FBSyxDQUFDSyxTQUFTO3FKQUFHLFFBQVEsV0FBSSxDQUFDO2dCQUVuQkMsSUFBSTs7Ozs7OytCQUFXTCxnREFBUyxDQUFDLENBQXNCOzt3QkFBL0NLLElBQUksYUFBSkEsSUFBSTt3QkFDWkYsVUFBVSxDQUFDRSxJQUFJLENBQUNILE9BQU8sR0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O1FBRy9CLENBQUM7d0JBTktFLFNBQVM7Ozs7SUFRZk4sZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZk0sU0FBUztJQUNYLENBQUMsRUFBRSxDQUFDLENBQUM7SUFHSCxNQUFNLDZFQUNMRyxDQUFPO1FBQUNDLFNBQVMsRUFBQyxDQUFzRDs4RkFDbEVDLENBQUc7WUFBQ0QsU0FBUyxFQUFDLENBQW1DOzs0RkFDL0NDLENBQUc7O29HQUNEQyxDQUFDOzRCQUFDRixTQUFTLEVBQUMsQ0FBdUI7c0NBQUMsQ0FBTzs7Ozs7O29HQUUzQ0UsQ0FBQzs0QkFBQ0YsU0FBUyxFQUFDLENBQW9DOztnQ0FBQyxDQUFFO2dDQUFDTixPQUFPOzs7Ozs7Ozs7Ozs7OzRGQUc3RFMsQ0FBSTtvQkFBQ0gsU0FBUyxFQUFDLENBQTRDOzBHQUN6REksQ0FBRzt3QkFDRkMsS0FBSyxFQUFDLENBQTRCO3dCQUNsQ0wsU0FBUyxFQUFDLENBQVM7d0JBQ25CTSxJQUFJLEVBQUMsQ0FBTTt3QkFDWEMsT0FBTyxFQUFDLENBQVc7d0JBQ25CQyxNQUFNLEVBQUMsQ0FBYzt3QkFDckJDLFdBQVcsRUFBQyxDQUFHOzhHQUVkQyxDQUFJOzRCQUNIQyxhQUFhLEVBQUMsQ0FBTzs0QkFDckJDLGNBQWMsRUFBQyxDQUFPOzRCQUN0QkMsQ0FBQyxFQUFDLENBQW9KOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNeEssQ0FBQztHQTVDS3BCLE9BQU87S0FBUEEsT0FBTztBQThDYiwrREFBZUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvYmFsYW5jZS50c3g/MzRkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuXG5jb25zdCBCYWxhbmNlOiBSZWFjdC5GQyA9ICgpID0+IHtcblxuICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZSgwKVxuXG4gIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvY3VycmVudC1iYWxhbmNlJylcbiAgICAgIHNldEJhbGFuY2UoZGF0YS5iYWxhbmNlIHwgMClcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hEYXRhKClcbiAgfSwgW10pXG5cblxuICAgIHJldHVybiAoXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWdyYXktMTAwIGJnLXdoaXRlIHAtNiBweC0xMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5CYWxhbmNlPC9wPlxuXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj4kIHtiYWxhbmNlfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYmctYmx1ZS0xMDAgcC0zIHRleHQtYmx1ZS02MDBcIj5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtOCB3LThcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgZD1cIk0xNyA5VjdhMiAyIDAgMDAtMi0ySDVhMiAyIDAgMDAtMiAydjZhMiAyIDAgMDAyIDJoMm0yIDRoMTBhMiAyIDAgMDAyLTJ2LTZhMiAyIDAgMDAtMi0ySDlhMiAyIDAgMDAtMiAydjZhMiAyIDAgMDAyIDJ6bTctNWEyIDIgMCAxMS00IDAgMiAyIDAgMDE0IDB6XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYXJ0aWNsZT4pXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhbGFuY2VcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiQmFsYW5jZSIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwiZmV0Y2hEYXRhIiwiZGF0YSIsImdldCIsImFydGljbGUiLCJjbGFzc05hbWUiLCJkaXYiLCJwIiwic3BhbiIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2UiLCJzdHJva2VXaWR0aCIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/balance.tsx\n");

/***/ })

});