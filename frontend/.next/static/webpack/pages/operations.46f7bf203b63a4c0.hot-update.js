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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _operation_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operation-dropdown */ \"./component/operation-dropdown.tsx\");\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar CalculatorForm = function(param) {\n    var onChange = param.onChange, errors = param.errors, loading = param.loading;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), firstValue = ref[0], setFirstValue = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), secondValue = ref1[0], setSecondValue = ref1[1];\n    var _onChange = function() {\n        onChange({});\n    };\n    var onChangeOperationType = function() {};\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex-col py-20 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"block text-sm font-medium leading-6 text-gray-900 \",\n                        children: \"First Value\"\n                    }, void 0, false, {\n                        fileName: \"/app/component/calculator-form.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative mt-15 rounded-md shadow-sm\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"price\",\n                            id: \"price\",\n                            className: \"block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6\",\n                            placeholder: \"0\"\n                        }, void 0, false, {\n                            fileName: \"/app/component/calculator-form.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/app/component/calculator-form.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/component/calculator-form.tsx\",\n                lineNumber: 31,\n                columnNumber: 17\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/app/component/calculator-form.tsx\",\n                lineNumber: 37,\n                columnNumber: 17\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"block text-sm font-medium leading-6 text-gray-900 \",\n                        children: \"Second Value\"\n                    }, void 0, false, {\n                        fileName: \"/app/component/calculator-form.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative mt-15 rounded-md shadow-sm\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"price\",\n                            id: \"price\",\n                            className: \"block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6\",\n                            placeholder: \"0\"\n                        }, void 0, false, {\n                            fileName: \"/app/component/calculator-form.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 25\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/app/component/calculator-form.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/app/component/calculator-form.tsx\",\n                lineNumber: 38,\n                columnNumber: 17\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/app/component/calculator-form.tsx\",\n                lineNumber: 44,\n                columnNumber: 17\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_operation_dropdown__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onChange: onChangeOperationType\n            }, void 0, false, {\n                fileName: \"/app/component/calculator-form.tsx\",\n                lineNumber: 45,\n                columnNumber: 17\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/app/component/calculator-form.tsx\",\n                lineNumber: 46,\n                columnNumber: 17\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-10 inline-block\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: _onChange,\n                    className: \"inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700\",\n                    children: \"Process Operation\"\n                }, void 0, false, {\n                    fileName: \"/app/component/calculator-form.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 21\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/app/component/calculator-form.tsx\",\n                lineNumber: 47,\n                columnNumber: 17\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/component/calculator-form.tsx\",\n        lineNumber: 30,\n        columnNumber: 13\n    }, _this));\n};\n_s(CalculatorForm, \"wR+B9az/tZ4hh+d6g2hpa01ZXUo=\");\n_c = CalculatorForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CalculatorForm);\nvar _c;\n$RefreshReg$(_c, \"CalculatorForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvY2FsY3VsYXRvci1mb3JtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdDO0FBQ3dCOzs7QUFjeEQsR0FBSyxDQUFDRSxjQUFjLEdBQWtDLFFBQVEsUUFBMkIsQ0FBQztRQUFqQ0MsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLE1BQU0sU0FBTkEsTUFBTSxFQUFFQyxPQUFPLFNBQVBBLE9BQU87O0lBQzlFLEdBQUssQ0FBZ0NMLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQXhDTSxVQUFVLEdBQW9CTixHQUFXLEtBQTdCTyxhQUFhLEdBQUtQLEdBQVc7SUFDaEQsR0FBSyxDQUFrQ0EsSUFBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsR0FBMUNRLFdBQVcsR0FBcUJSLElBQVcsS0FBOUJTLGNBQWMsR0FBS1QsSUFBVztJQUdsRCxHQUFLLENBQUNVLFNBQVMsR0FBRyxRQUN0QixHQUQ0QixDQUFDO1FBQ3JCUCxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUVELEdBQUssQ0FBQ1EscUJBQXFCLEdBQUcsUUFDbEMsR0FEd0MsQ0FBQyxDQUVwQztJQUVELE1BQU0sNkVBQ0dDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQWlCOzt3RkFDM0JELENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFPOztnR0FDakJDLENBQUs7d0JBQUVELFNBQVMsRUFBQyxDQUFvRDtrQ0FBQyxDQUFXOzs7Ozs7Z0dBQ2pGRCxDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBcUM7OEdBQy9DRSxDQUFLOzRCQUFDQyxJQUFJLEVBQUMsQ0FBTTs0QkFBQ0MsSUFBSSxFQUFDLENBQU87NEJBQUNDLEVBQUUsRUFBQyxDQUFPOzRCQUFDTCxTQUFTLEVBQUMsQ0FBd007NEJBQUNNLFdBQVcsRUFBQyxDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFHcFJDLENBQUU7Ozs7O3dGQUNGUixDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBTzs7Z0dBQ2pCQyxDQUFLO3dCQUFFRCxTQUFTLEVBQUMsQ0FBb0Q7a0NBQUMsQ0FBWTs7Ozs7O2dHQUNsRkQsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQXFDOzhHQUMvQ0UsQ0FBSzs0QkFBQ0MsSUFBSSxFQUFDLENBQU07NEJBQUNDLElBQUksRUFBQyxDQUFPOzRCQUFDQyxFQUFFLEVBQUMsQ0FBTzs0QkFBQ0wsU0FBUyxFQUFDLENBQXdNOzRCQUFDTSxXQUFXLEVBQUMsQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBR3BSQyxDQUFFOzs7Ozt3RkFDRm5CLDJEQUFxQjtnQkFBQ0UsUUFBUSxFQUFFUSxxQkFBcUI7Ozs7Ozt3RkFDckRTLENBQUU7Ozs7O3dGQUNGUixDQUFHO2dCQUFFQyxTQUFTLEVBQUMsQ0FBb0I7c0dBQy9CUSxDQUFNO29CQUFDQyxPQUFPLEVBQUVaLFNBQVM7b0JBQUVHLFNBQVMsRUFBQyxDQUEySjs4QkFBQyxDQUVsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJcEIsQ0FBQztHQXRDS1gsY0FBYztLQUFkQSxjQUFjO0FBd0NwQiwrREFBZUEsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnQvY2FsY3VsYXRvci1mb3JtLnRzeD9lYTFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgT3BlcmF0aW9uVHlwZURyb3BEb3duIGZyb20gXCIuL29wZXJhdGlvbi1kcm9wZG93blwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgT3BlcmF0aW9uUGF5bG9hZCB7XG4gICAgZmlyc3RWYWx1ZTogbnVtYmVyO1xuICAgIHNlY29uZFZhbHVlOiBudW1iZXI7XG4gICAgb3BlcmF0aW9uSWQ6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIENhbGN1bGF0b3JGb3JtUHJvcHMge1xuICAgIGVycm9yczogc3RyaW5nW107XG4gICAgb25DaGFuZ2U6IChkYXRhOiBPcGVyYXRpb25QYXlsb2FkKSA9PiB2b2lkXG4gICAgbG9hZGluZzogYm9vbGVhblxufVxuXG5jb25zdCBDYWxjdWxhdG9yRm9ybTogUmVhY3QuRkM8Q2FsY3VsYXRvckZvcm1Qcm9wcz4gPSAoeyBvbkNoYW5nZSwgZXJyb3JzLCBsb2FkaW5nIH0pID0+IHtcbiAgICBjb25zdCBbZmlyc3RWYWx1ZSwgc2V0Rmlyc3RWYWx1ZV0gID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCBbc2Vjb25kVmFsdWUsIHNldFNlY29uZFZhbHVlXSAgPSB1c2VTdGF0ZSgwKVxuXG5cbiAgICBjb25zdCBfb25DaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgIG9uQ2hhbmdlKHt9KVxuICAgIH1cblxuICAgIGNvbnN0IG9uQ2hhbmdlT3BlcmF0aW9uVHlwZSA9ICgpID0+IHtcblxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtY29sIHB5LTIwIFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIGxlYWRpbmctNiB0ZXh0LWdyYXktOTAwIFwiPkZpcnN0IFZhbHVlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtdC0xNSByb3VuZGVkLW1kIHNoYWRvdy1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInByaWNlXCIgaWQ9XCJwcmljZVwiIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCByb3VuZGVkLW1kIGJvcmRlci0wIHB5LTEuNSBwbC03IHByLTIwIHRleHQtZ3JheS05MDAgcmluZy0xIHJpbmctaW5zZXQgcmluZy1ncmF5LTMwMCBwbGFjZWhvbGRlcjp0ZXh0LWdyYXktNDAwIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluc2V0IGZvY3VzOnJpbmctaW5kaWdvLTYwMCBzbTp0ZXh0LXNtIHNtOmxlYWRpbmctNlwiIHBsYWNlaG9sZGVyPVwiMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gbGVhZGluZy02IHRleHQtZ3JheS05MDAgXCI+U2Vjb25kIFZhbHVlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtdC0xNSByb3VuZGVkLW1kIHNoYWRvdy1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInByaWNlXCIgaWQ9XCJwcmljZVwiIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCByb3VuZGVkLW1kIGJvcmRlci0wIHB5LTEuNSBwbC03IHByLTIwIHRleHQtZ3JheS05MDAgcmluZy0xIHJpbmctaW5zZXQgcmluZy1ncmF5LTMwMCBwbGFjZWhvbGRlcjp0ZXh0LWdyYXktNDAwIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluc2V0IGZvY3VzOnJpbmctaW5kaWdvLTYwMCBzbTp0ZXh0LXNtIHNtOmxlYWRpbmctNlwiIHBsYWNlaG9sZGVyPVwiMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgPE9wZXJhdGlvblR5cGVEcm9wRG93biBvbkNoYW5nZT17b25DaGFuZ2VPcGVyYXRpb25UeXBlfS8+XG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJtdC0xMCBpbmxpbmUtYmxvY2tcIiA+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17X29uQ2hhbmdlfSBjbGFzc05hbWU9J2lubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC01IHB5LTMgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gcm91bmRlZC1tZCB0ZXh0LXdoaXRlIGJnLWluZGlnby02MDAgaG92ZXI6YmctaW5kaWdvLTcwMCc+XG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9jZXNzIE9wZXJhdGlvblxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdG9yRm9ybVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiT3BlcmF0aW9uVHlwZURyb3BEb3duIiwiQ2FsY3VsYXRvckZvcm0iLCJvbkNoYW5nZSIsImVycm9ycyIsImxvYWRpbmciLCJmaXJzdFZhbHVlIiwic2V0Rmlyc3RWYWx1ZSIsInNlY29uZFZhbHVlIiwic2V0U2Vjb25kVmFsdWUiLCJfb25DaGFuZ2UiLCJvbkNoYW5nZU9wZXJhdGlvblR5cGUiLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJpZCIsInBsYWNlaG9sZGVyIiwiYnIiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/calculator-form.tsx\n");

/***/ })

});