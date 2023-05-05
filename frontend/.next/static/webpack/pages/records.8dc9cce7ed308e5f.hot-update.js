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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _component_operation_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../component/operation-dropdown */ \"./component/operation-dropdown.tsx\");\n/* harmony import */ var _component_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../component/table */ \"./component/table/index.tsx\");\n/* harmony import */ var _utils_with_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/with-auth */ \"./utils/with-auth.tsx\");\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Records = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        currentPage: 0,\n        totalItems: 0,\n        totalPages: 0,\n        records: []\n    }), result = ref[0], setResult = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        size: 10,\n        page: 1,\n        operationId: ''\n    }), filter1 = ref1[0], setFilter = ref1[1];\n    var fetchData = function() {\n        var _ref = _asyncToGenerator(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(filter) {\n            var url, data;\n            return _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        url = '/api/records?';\n                        if (filter === null || filter === void 0 ? void 0 : filter.operationId) {\n                            url.concat(\"operationId=\".concat(filter.operationId, \"&\"));\n                        }\n                        if (filter === null || filter === void 0 ? void 0 : filter.size) {\n                            url.concat(\"size=\".concat(filter.size, \"&\"));\n                        }\n                        if (filter === null || filter === void 0 ? void 0 : filter.page) {\n                            url.concat(\"page=\".concat(filter.page, \"&\"));\n                        }\n                        _ctx.next = 7;\n                        return axios__WEBPACK_IMPORTED_MODULE_2___default().get(url);\n                    case 7:\n                        data = _ctx.sent.data;\n                        setResult(data);\n                        _ctx.next = 13;\n                        break;\n                    case 11:\n                        _ctx.prev = 11;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                    case 13:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    11\n                ]\n            ]);\n        }));\n        return function fetchData(filter) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onOperationTypeChange = function() {\n        var _ref = _asyncToGenerator(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(operationId) {\n            var data;\n            return _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!operationId) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"/api/records?operationId=\".concat(operationId));\n                    case 3:\n                        data = _ctx.sent.data;\n                        setResult(data);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onOperationTypeChange(operationId) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onPageSelect = function() {\n        var _ref = _asyncToGenerator(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(page) {\n            var data;\n            return _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!page) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"/api/records?page=\".concat(page));\n                    case 3:\n                        data = _ctx.sent.data;\n                        setResult(data);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onPageSelect(page) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onSizeSelect = function() {\n        var _ref = _asyncToGenerator(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(size) {\n            var data;\n            return _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!size) {\n                            _ctx.next = 5;\n                            break;\n                        }\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"/api/records?size=\".concat(size));\n                    case 3:\n                        data = _ctx.sent.data;\n                        setResult(data);\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onSizeSelect(size) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        fetchData();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"min-h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Arithmetic Operation App - Records\"\n                    }, void 0, false, {\n                        fileName: \"/app/pages/records/index.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/app/pages/records/index.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/pages/records/index.tsx\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"py-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_component_operation_dropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            onChange: onOperationTypeChange\n                        }, void 0, false, {\n                            fileName: \"/app/pages/records/index.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/app/pages/records/index.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_component_table__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        result: result,\n                        onPageSelect: onPageSelect,\n                        onSizeSelect: onSizeSelect\n                    }, void 0, false, {\n                        fileName: \"/app/pages/records/index.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/pages/records/index.tsx\",\n                lineNumber: 88,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/pages/records/index.tsx\",\n        lineNumber: 83,\n        columnNumber: 9\n    }, _this));\n};\n_s(Records, \"Efnx0bGJ9RurRgGJTYyR1Ew1W1w=\");\n_c = Records;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_utils_with_auth__WEBPACK_IMPORTED_MODULE_7__.withAuth)(Records));\nvar _c, _c1;\n$RefreshReg$(_c, \"Records\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0ksWUFBWSxDQUFVVixJQUFZOzs7O0lBT3BDLEdBQUssQ0FBQ1csWUFBWTtxSkFBRyxRQUFRLFNBQURaLElBQVksRUFBSyxDQUFDO2dCQUVsQ08sSUFBSTs7Ozs2QkFEWlAsSUFBSTs7Ozs7K0JBQ21CZCxnREFBUyxDQUFFLENBQWtCLG9CQUFPLE9BQUxjLElBQUk7O3dCQUFsRE8sSUFBSSxhQUFKQSxJQUFJO3dCQUNaUixTQUFTLENBQUNRLElBQUk7Ozs7OztRQUV0QixDQUFDO3dCQUxTSyxZQUFZLENBQVVaLElBQVk7Ozs7SUFPNUNaLGdEQUFTLENBQUMsUUFDZCxHQURvQixDQUFDO1FBQ2JpQixTQUFTO0lBQ2IsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUdMLE1BQU0sNkVBQ0RRLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQVk7O3dGQUN0QjNCLGtEQUFJOztnR0FDQTRCLENBQUs7a0NBQUMsQ0FBa0M7Ozs7OztnR0FDeENDLENBQUk7d0JBQUNDLElBQUksRUFBQyxDQUFVO3dCQUFDQyxPQUFPLEVBQUMsQ0FBdUM7Ozs7Ozs7Ozs7Ozt3RkFFeEVDLENBQUk7O2dHQUNBTixDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBTTs4R0FDaEJ4QixxRUFBcUI7NEJBQUM4QixRQUFRLEVBQUVWLHFCQUFxQjs7Ozs7Ozs7Ozs7Z0dBR3pEbkIsd0RBQUs7d0JBQ0ZPLE1BQU0sRUFBRUEsTUFBTTt3QkFDZGEsWUFBWSxFQUFFQSxZQUFZO3dCQUMxQkMsWUFBWSxFQUFFQSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNOUMsQ0FBQztHQXJGS25CLE9BQU87S0FBUEEsT0FBTztBQXVGYiwrREFBZSxNQUFBRCwwREFBUSxDQUFDQyxPQUFPLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVjb3Jkcy9pbmRleC50c3g/MWQyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBPcGVyYXRpb25UeXBlRHJvcERvd24gZnJvbSAnLi4vLi4vY29tcG9uZW50L29wZXJhdGlvbi1kcm9wZG93bidcbmltcG9ydCBUYWJsZSwgeyBSZWNvcmRSZXN1bHRTZXQgfSBmcm9tICcuLi8uLi9jb21wb25lbnQvdGFibGUnXG5pbXBvcnQgeyB3aXRoQXV0aCB9IGZyb20gJy4uLy4uL3V0aWxzL3dpdGgtYXV0aCdcblxuXG5cbmludGVyZmFjZSBSZWNvcmRGaWx0ZXIge1xuICAgIHNpemU6IG51bWJlclxuICAgIHBhZ2U6IG51bWJlclxuICAgIG9wZXJhdGlvbklkOiBzdHJpbmdcbn1cblxuY29uc3QgUmVjb3JkczogTmV4dFBhZ2UgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGU8UmVjb3JkUmVzdWx0U2V0Pih7XG4gICAgICAgIGN1cnJlbnRQYWdlOiAwLFxuICAgICAgICB0b3RhbEl0ZW1zOiAwLFxuICAgICAgICB0b3RhbFBhZ2VzOiAwLFxuICAgICAgICByZWNvcmRzOiBbXVxuICAgIH0pXG5cbiAgICBjb25zdCBbZmlsdGVyLCBzZXRGaWx0ZXJdID0gdXNlU3RhdGU8UmVjb3JkRmlsdGVyPih7XG4gICAgICAgIHNpemU6IDEwLFxuICAgICAgICBwYWdlOiAxLFxuICAgICAgICBvcGVyYXRpb25JZDogJydcbiAgICB9KVxuXG5cblxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jIChmaWx0ZXI/OiBSZWNvcmRGaWx0ZXIpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9ICcvYXBpL3JlY29yZHM/J1xuXG4gICAgICAgICAgICBpZiAoZmlsdGVyPy5vcGVyYXRpb25JZCkge1xuICAgICAgICAgICAgICAgIHVybC5jb25jYXQoYG9wZXJhdGlvbklkPSR7ZmlsdGVyLm9wZXJhdGlvbklkfSZgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZmlsdGVyPy5zaXplKSB7XG4gICAgICAgICAgICAgICAgdXJsLmNvbmNhdChgc2l6ZT0ke2ZpbHRlci5zaXplfSZgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZmlsdGVyPy5wYWdlKSB7XG4gICAgICAgICAgICAgICAgdXJsLmNvbmNhdChgcGFnZT0ke2ZpbHRlci5wYWdlfSZgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCh1cmwpXG4gICAgICAgICAgICBzZXRSZXN1bHQoZGF0YSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG9uT3BlcmF0aW9uVHlwZUNoYW5nZSA9IGFzeW5jIChvcGVyYXRpb25JZDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChvcGVyYXRpb25JZCkge1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvcmVjb3Jkcz9vcGVyYXRpb25JZD0ke29wZXJhdGlvbklkfWApXG4gICAgICAgICAgICBzZXRSZXN1bHQoZGF0YSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG9uUGFnZVNlbGVjdCA9IGFzeW5jIChwYWdlOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKHBhZ2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3JlY29yZHM/cGFnZT0ke3BhZ2V9YClcbiAgICAgICAgICAgIHNldFJlc3VsdChkYXRhKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgICAgIGNvbnN0IG9uU2l6ZVNlbGVjdCA9IGFzeW5jIChzaXplOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKHNpemUpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3JlY29yZHM/c2l6ZT0ke3NpemV9YClcbiAgICAgICAgICAgIHNldFJlc3VsdChkYXRhKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2hEYXRhKClcbiAgICB9LCBbXSlcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21pbi1oLWZ1bGwnPlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkFyaXRobWV0aWMgT3BlcmF0aW9uIEFwcCAtIFJlY29yZHM8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSdpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoJyAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxPcGVyYXRpb25UeXBlRHJvcERvd24gb25DaGFuZ2U9e29uT3BlcmF0aW9uVHlwZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8VGFibGVcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0PXtyZXN1bHR9XG4gICAgICAgICAgICAgICAgICAgIG9uUGFnZVNlbGVjdD17b25QYWdlU2VsZWN0fVxuICAgICAgICAgICAgICAgICAgICBvblNpemVTZWxlY3Q9e29uU2l6ZVNlbGVjdH1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoUmVjb3JkcylcblxuXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJIZWFkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJPcGVyYXRpb25UeXBlRHJvcERvd24iLCJUYWJsZSIsIndpdGhBdXRoIiwiUmVjb3JkcyIsImN1cnJlbnRQYWdlIiwidG90YWxJdGVtcyIsInRvdGFsUGFnZXMiLCJyZWNvcmRzIiwicmVzdWx0Iiwic2V0UmVzdWx0Iiwic2l6ZSIsInBhZ2UiLCJvcGVyYXRpb25JZCIsImZpbHRlciIsInNldEZpbHRlciIsImZldGNoRGF0YSIsInVybCIsImRhdGEiLCJjb25jYXQiLCJnZXQiLCJvbk9wZXJhdGlvblR5cGVDaGFuZ2UiLCJvblBhZ2VTZWxlY3QiLCJvblNpemVTZWxlY3QiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsIm1haW4iLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/records/index.tsx\n");

/***/ })

});