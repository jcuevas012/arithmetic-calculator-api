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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _operation_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operation-dropdown */ \"./component/operation-dropdown.tsx\");\n\n\nvar _this = undefined;\nvar CalculatorForm = function(param) {\n    var onChange = param.onChange, errors = param.errors, loading = param.loading;\n    var _onChange = function() {\n        onChange({});\n    };\n    var onChangeOperationType = function() {};\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex-col py-20 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"block text-sm font-medium leading-6 text-gray-900 \",\n                        children: \"First Value\"\n                    }, void 0, false, {\n                        fileName: \"/app/component/calculator-form.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative mt-15 rounded-md shadow-sm\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"price\",\n                            id: \"price\",\n                            className: \"block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6\",\n                            placeholder: \"0\"\n                        }, void 0, false, {\n                            fileName: \"/app/component/calculator-form.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/app/component/calculator-form.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/component/calculator-form.tsx\",\n                lineNumber: 27,\n                columnNumber: 17\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/app/component/calculator-form.tsx\",\n                lineNumber: 33,\n                columnNumber: 17\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"block text-sm font-medium leading-6 text-gray-900 \",\n                        children: \"Second Value\"\n                    }, void 0, false, {\n                        fileName: \"/app/component/calculator-form.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative mt-15 rounded-md shadow-sm\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"price\",\n                            id: \"price\",\n                            className: \"block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6\",\n                            placeholder: \"0\"\n                        }, void 0, false, {\n                            fileName: \"/app/component/calculator-form.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/app/component/calculator-form.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/component/calculator-form.tsx\",\n                lineNumber: 34,\n                columnNumber: 17\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/app/component/calculator-form.tsx\",\n                lineNumber: 40,\n                columnNumber: 17\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_operation_dropdown__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                onChange: onChangeOperationType\n            }, void 0, false, {\n                fileName: \"/app/component/calculator-form.tsx\",\n                lineNumber: 41,\n                columnNumber: 17\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/app/component/calculator-form.tsx\",\n                lineNumber: 42,\n                columnNumber: 17\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-10 inline-block\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \" inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700\",\n                    children: \"Process Operation\"\n                }, void 0, false, {\n                    fileName: \"/app/component/calculator-form.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 21\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/app/component/calculator-form.tsx\",\n                lineNumber: 43,\n                columnNumber: 17\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/component/calculator-form.tsx\",\n        lineNumber: 26,\n        columnNumber: 13\n    }, _this));\n};\n_c = CalculatorForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CalculatorForm);\nvar _c;\n$RefreshReg$(_c, \"CalculatorForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvY2FsY3VsYXRvci1mb3JtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF3RDs7QUFjeEQsR0FBSyxDQUFDQyxjQUFjLEdBQWtDLFFBQVEsUUFBMkIsQ0FBQztRQUFqQ0MsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLE1BQU0sU0FBTkEsTUFBTSxFQUFFQyxPQUFPLFNBQVBBLE9BQU87SUFFOUUsR0FBSyxDQUFDQyxTQUFTLEdBQUcsUUFDdEIsR0FENEIsQ0FBQztRQUNyQkgsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNmLENBQUM7SUFFRCxHQUFLLENBQUNJLHFCQUFxQixHQUFHLFFBQ2xDLEdBRHdDLENBQUMsQ0FFcEM7SUFFRCxNQUFNLDZFQUNHQyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFpQjs7d0ZBQzNCRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBTzs7Z0dBQ2pCQyxDQUFLO3dCQUFFRCxTQUFTLEVBQUMsQ0FBb0Q7a0NBQUMsQ0FBVzs7Ozs7O2dHQUNqRkQsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQXFDOzhHQUMvQ0UsQ0FBSzs0QkFBQ0MsSUFBSSxFQUFDLENBQU07NEJBQUNDLElBQUksRUFBQyxDQUFPOzRCQUFDQyxFQUFFLEVBQUMsQ0FBTzs0QkFBQ0wsU0FBUyxFQUFDLENBQXdNOzRCQUFDTSxXQUFXLEVBQUMsQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBR3BSQyxDQUFFOzs7Ozt3RkFDRlIsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQU87O2dHQUNqQkMsQ0FBSzt3QkFBRUQsU0FBUyxFQUFDLENBQW9EO2tDQUFDLENBQVk7Ozs7OztnR0FDbEZELENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFxQzs4R0FDL0NFLENBQUs7NEJBQUNDLElBQUksRUFBQyxDQUFNOzRCQUFDQyxJQUFJLEVBQUMsQ0FBTzs0QkFBQ0MsRUFBRSxFQUFDLENBQU87NEJBQUNMLFNBQVMsRUFBQyxDQUF3TTs0QkFBQ00sV0FBVyxFQUFDLENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUdwUkMsQ0FBRTs7Ozs7d0ZBQ0ZmLDJEQUFxQjtnQkFBQ0UsUUFBUSxFQUFFSSxxQkFBcUI7Ozs7Ozt3RkFDckRTLENBQUU7Ozs7O3dGQUNGUixDQUFHO2dCQUFFQyxTQUFTLEVBQUMsQ0FBb0I7c0dBQy9CUSxDQUFNO29CQUFDUixTQUFTLEVBQUMsQ0FBNEo7OEJBQUMsQ0FFL0s7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXBCLENBQUM7S0FuQ0tQLGNBQWM7QUFxQ3BCLCtEQUFlQSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudC9jYWxjdWxhdG9yLWZvcm0udHN4P2VhMWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE9wZXJhdGlvblR5cGVEcm9wRG93biBmcm9tIFwiLi9vcGVyYXRpb24tZHJvcGRvd25cIlxuXG5leHBvcnQgaW50ZXJmYWNlIE9wZXJhdGlvblBheWxvYWQge1xuICAgIGZpcnN0VmFsdWU6IG51bWJlcjtcbiAgICBzZWNvbmRWYWx1ZTogbnVtYmVyO1xuICAgIG9wZXJhdGlvbklkOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBDYWxjdWxhdG9yRm9ybVByb3BzIHtcbiAgICBlcnJvcnM6IHN0cmluZ1tdO1xuICAgIG9uQ2hhbmdlOiAoZGF0YTogT3BlcmF0aW9uUGF5bG9hZCkgPT4gdm9pZFxuICAgIGxvYWRpbmc6IGJvb2xlYW5cbn1cblxuY29uc3QgQ2FsY3VsYXRvckZvcm06IFJlYWN0LkZDPENhbGN1bGF0b3JGb3JtUHJvcHM+ID0gKHsgb25DaGFuZ2UsIGVycm9ycywgbG9hZGluZyB9KSA9PiB7XG5cbiAgICBjb25zdCBfb25DaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgIG9uQ2hhbmdlKHt9KVxuICAgIH1cblxuICAgIGNvbnN0IG9uQ2hhbmdlT3BlcmF0aW9uVHlwZSA9ICgpID0+IHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb2wgcHktMjAgXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gbGVhZGluZy02IHRleHQtZ3JheS05MDAgXCI+Rmlyc3QgVmFsdWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG10LTE1IHJvdW5kZWQtbWQgc2hhZG93LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicHJpY2VcIiBpZD1cInByaWNlXCIgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIHJvdW5kZWQtbWQgYm9yZGVyLTAgcHktMS41IHBsLTcgcHItMjAgdGV4dC1ncmF5LTkwMCByaW5nLTEgcmluZy1pbnNldCByaW5nLWdyYXktMzAwIHBsYWNlaG9sZGVyOnRleHQtZ3JheS00MDAgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5zZXQgZm9jdXM6cmluZy1pbmRpZ28tNjAwIHNtOnRleHQtc20gc206bGVhZGluZy02XCIgcGxhY2Vob2xkZXI9XCIwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSBsZWFkaW5nLTYgdGV4dC1ncmF5LTkwMCBcIj5TZWNvbmQgVmFsdWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG10LTE1IHJvdW5kZWQtbWQgc2hhZG93LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicHJpY2VcIiBpZD1cInByaWNlXCIgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIHJvdW5kZWQtbWQgYm9yZGVyLTAgcHktMS41IHBsLTcgcHItMjAgdGV4dC1ncmF5LTkwMCByaW5nLTEgcmluZy1pbnNldCByaW5nLWdyYXktMzAwIHBsYWNlaG9sZGVyOnRleHQtZ3JheS00MDAgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5zZXQgZm9jdXM6cmluZy1pbmRpZ28tNjAwIHNtOnRleHQtc20gc206bGVhZGluZy02XCIgcGxhY2Vob2xkZXI9XCIwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8T3BlcmF0aW9uVHlwZURyb3BEb3duIG9uQ2hhbmdlPXtvbkNoYW5nZU9wZXJhdGlvblR5cGV9Lz5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cIm10LTEwIGlubGluZS1ibG9ja1wiID5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9JyBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNSBweS0zIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHJvdW5kZWQtbWQgdGV4dC13aGl0ZSBiZy1pbmRpZ28tNjAwIGhvdmVyOmJnLWluZGlnby03MDAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvY2VzcyBPcGVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FsY3VsYXRvckZvcm1cbiJdLCJuYW1lcyI6WyJPcGVyYXRpb25UeXBlRHJvcERvd24iLCJDYWxjdWxhdG9yRm9ybSIsIm9uQ2hhbmdlIiwiZXJyb3JzIiwibG9hZGluZyIsIl9vbkNoYW5nZSIsIm9uQ2hhbmdlT3BlcmF0aW9uVHlwZSIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsImlkIiwicGxhY2Vob2xkZXIiLCJiciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/calculator-form.tsx\n");

/***/ })

});