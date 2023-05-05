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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _component_operation_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../component/operation-dropdown */ \"./component/operation-dropdown.tsx\");\n/* harmony import */ var _component_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../component/table */ \"./component/table/index.tsx\");\n/* harmony import */ var _utils_with_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/with-auth */ \"./utils/with-auth.tsx\");\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Records = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        currentPage: 0,\n        totalItems: 0,\n        totalPages: 0,\n        records: []\n    }), result = ref[0], setResult = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        size: 10,\n        page: 1,\n        operationId: ''\n    }), filter1 = ref1[0], setFilter = ref1[1];\n    var fetchData = function() {\n        var _ref = _asyncToGenerator(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(filter) {\n            var url, data;\n            return _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        url = '/api/records?';\n                        if (filter === null || filter === void 0 ? void 0 : filter.operationId) {\n                            debugger;\n                            url.concat(\"operationId=\".concat(filter.operationId, \"&\"));\n                        }\n                        if (filter === null || filter === void 0 ? void 0 : filter.size) {\n                            url.concat(\"size=\".concat(filter.size, \"&\"));\n                        }\n                        if (filter === null || filter === void 0 ? void 0 : filter.page) {\n                            url.concat(\"page=\".concat(filter.page, \"&\"));\n                        }\n                        _ctx.next = 7;\n                        return axios__WEBPACK_IMPORTED_MODULE_2___default().get(url);\n                    case 7:\n                        data = _ctx.sent.data;\n                        setResult(data);\n                        _ctx.next = 13;\n                        break;\n                    case 11:\n                        _ctx.prev = 11;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                    case 13:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    11\n                ]\n            ]);\n        }));\n        return function fetchData(filter) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onOperationTypeChange = function() {\n        var _ref = _asyncToGenerator(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(operationId) {\n            return _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (operationId) {\n                            fetchData(_objectSpread({}, filter1, {\n                                operationId: operationId\n                            }));\n                        }\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onOperationTypeChange(operationId) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onPageSelect = function() {\n        var _ref = _asyncToGenerator(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(page) {\n            return _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (page) {\n                            fetchData(_objectSpread({}, filter1, {\n                                page: page\n                            }));\n                        }\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onPageSelect(page) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onSizeSelect = function() {\n        var _ref = _asyncToGenerator(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(size) {\n            return _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (size) {\n                            fetchData(_objectSpread({}, filter1, {\n                                size: size\n                            }));\n                        }\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onSizeSelect(size) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        fetchData();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"min-h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Arithmetic Operation App - Records\"\n                    }, void 0, false, {\n                        fileName: \"/app/pages/records/index.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/app/pages/records/index.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/pages/records/index.tsx\",\n                lineNumber: 82,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"py-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_component_operation_dropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            onChange: onOperationTypeChange\n                        }, void 0, false, {\n                            fileName: \"/app/pages/records/index.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/app/pages/records/index.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_component_table__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        result: result,\n                        onPageSelect: onPageSelect,\n                        onSizeSelect: onSizeSelect\n                    }, void 0, false, {\n                        fileName: \"/app/pages/records/index.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/pages/records/index.tsx\",\n                lineNumber: 86,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/pages/records/index.tsx\",\n        lineNumber: 81,\n        columnNumber: 9\n    }, _this));\n};\n_s(Records, \"Efnx0bGJ9RurRgGJTYyR1Ew1W1w=\");\n_c = Records;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_utils_with_auth__WEBPACK_IMPORTED_MODULE_7__.withAuth)(Records));\nvar _c, _c1;\n$RefreshReg$(_c, \"Records\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVk7Ozs7SUFNeEMsR0FBSyxDQUFDVyxZQUFZO3FKQUFHLFFBQVEsU0FBRFosSUFBWSxFQUFLLENBQUM7Ozs7d0JBQzFDLEVBQUUsRUFBRUEsSUFBSSxFQUFFLENBQUM7NEJBQ1BLLFNBQVMsbUJBQU1GLE9BQU07Z0NBQUVILElBQUksRUFBSkEsSUFBSTs7d0JBQy9CLENBQUM7Ozs7OztRQUNMLENBQUM7d0JBSktZLFlBQVksQ0FBVVosSUFBWTs7OztJQU14Q1osZ0RBQVMsQ0FBQyxRQUNkLEdBRG9CLENBQUM7UUFDYmlCLFNBQVM7SUFDYixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBR0wsTUFBTSw2RUFDRFEsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBWTs7d0ZBQ3RCM0Isa0RBQUk7O2dHQUNBNEIsQ0FBSztrQ0FBQyxDQUFrQzs7Ozs7O2dHQUN4Q0MsQ0FBSTt3QkFBQ0MsSUFBSSxFQUFDLENBQVU7d0JBQUNDLE9BQU8sRUFBQyxDQUF1Qzs7Ozs7Ozs7Ozs7O3dGQUV4RUMsQ0FBSTs7Z0dBQ0FOLENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFNOzhHQUNoQnhCLHFFQUFxQjs0QkFBQzhCLFFBQVEsRUFBRVYscUJBQXFCOzs7Ozs7Ozs7OztnR0FHekRuQix3REFBSzt3QkFDRk8sTUFBTSxFQUFFQSxNQUFNO3dCQUNkYSxZQUFZLEVBQUVBLFlBQVk7d0JBQzFCQyxZQUFZLEVBQUVBLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU05QyxDQUFDO0dBbkZLbkIsT0FBTztLQUFQQSxPQUFPO0FBcUZiLCtEQUFlLE1BQUFELDBEQUFRLENBQUNDLE9BQU8sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZWNvcmRzL2luZGV4LnRzeD8xZDJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE9wZXJhdGlvblR5cGVEcm9wRG93biBmcm9tICcuLi8uLi9jb21wb25lbnQvb3BlcmF0aW9uLWRyb3Bkb3duJ1xuaW1wb3J0IFRhYmxlLCB7IFJlY29yZFJlc3VsdFNldCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC90YWJsZSdcbmltcG9ydCB7IHdpdGhBdXRoIH0gZnJvbSAnLi4vLi4vdXRpbHMvd2l0aC1hdXRoJ1xuXG5cblxuaW50ZXJmYWNlIFJlY29yZEZpbHRlciB7XG4gICAgc2l6ZTogbnVtYmVyXG4gICAgcGFnZTogbnVtYmVyXG4gICAgb3BlcmF0aW9uSWQ6IHN0cmluZ1xufVxuXG5jb25zdCBSZWNvcmRzOiBOZXh0UGFnZSA9ICgpID0+IHtcblxuICAgIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZTxSZWNvcmRSZXN1bHRTZXQ+KHtcbiAgICAgICAgY3VycmVudFBhZ2U6IDAsXG4gICAgICAgIHRvdGFsSXRlbXM6IDAsXG4gICAgICAgIHRvdGFsUGFnZXM6IDAsXG4gICAgICAgIHJlY29yZHM6IFtdXG4gICAgfSlcblxuICAgIGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZTxSZWNvcmRGaWx0ZXI+KHtcbiAgICAgICAgc2l6ZTogMTAsXG4gICAgICAgIHBhZ2U6IDEsXG4gICAgICAgIG9wZXJhdGlvbklkOiAnJ1xuICAgIH0pXG5cblxuXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKGZpbHRlcj86IFJlY29yZEZpbHRlcikgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gJy9hcGkvcmVjb3Jkcz8nXG5cbiAgICAgICAgICAgIGlmIChmaWx0ZXI/Lm9wZXJhdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgICAgICB1cmwuY29uY2F0KGBvcGVyYXRpb25JZD0ke2ZpbHRlci5vcGVyYXRpb25JZH0mYClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZpbHRlcj8uc2l6ZSkge1xuICAgICAgICAgICAgICAgIHVybC5jb25jYXQoYHNpemU9JHtmaWx0ZXIuc2l6ZX0mYClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZpbHRlcj8ucGFnZSkge1xuICAgICAgICAgICAgICAgIHVybC5jb25jYXQoYHBhZ2U9JHtmaWx0ZXIucGFnZX0mYClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQodXJsKVxuICAgICAgICAgICAgc2V0UmVzdWx0KGRhdGEpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBvbk9wZXJhdGlvblR5cGVDaGFuZ2UgPSBhc3luYyAob3BlcmF0aW9uSWQ6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAob3BlcmF0aW9uSWQpIHtcbiAgICAgICAgICAgIGZldGNoRGF0YSh7IC4uLmZpbHRlciwgb3BlcmF0aW9uSWQgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG9uUGFnZVNlbGVjdCA9IGFzeW5jIChwYWdlOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKHBhZ2UpIHtcbiAgICAgICAgICAgIGZldGNoRGF0YSh7IC4uLmZpbHRlciwgcGFnZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgb25TaXplU2VsZWN0ID0gYXN5bmMgKHNpemU6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAoc2l6ZSkge1xuICAgICAgICAgICAgZmV0Y2hEYXRhKHsgLi4uZmlsdGVyLCBzaXplIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaERhdGEoKVxuICAgIH0sIFtdKVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWluLWgtZnVsbCc+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+QXJpdGhtZXRpYyBPcGVyYXRpb24gQXBwIC0gUmVjb3JkczwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPE9wZXJhdGlvblR5cGVEcm9wRG93biBvbkNoYW5nZT17b25PcGVyYXRpb25UeXBlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPFRhYmxlXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdD17cmVzdWx0fVxuICAgICAgICAgICAgICAgICAgICBvblBhZ2VTZWxlY3Q9e29uUGFnZVNlbGVjdH1cbiAgICAgICAgICAgICAgICAgICAgb25TaXplU2VsZWN0PXtvblNpemVTZWxlY3R9XG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKFJlY29yZHMpXG5cblxuIl0sIm5hbWVzIjpbImF4aW9zIiwiSGVhZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiT3BlcmF0aW9uVHlwZURyb3BEb3duIiwiVGFibGUiLCJ3aXRoQXV0aCIsIlJlY29yZHMiLCJjdXJyZW50UGFnZSIsInRvdGFsSXRlbXMiLCJ0b3RhbFBhZ2VzIiwicmVjb3JkcyIsInJlc3VsdCIsInNldFJlc3VsdCIsInNpemUiLCJwYWdlIiwib3BlcmF0aW9uSWQiLCJmaWx0ZXIiLCJzZXRGaWx0ZXIiLCJmZXRjaERhdGEiLCJ1cmwiLCJkYXRhIiwiY29uY2F0IiwiZ2V0Iiwib25PcGVyYXRpb25UeXBlQ2hhbmdlIiwib25QYWdlU2VsZWN0Iiwib25TaXplU2VsZWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJtYWluIiwib25DaGFuZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/records/index.tsx\n");

/***/ })

});