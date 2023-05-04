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

/***/ "./component/calculator-form.tsx":
/*!***************************************!*\
  !*** ./component/calculator-form.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _operation_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operation-dropdown */ \"./component/operation-dropdown.tsx\");\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar CalculatorForm = function(param1) {\n    var onChange = param1.onChange, errors = param1.errors, loading = param1.loading;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), firstValue = ref[0], setFirstValue = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), secondValue = ref1[0], setSecondValue = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), operationId = ref2[0], setOperationId = ref2[1];\n    var _onChange = function() {\n        onChange({\n            firstValue: firstValue,\n            secondValue: secondValue,\n            operationId: operationId\n        });\n    };\n    var onChangeOperationType = function(value) {\n        setOperationId(value);\n    };\n    var isValidPayload = function() {\n        return !!operationId && !!firstValue && !!secondValue;\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex-col py-20 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"block text-sm font-medium leading-6 text-gray-900 \",\n                        children: \"First Value\"\n                    }, void 0, false, {\n                        fileName: \"/app/component/calculator-form.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative mt-15 rounded-md shadow-sm\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            value: firstValue,\n                            onChange: function(param) {\n                                var value = param.target.value;\n                                return setFirstValue(parseInt(value));\n                            },\n                            type: \"text\",\n                            name: \"price\",\n                            id: \"price\",\n                            className: \"block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6\",\n                            placeholder: \"0\"\n                        }, void 0, false, {\n                            fileName: \"/app/component/calculator-form.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/app/component/calculator-form.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/component/calculator-form.tsx\",\n                lineNumber: 38,\n                columnNumber: 17\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/app/component/calculator-form.tsx\",\n                lineNumber: 44,\n                columnNumber: 17\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"block text-sm font-medium leading-6 text-gray-900 \",\n                        children: \"Second Value\"\n                    }, void 0, false, {\n                        fileName: \"/app/component/calculator-form.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative mt-15 rounded-md shadow-sm\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            value: secondValue,\n                            onChange: function(param) {\n                                var value = param.target.value;\n                                return setSecondValue(parseInt(value));\n                            },\n                            type: \"text\",\n                            name: \"price\",\n                            id: \"price\",\n                            className: \"block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6\",\n                            placeholder: \"0\"\n                        }, void 0, false, {\n                            fileName: \"/app/component/calculator-form.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/app/component/calculator-form.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/component/calculator-form.tsx\",\n                lineNumber: 45,\n                columnNumber: 17\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/app/component/calculator-form.tsx\",\n                lineNumber: 51,\n                columnNumber: 17\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_operation_dropdown__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onChange: onChangeOperationType\n            }, void 0, false, {\n                fileName: \"/app/component/calculator-form.tsx\",\n                lineNumber: 52,\n                columnNumber: 17\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/app/component/calculator-form.tsx\",\n                lineNumber: 53,\n                columnNumber: 17\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-10 inline-block\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: _onChange,\n                    disabled: !isValidPayload(),\n                    className: isValidPayload() ? 'inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700' : '',\n                    children: \"Process Operation\"\n                }, void 0, false, {\n                    fileName: \"/app/component/calculator-form.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 21\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/app/component/calculator-form.tsx\",\n                lineNumber: 54,\n                columnNumber: 17\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/component/calculator-form.tsx\",\n        lineNumber: 37,\n        columnNumber: 13\n    }, _this));\n};\n_s(CalculatorForm, \"crkhjC3HCZT3cpWx9iMjTAKZ4e8=\");\n_c = CalculatorForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CalculatorForm);\nvar _c;\n$RefreshReg$(_c, \"CalculatorForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUdkLGNBQWM7b0JBQ3pCRSxTQUFTLEVBQUVGLGNBQWMsS0FBSyxDQUEySiw2SkFBRyxDQUFFOzhCQUM3TCxDQUVGOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlwQixDQUFDO0dBakRLYixjQUFjO0tBQWRBLGNBQWM7QUFtRHBCLCtEQUFlQSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudC9jYWxjdWxhdG9yLWZvcm0udHN4P2VhMWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBPcGVyYXRpb25UeXBlRHJvcERvd24gZnJvbSBcIi4vb3BlcmF0aW9uLWRyb3Bkb3duXCJcblxuZXhwb3J0IGludGVyZmFjZSBPcGVyYXRpb25QYXlsb2FkIHtcbiAgICBmaXJzdFZhbHVlOiBudW1iZXI7XG4gICAgc2Vjb25kVmFsdWU6IG51bWJlcjtcbiAgICBvcGVyYXRpb25JZDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgQ2FsY3VsYXRvckZvcm1Qcm9wcyB7XG4gICAgZXJyb3JzOiBzdHJpbmdbXTtcbiAgICBvbkNoYW5nZTogKGRhdGE6IE9wZXJhdGlvblBheWxvYWQpID0+IHZvaWRcbiAgICBsb2FkaW5nOiBib29sZWFuXG59XG5cbmNvbnN0IENhbGN1bGF0b3JGb3JtOiBSZWFjdC5GQzxDYWxjdWxhdG9yRm9ybVByb3BzPiA9ICh7IG9uQ2hhbmdlLCBlcnJvcnMsIGxvYWRpbmcgfSkgPT4ge1xuICAgIGNvbnN0IFtmaXJzdFZhbHVlLCBzZXRGaXJzdFZhbHVlXSAgPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IFtzZWNvbmRWYWx1ZSwgc2V0U2Vjb25kVmFsdWVdICA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgW29wZXJhdGlvbklkLCBzZXRPcGVyYXRpb25JZF0gID0gdXNlU3RhdGUoJycpXG5cblxuICAgIGNvbnN0IF9vbkNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICAgICAgZmlyc3RWYWx1ZSxcbiAgICAgICAgICAgIHNlY29uZFZhbHVlLFxuICAgICAgICAgICAgb3BlcmF0aW9uSWRcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBvbkNoYW5nZU9wZXJhdGlvblR5cGUgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICBzZXRPcGVyYXRpb25JZCh2YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBpc1ZhbGlkUGF5bG9hZCA9ICgpOiBib29sZWFuID0+ICEhb3BlcmF0aW9uSWQgJiYgISFmaXJzdFZhbHVlICYmICEhc2Vjb25kVmFsdWVcblxuICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY29sIHB5LTIwIFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIGxlYWRpbmctNiB0ZXh0LWdyYXktOTAwIFwiPkZpcnN0IFZhbHVlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtdC0xNSByb3VuZGVkLW1kIHNoYWRvdy1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtmaXJzdFZhbHVlfSBvbkNoYW5nZT17KHsgdGFyZ2V0OiB7IHZhbHVlIH19KSA9PiBzZXRGaXJzdFZhbHVlKHBhcnNlSW50KHZhbHVlKSl9IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInByaWNlXCIgaWQ9XCJwcmljZVwiIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCByb3VuZGVkLW1kIGJvcmRlci0wIHB5LTEuNSBwbC03IHByLTIwIHRleHQtZ3JheS05MDAgcmluZy0xIHJpbmctaW5zZXQgcmluZy1ncmF5LTMwMCBwbGFjZWhvbGRlcjp0ZXh0LWdyYXktNDAwIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluc2V0IGZvY3VzOnJpbmctaW5kaWdvLTYwMCBzbTp0ZXh0LXNtIHNtOmxlYWRpbmctNlwiIHBsYWNlaG9sZGVyPVwiMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gbGVhZGluZy02IHRleHQtZ3JheS05MDAgXCI+U2Vjb25kIFZhbHVlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtdC0xNSByb3VuZGVkLW1kIHNoYWRvdy1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtzZWNvbmRWYWx1ZX0gb25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZSB9fSkgPT4gc2V0U2Vjb25kVmFsdWUocGFyc2VJbnQodmFsdWUpKX0gdHlwZT1cInRleHRcIiBuYW1lPVwicHJpY2VcIiBpZD1cInByaWNlXCIgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIHJvdW5kZWQtbWQgYm9yZGVyLTAgcHktMS41IHBsLTcgcHItMjAgdGV4dC1ncmF5LTkwMCByaW5nLTEgcmluZy1pbnNldCByaW5nLWdyYXktMzAwIHBsYWNlaG9sZGVyOnRleHQtZ3JheS00MDAgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5zZXQgZm9jdXM6cmluZy1pbmRpZ28tNjAwIHNtOnRleHQtc20gc206bGVhZGluZy02XCIgcGxhY2Vob2xkZXI9XCIwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8T3BlcmF0aW9uVHlwZURyb3BEb3duIG9uQ2hhbmdlPXtvbkNoYW5nZU9wZXJhdGlvblR5cGV9Lz5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cIm10LTEwIGlubGluZS1ibG9ja1wiID5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e19vbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaXNWYWxpZFBheWxvYWQoKX1cbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXNWYWxpZFBheWxvYWQoKSA/ICdpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNSBweS0zIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgdGV4dC13aGl0ZSBiZy1pbmRpZ28tNjAwIGhvdmVyOmJnLWluZGlnby03MDAnIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9jZXNzIE9wZXJhdGlvblxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdG9yRm9ybVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiT3BlcmF0aW9uVHlwZURyb3BEb3duIiwiQ2FsY3VsYXRvckZvcm0iLCJvbkNoYW5nZSIsImVycm9ycyIsImxvYWRpbmciLCJmaXJzdFZhbHVlIiwic2V0Rmlyc3RWYWx1ZSIsInNlY29uZFZhbHVlIiwic2V0U2Vjb25kVmFsdWUiLCJvcGVyYXRpb25JZCIsInNldE9wZXJhdGlvbklkIiwiX29uQ2hhbmdlIiwib25DaGFuZ2VPcGVyYXRpb25UeXBlIiwidmFsdWUiLCJpc1ZhbGlkUGF5bG9hZCIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiaW5wdXQiLCJ0YXJnZXQiLCJwYXJzZUludCIsInR5cGUiLCJuYW1lIiwiaWQiLCJwbGFjZWhvbGRlciIsImJyIiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/calculator-form.tsx\n");

/***/ })

});