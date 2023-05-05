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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _component_operation_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../component/operation-dropdown */ \"./component/operation-dropdown.tsx\");\n/* harmony import */ var _component_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../component/table */ \"./component/table/index.tsx\");\n/* harmony import */ var _utils_with_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/with-auth */ \"./utils/with-auth.tsx\");\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar initialValues = {\n    size: 10,\n    page: 1,\n    operationId: ''\n};\nvar Records = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        currentPage: 0,\n        totalItems: 0,\n        totalPages: 0,\n        records: []\n    }), result = ref[0], setResult = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(initialValues), filter1 = ref1[0], setFilter = ref1[1];\n    var onClearFilter = function() {\n        setFilter(initialValues);\n        fetchData();\n    };\n    var fetchData = function() {\n        var _ref = _asyncToGenerator(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(filter) {\n            var url, data;\n            return _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        url = '/api/records?';\n                        if (filter === null || filter === void 0 ? void 0 : filter.operationId) {\n                            url = url.concat(\"operationId=\".concat(filter.operationId, \"&\"));\n                        }\n                        if (filter === null || filter === void 0 ? void 0 : filter.size) {\n                            url = url.concat(\"size=\".concat(filter.size, \"&\"));\n                        }\n                        if (filter === null || filter === void 0 ? void 0 : filter.page) {\n                            url = url.concat(\"page=\".concat(filter.page, \"&\"));\n                        }\n                        _ctx.next = 7;\n                        return axios__WEBPACK_IMPORTED_MODULE_2___default().get(url);\n                    case 7:\n                        data = _ctx.sent.data;\n                        setResult(data);\n                        _ctx.next = 13;\n                        break;\n                    case 11:\n                        _ctx.prev = 11;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                    case 13:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    11\n                ]\n            ]);\n        }));\n        return function fetchData(filter) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onOperationTypeChange = function() {\n        var _ref = _asyncToGenerator(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(operationId) {\n            return _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (operationId) {\n                            setFilter(_objectSpread({}, filter1, {\n                                operationId: operationId\n                            }));\n                            fetchData(filter1);\n                        }\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onOperationTypeChange(operationId) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onPageSelect = function() {\n        var _ref = _asyncToGenerator(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(page) {\n            return _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (page) {\n                            setFilter(_objectSpread({}, filter1, {\n                                page: page\n                            }));\n                            fetchData(filter1);\n                        }\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onPageSelect(page) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onSizeSelect = function() {\n        var _ref = _asyncToGenerator(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(size) {\n            return _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (size) {\n                            setFilter(_objectSpread({}, filter1, {\n                                size: size\n                            }));\n                            fetchData(filter1);\n                        }\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onSizeSelect(size) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        fetchData();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"min-h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Arithmetic Operation App - Records\"\n                    }, void 0, false, {\n                        fileName: \"/app/pages/records/index.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/app/pages/records/index.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/pages/records/index.tsx\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"py-6 flex nav-container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_component_operation_dropdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                onChange: onOperationTypeChange\n                            }, void 0, false, {\n                                fileName: \"/app/pages/records/index.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                onClick: onClearFilter,\n                                className: \" bg-white hover:bg-gray-100 text-gray-800 font-semibold border border-gray-400 rounded shadow\",\n                                children: \"Clear Filter\"\n                            }, void 0, false, {\n                                fileName: \"/app/pages/records/index.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 25\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/app/pages/records/index.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_component_table__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        result: result,\n                        onPageSelect: onPageSelect,\n                        onSizeSelect: onSizeSelect\n                    }, void 0, false, {\n                        fileName: \"/app/pages/records/index.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/pages/records/index.tsx\",\n                lineNumber: 94,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/pages/records/index.tsx\",\n        lineNumber: 89,\n        columnNumber: 9\n    }, _this));\n};\n_s(Records, \"5sj0hsSmxRPLt0Tsboe2emZk3/g=\");\n_c = Records;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c1 = (0,_utils_with_auth__WEBPACK_IMPORTED_MODULE_7__.withAuth)(Records));\nvar _c, _c1;\n$RefreshReg$(_c, \"Records\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxZQUFZLEVBQUVBLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU05QyxDQUFDO0dBMUZLakIsT0FBTztLQUFQQSxPQUFPO0FBNEZiLCtEQUFlLE1BQUFMLDBEQUFRLENBQUNLLE9BQU8sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZWNvcmRzL2luZGV4LnRzeD8xZDJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE9wZXJhdGlvblR5cGVEcm9wRG93biBmcm9tICcuLi8uLi9jb21wb25lbnQvb3BlcmF0aW9uLWRyb3Bkb3duJ1xuaW1wb3J0IFRhYmxlLCB7IFJlY29yZFJlc3VsdFNldCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC90YWJsZSdcbmltcG9ydCB7IHdpdGhBdXRoIH0gZnJvbSAnLi4vLi4vdXRpbHMvd2l0aC1hdXRoJ1xuXG5jb25zdCBpbml0aWFsVmFsdWVzID0ge1xuICAgIHNpemU6IDEwLFxuICAgIHBhZ2U6IDEsXG4gICAgb3BlcmF0aW9uSWQ6ICcnXG59XG5cbmludGVyZmFjZSBSZWNvcmRGaWx0ZXIge1xuICAgIHNpemU6IG51bWJlclxuICAgIHBhZ2U6IG51bWJlclxuICAgIG9wZXJhdGlvbklkOiBzdHJpbmdcbn1cblxuY29uc3QgUmVjb3JkczogTmV4dFBhZ2UgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGU8UmVjb3JkUmVzdWx0U2V0Pih7XG4gICAgICAgIGN1cnJlbnRQYWdlOiAwLFxuICAgICAgICB0b3RhbEl0ZW1zOiAwLFxuICAgICAgICB0b3RhbFBhZ2VzOiAwLFxuICAgICAgICByZWNvcmRzOiBbXVxuICAgIH0pXG5cbiAgICBjb25zdCBbZmlsdGVyLCBzZXRGaWx0ZXJdID0gdXNlU3RhdGU8UmVjb3JkRmlsdGVyPihpbml0aWFsVmFsdWVzKVxuXG5cbiAgICBjb25zdCBvbkNsZWFyRmlsdGVyID0gKCkgPT4ge1xuICAgICAgICBzZXRGaWx0ZXIoaW5pdGlhbFZhbHVlcylcbiAgICAgICAgZmV0Y2hEYXRhKClcbiAgICB9XG5cbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoZmlsdGVyPzogUmVjb3JkRmlsdGVyKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgdXJsID0gJy9hcGkvcmVjb3Jkcz8nXG5cbiAgICAgICAgICAgIGlmIChmaWx0ZXI/Lm9wZXJhdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgdXJsID0gdXJsLmNvbmNhdChgb3BlcmF0aW9uSWQ9JHtmaWx0ZXIub3BlcmF0aW9uSWR9JmApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmaWx0ZXI/LnNpemUpIHtcbiAgICAgICAgICAgICAgICB1cmwgPSB1cmwuY29uY2F0KGBzaXplPSR7ZmlsdGVyLnNpemV9JmApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmaWx0ZXI/LnBhZ2UpIHtcbiAgICAgICAgICAgICAgICB1cmwgPSB1cmwuY29uY2F0KGBwYWdlPSR7ZmlsdGVyLnBhZ2V9JmApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KHVybClcbiAgICAgICAgICAgIHNldFJlc3VsdChkYXRhKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgb25PcGVyYXRpb25UeXBlQ2hhbmdlID0gYXN5bmMgKG9wZXJhdGlvbklkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKG9wZXJhdGlvbklkKSB7XG4gICAgICAgICAgICBzZXRGaWx0ZXIoeyAuLi5maWx0ZXIsIG9wZXJhdGlvbklkIH0pXG4gICAgICAgICAgICBmZXRjaERhdGEoZmlsdGVyKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgb25QYWdlU2VsZWN0ID0gYXN5bmMgKHBhZ2U6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAocGFnZSkge1xuICAgICAgICAgICAgc2V0RmlsdGVyKHsgLi4uZmlsdGVyLCBwYWdlIH0pXG4gICAgICAgICAgICBmZXRjaERhdGEoZmlsdGVyKVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBvblNpemVTZWxlY3QgPSBhc3luYyAoc2l6ZTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmIChzaXplKSB7XG4gICAgICAgICAgICBzZXRGaWx0ZXIoeyAuLi5maWx0ZXIsIHNpemUgfSlcbiAgICAgICAgICAgIGZldGNoRGF0YShmaWx0ZXIpXG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoRGF0YSgpXG4gICAgfSwgW10pXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtaW4taC1mdWxsJz5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5Bcml0aG1ldGljIE9wZXJhdGlvbiBBcHAgLSBSZWNvcmRzPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNiBmbGV4ICBuYXYtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxPcGVyYXRpb25UeXBlRHJvcERvd24gb25DaGFuZ2U9e29uT3BlcmF0aW9uVHlwZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25DbGVhckZpbHRlcn0gY2xhc3NOYW1lPVwiIGJnLXdoaXRlIGhvdmVyOmJnLWdyYXktMTAwIHRleHQtZ3JheS04MDAgZm9udC1zZW1pYm9sZCAgYm9yZGVyIGJvcmRlci1ncmF5LTQwMCByb3VuZGVkIHNoYWRvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsZWFyIEZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8VGFibGVcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0PXtyZXN1bHR9XG4gICAgICAgICAgICAgICAgICAgIG9uUGFnZVNlbGVjdD17b25QYWdlU2VsZWN0fVxuICAgICAgICAgICAgICAgICAgICBvblNpemVTZWxlY3Q9e29uU2l6ZVNlbGVjdH1cbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoUmVjb3JkcylcblxuXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJIZWFkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJPcGVyYXRpb25UeXBlRHJvcERvd24iLCJUYWJsZSIsIndpdGhBdXRoIiwiaW5pdGlhbFZhbHVlcyIsInNpemUiLCJwYWdlIiwib3BlcmF0aW9uSWQiLCJSZWNvcmRzIiwiY3VycmVudFBhZ2UiLCJ0b3RhbEl0ZW1zIiwidG90YWxQYWdlcyIsInJlY29yZHMiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJmaWx0ZXIiLCJzZXRGaWx0ZXIiLCJvbkNsZWFyRmlsdGVyIiwiZmV0Y2hEYXRhIiwidXJsIiwiZGF0YSIsImNvbmNhdCIsImdldCIsIm9uT3BlcmF0aW9uVHlwZUNoYW5nZSIsIm9uUGFnZVNlbGVjdCIsIm9uU2l6ZVNlbGVjdCIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibWFpbiIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/records/index.tsx\n");

/***/ })

});