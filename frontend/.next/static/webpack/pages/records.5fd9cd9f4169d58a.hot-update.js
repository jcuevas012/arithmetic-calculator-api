"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/records",{

/***/ "./pages/records/index.tsx":
/*!*********************************!*\
  !*** ./pages/records/index.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _component_operation_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../component/operation-dropdown */ \"./component/operation-dropdown.tsx\");\n/* harmony import */ var _component_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../component/table */ \"./component/table/index.tsx\");\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Records = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        currentPage: 0,\n        totalItems: 0,\n        totalPages: 0,\n        records: []\n    }), result = ref[0], setResult = ref[1];\n    var fetchData = function() {\n        var _ref = _asyncToGenerator(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var data;\n            return _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_2___default().get('/api/records');\n                    case 3:\n                        data = _ctx.sent.data;\n                        setResult(data);\n                        _ctx.next = 9;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7\n                ]\n            ]);\n        }));\n        return function fetchData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onOperationTypeChange = function(value) {\n        console.log(value);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        fetchData();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"min-h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Arithmetic Operation App - Records\"\n                    }, void 0, false, {\n                        fileName: \"/app/pages/records/index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/app/pages/records/index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/pages/records/index.tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_component_operation_dropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        onChange: onOperationTypeChange\n                    }, void 0, false, {\n                        fileName: \"/app/pages/records/index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"my-5 overflow-x-auto rounded-lg border border-gray-200\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_component_table__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            records: result.records,\n                            totalItems: result === null || result === void 0 ? void 0 : result.totalItems,\n                            totalPages: result === null || result === void 0 ? void 0 : result.totalPages,\n                            currentPage: result === null || result === void 0 ? void 0 : result.currentPage\n                        }, void 0, false, {\n                            fileName: \"/app/pages/records/index.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/app/pages/records/index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/pages/records/index.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/pages/records/index.tsx\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, _this));\n};\n_s(Records, \"zYn+rUTxJ6E5uVyUwKnVtvKHmyg=\");\n_c = Records;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Records);\nvar _c;\n$RefreshReg$(_c, \"Records\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWNvcmRzL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFFRztBQUNlO0FBQzJCO0FBQ1I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlELEdBQUssQ0FBQ00sT0FBTyxHQUFhLFFBQzFCLEdBRGdDLENBQUM7O0lBRTdCLEdBQUssQ0FBdUJILEdBSzFCLEdBTDBCQSwrQ0FBUSxDQUFrQixDQUFDO1FBQ25ESSxXQUFXLEVBQUUsQ0FBQztRQUNkQyxVQUFVLEVBQUUsQ0FBQztRQUNiQyxVQUFVLEVBQUUsQ0FBQztRQUNiQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ2YsQ0FBQyxHQUxNQyxNQUFNLEdBQWVSLEdBSzFCLEtBTGFTLFNBQVMsR0FBSVQsR0FLMUI7SUFFRixHQUFLLENBQUNVLFNBQVM7cUpBQUcsUUFBUSxXQUFJLENBQUM7Z0JBRWZDLElBQUk7Ozs7OzsrQkFBV2QsZ0RBQVMsQ0FBQyxDQUFjOzt3QkFBdkNjLElBQUksYUFBSkEsSUFBSTt3QkFDWkYsU0FBUyxDQUFDRSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7O1FBR3RCLENBQUM7d0JBTktELFNBQVM7Ozs7SUFRZixHQUFLLENBQUNHLHFCQUFxQixHQUFHLFFBQVEsQ0FBUEMsS0FBYSxFQUFLLENBQUM7UUFDOUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLO0lBRXJCLENBQUM7SUFFRGYsZ0RBQVMsQ0FBQyxRQUNkLEdBRG9CLENBQUM7UUFDYlcsU0FBUztJQUNiLENBQUMsRUFBRSxDQUFDLENBQUM7SUFHTCxNQUFNLDZFQUNETyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFZOzt3RkFDdEJwQixrREFBSTs7Z0dBQ0FxQixDQUFLO2tDQUFDLENBQWtDOzs7Ozs7Z0dBQ3hDQyxDQUFJO3dCQUFDQyxJQUFJLEVBQUMsQ0FBVTt3QkFBQ0MsT0FBTyxFQUFDLENBQXVDOzs7Ozs7Ozs7Ozs7d0ZBRXhFQyxDQUFJOztnR0FDQXRCLHFFQUFxQjt3QkFBQ3VCLFFBQVEsRUFBRVgscUJBQXFCOzs7Ozs7Z0dBQ3JESSxDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBd0Q7OEdBQ2xFaEIsd0RBQUs7NEJBQ0ZLLE9BQU8sRUFBRUMsTUFBTSxDQUFDRCxPQUFPOzRCQUN2QkYsVUFBVSxFQUFFRyxNQUFNLGFBQU5BLE1BQU0sS0FBTkEsSUFBSSxDQUFKQSxDQUFrQixHQUFsQkEsSUFBSSxDQUFKQSxDQUFrQixHQUFsQkEsTUFBTSxDQUFFSCxVQUFVOzRCQUM5QkMsVUFBVSxFQUFFRSxNQUFNLGFBQU5BLE1BQU0sS0FBTkEsSUFBSSxDQUFKQSxDQUFrQixHQUFsQkEsSUFBSSxDQUFKQSxDQUFrQixHQUFsQkEsTUFBTSxDQUFFRixVQUFVOzRCQUM5QkYsV0FBVyxFQUFFSSxNQUFNLGFBQU5BLE1BQU0sS0FBTkEsSUFBSSxDQUFKQSxDQUFtQixHQUFuQkEsSUFBSSxDQUFKQSxDQUFtQixHQUFuQkEsTUFBTSxDQUFFSixXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU14RCxDQUFDO0dBOUNLRCxPQUFPO0tBQVBBLE9BQU87QUFnRGIsK0RBQWVBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVjb3Jkcy9pbmRleC50c3g/MWQyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBPcGVyYXRpb25UeXBlRHJvcERvd24gZnJvbSAnLi4vLi4vY29tcG9uZW50L29wZXJhdGlvbi1kcm9wZG93bidcbmltcG9ydCBUYWJsZSwgeyBSZWNvcmRSZXN1bHRTZXQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQvdGFibGUnXG5cblxuXG5jb25zdCBSZWNvcmRzOiBOZXh0UGFnZSA9ICgpID0+IHtcblxuICAgIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZTxSZWNvcmRSZXN1bHRTZXQ+KHtcbiAgICAgICAgY3VycmVudFBhZ2U6IDAsXG4gICAgICAgIHRvdGFsSXRlbXM6IDAsXG4gICAgICAgIHRvdGFsUGFnZXM6IDAsXG4gICAgICAgIHJlY29yZHM6IFtdXG4gICAgfSlcblxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3JlY29yZHMnKVxuICAgICAgICAgICAgc2V0UmVzdWx0KGRhdGEpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBvbk9wZXJhdGlvblR5cGVDaGFuZ2UgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcblxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoRGF0YSgpXG4gICAgfSwgW10pXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtaW4taC1mdWxsJz5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5Bcml0aG1ldGljIE9wZXJhdGlvbiBBcHAgLSBSZWNvcmRzPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICAgIDxPcGVyYXRpb25UeXBlRHJvcERvd24gb25DaGFuZ2U9e29uT3BlcmF0aW9uVHlwZUNoYW5nZX0vPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNSBvdmVyZmxvdy14LWF1dG8gcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLWdyYXktMjAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZSBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZHM9e3Jlc3VsdC5yZWNvcmRzfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsSXRlbXM9e3Jlc3VsdD8udG90YWxJdGVtc30gXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbFBhZ2VzPXtyZXN1bHQ/LnRvdGFsUGFnZXN9IFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2U9e3Jlc3VsdD8uY3VycmVudFBhZ2V9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNvcmRzXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJIZWFkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJPcGVyYXRpb25UeXBlRHJvcERvd24iLCJUYWJsZSIsIlJlY29yZHMiLCJjdXJyZW50UGFnZSIsInRvdGFsSXRlbXMiLCJ0b3RhbFBhZ2VzIiwicmVjb3JkcyIsInJlc3VsdCIsInNldFJlc3VsdCIsImZldGNoRGF0YSIsImRhdGEiLCJnZXQiLCJvbk9wZXJhdGlvblR5cGVDaGFuZ2UiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsIm1haW4iLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/records/index.tsx\n");

/***/ })

});