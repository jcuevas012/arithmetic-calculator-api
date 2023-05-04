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

/***/ "./pages/operations/index.tsx":
/*!************************************!*\
  !*** ./pages/operations/index.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _component_balance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/balance */ \"./component/balance.tsx\");\n/* harmony import */ var _component_calculator_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/calculator-form */ \"./component/calculator-form.tsx\");\n/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-request */ \"./hooks/use-request.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _component_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/error */ \"./component/error.tsx\");\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Records = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var ref = _slicedToArray((0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n        method: 'post',\n        url: '/api/operations',\n        onSuccess: function(data) {\n            router.push({\n                state: {\n                    operationResult: data\n                }\n            });\n        }\n    }), 3), request = ref[0], errors = ref[1], isLoading = ref[2];\n    var onChange = function() {\n        var _ref = _asyncToGenerator(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(data) {\n            return _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return request(data);\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onChange(data) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Arithmetic Operation App - Operation\"\n                    }, void 0, false, {\n                        fileName: \"/app/pages/operations/index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/app/pages/operations/index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/pages/operations/index.tsx\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"max-w-7xl mx-auto h-screen py-12 px-4 sm:px-6 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"py-5 \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_component_balance__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"/app/pages/operations/index.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/app/pages/operations/index.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_component_calculator_form__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        onChange: onChange,\n                        loading: isLoading,\n                        errors: errors\n                    }, void 0, false, {\n                        fileName: \"/app/pages/operations/index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_component_error__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        errors: errors\n                    }, void 0, false, {\n                        fileName: \"/app/pages/operations/index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/pages/operations/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/pages/operations/index.tsx\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, _this));\n};\n_s(Records, \"fd9W2tiUxYa65r7jRzxQU/YgeRc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        _hooks_use_request__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Records;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Records);\nvar _c;\n$RefreshReg$(_c, \"Records\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9vcGVyYXRpb25zL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDNEI7QUFDaUI7QUFDcUM7QUFDbEM7QUFDVDtBQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLMUMsR0FBSyxDQUFDTSxPQUFPLEdBQWEsUUFDMUIsR0FEZ0MsQ0FBQzs7SUFDN0IsR0FBSyxDQUFDQyxNQUFNLEdBQUdILHNEQUFTO0lBRXhCLEdBQUssQ0FBZ0NELEdBVW5DLGtCQVZtQ0EsOERBQVUsQ0FBQyxDQUFDO1FBQzdDSyxNQUFNLEVBQUUsQ0FBTTtRQUNkQyxHQUFHLEVBQUUsQ0FBaUI7UUFDdEJDLFNBQVMsRUFBRSxRQUFRLENBQVBDLElBQVMsRUFBSSxDQUFDO1lBQ3RCSixNQUFNLENBQUNLLElBQUksQ0FBQyxDQUFDO2dCQUNUQyxLQUFLLEVBQUUsQ0FBQztvQkFDUEMsZUFBZSxFQUFDSCxJQUFJO2dCQUNyQixDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDLE9BVk1JLE9BQU8sR0FBdUJaLEdBVW5DLEtBVmNhLE1BQU0sR0FBZWIsR0FVbkMsS0FWc0JjLFNBQVMsR0FBSWQsR0FVbkM7SUFFRixHQUFLLENBQUNlLFFBQVE7cUpBQUcsUUFBUSxTQUFEUCxJQUFzQixFQUFLLENBQUM7Ozs7OytCQUUxQ0ksT0FBTyxDQUFDSixJQUFJOzs7Ozs7UUFDdEIsQ0FBQzt3QkFIS08sUUFBUSxDQUFVUCxJQUFzQjs7OztJQUs5QyxNQUFNLDZFQUNEUSxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFNOzt3RkFDaEJwQixrREFBSTs7Z0dBQ0FxQixDQUFLO2tDQUFDLENBQW9DOzs7Ozs7Z0dBQzFDQyxDQUFJO3dCQUFDQyxJQUFJLEVBQUMsQ0FBVTt3QkFBQ0MsT0FBTyxFQUFDLENBQXVDOzs7Ozs7Ozs7Ozs7d0ZBRXhFTCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBZ0Q7O2dHQUMxREQsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQU87OEdBQ2pCbkIsMERBQU87Ozs7Ozs7Ozs7Z0dBRVhDLGtFQUFjO3dCQUNYZ0IsUUFBUSxFQUFFQSxRQUFRO3dCQUNsQk8sT0FBTyxFQUFFUixTQUFTO3dCQUNsQkQsTUFBTSxFQUFFQSxNQUFNOzs7Ozs7Z0dBRWpCWCx3REFBTTt3QkFBQ1csTUFBTSxFQUFFQSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdEMsQ0FBQztHQXZDS1YsT0FBTzs7UUFDTUYsa0RBQVM7UUFFYUQsMERBQVU7OztLQUg3Q0csT0FBTztBQXlDYiwrREFBZUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9vcGVyYXRpb25zL2luZGV4LnRzeD83OGM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEJhbGFuY2UgZnJvbSAnLi4vLi4vY29tcG9uZW50L2JhbGFuY2UnXG5pbXBvcnQgQ2FsY3VsYXRvckZvcm0sIHsgT3BlcmF0aW9uUGF5bG9hZCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC9jYWxjdWxhdG9yLWZvcm0nXG5pbXBvcnQgdXNlUmVxdWVzdCBmcm9tICcuLi8uLi9ob29rcy91c2UtcmVxdWVzdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgRXJyb3JzIGZyb20gJy4uLy4uL2NvbXBvbmVudC9lcnJvcic7XG5cblxuXG5cbmNvbnN0IFJlY29yZHM6IE5leHRQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgICBjb25zdCBbcmVxdWVzdCwgZXJyb3JzLCBpc0xvYWRpbmddID0gdXNlUmVxdWVzdCh7XG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICB1cmw6ICcvYXBpL29wZXJhdGlvbnMnLFxuICAgICAgICBvblN1Y2Nlc3M6IChkYXRhOiBhbnkpID0+eyBcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICBzdGF0ZToge1xuICAgICAgICAgICAgICAgICBvcGVyYXRpb25SZXN1bHQ6ZGF0YVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgfSlcblxuICAgIGNvbnN0IG9uQ2hhbmdlID0gYXN5bmMgKGRhdGE6IE9wZXJhdGlvblBheWxvYWQpID0+IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBhd2FpdCByZXF1ZXN0KGRhdGEpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkFyaXRobWV0aWMgT3BlcmF0aW9uIEFwcCAtIE9wZXJhdGlvbjwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWF4LXctN3hsIG14LWF1dG8gaC1zY3JlZW4gcHktMTIgcHgtNCBzbTpweC02ICc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B5LTUgJz5cbiAgICAgICAgICAgICAgICAgICAgPEJhbGFuY2UgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Q2FsY3VsYXRvckZvcm0gXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX0gXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2lzTG9hZGluZyBhcyBib29sZWFufVxuICAgICAgICAgICAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxFcnJvcnMgZXJyb3JzPXtlcnJvcnMgYXMgQXJyYXk8c3RyaW5nPn0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjb3Jkc1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJCYWxhbmNlIiwiQ2FsY3VsYXRvckZvcm0iLCJ1c2VSZXF1ZXN0IiwidXNlUm91dGVyIiwiRXJyb3JzIiwiUmVjb3JkcyIsInJvdXRlciIsIm1ldGhvZCIsInVybCIsIm9uU3VjY2VzcyIsImRhdGEiLCJwdXNoIiwic3RhdGUiLCJvcGVyYXRpb25SZXN1bHQiLCJyZXF1ZXN0IiwiZXJyb3JzIiwiaXNMb2FkaW5nIiwib25DaGFuZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxvYWRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/operations/index.tsx\n");

/***/ })

});