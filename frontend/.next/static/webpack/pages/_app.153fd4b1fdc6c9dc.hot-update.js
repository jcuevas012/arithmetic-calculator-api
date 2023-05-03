"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./component/header/header.tsx":
/*!*************************************!*\
  !*** ./component/header/header.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _this = undefined;\nvar Header = function(param) {\n    var currentUser = param.currentUser;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-between nav-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        width: 20,\n                        height: 20,\n                        className: \"h-8 w-auto sm:h-10\",\n                        src: \"https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg\",\n                        alt: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/app/component/header/header.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 29\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/app/component/header/header.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 25\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/app/component/header/header.tsx\",\n                lineNumber: 11,\n                columnNumber: 21\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: !currentUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: '/auth/signin',\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900\",\n                                children: [\n                                    \"Sign in \",\n                                    '  '\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/app/component/header/header.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 37\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/app/component/header/header.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 33\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: '/auth/signup',\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700\",\n                                children: \"Sign up\"\n                            }, void 0, false, {\n                                fileName: \"/app/component/header/header.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 37\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/app/component/header/header.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 33\n                        }, _this)\n                    ]\n                }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/auth/signout\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700\",\n                        children: [\n                            ' ',\n                            \" Sign out\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/app/component/header/header.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 37\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/app/component/header/header.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 33\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/app/component/header/header.tsx\",\n                lineNumber: 23,\n                columnNumber: 21\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/app/component/header/header.tsx\",\n        lineNumber: 10,\n        columnNumber: 13\n    }, _this));\n};\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvaGVhZGVyL2hlYWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEI7QUFDRjs7QUFNNUIsR0FBSyxDQUFDRSxNQUFNLEdBQStCLFFBQVEsUUFBYSxDQUFDO1FBQW5CQyxXQUFXLFNBQVhBLFdBQVc7SUFDckQsTUFBTSw2RUFDR0MsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBb0M7O3dGQUMxQ0QsQ0FBRztzR0FDQ0gsa0RBQUk7b0JBQUNLLElBQUksRUFBQyxDQUFHOzBHQUNUTixtREFBSzt3QkFDRk8sS0FBSyxFQUFFLEVBQUU7d0JBQ1RDLE1BQU0sRUFBRSxFQUFFO3dCQUNWSCxTQUFTLEVBQUMsQ0FBb0I7d0JBQzlCSSxHQUFHLEVBQUMsQ0FBK0Q7d0JBQ25FQyxHQUFHLEVBQUMsQ0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFLckJOLENBQUc7MkJBQ0VELFdBQVc7O29HQUVKRixrREFBSTs0QkFBQ0ssSUFBSSxFQUFFLENBQWM7a0hBQ3JCSyxDQUFDO2dDQUFDTixTQUFTLEVBQUMsQ0FBMkU7O29DQUFDLENBQzdFO29DQUFDLENBQUk7Ozs7Ozs7Ozs7OztvR0FHcEJKLGtEQUFJOzRCQUFDSyxJQUFJLEVBQUUsQ0FBYztrSEFDckJLLENBQUM7Z0NBQ0VOLFNBQVMsRUFBQyxDQUE0TDswQ0FDek0sQ0FFRDs7Ozs7Ozs7Ozs7OytHQUlISixrREFBSTtvQkFBQ0ssSUFBSSxFQUFDLENBQWU7MEdBQ3JCSyxDQUFDO3dCQUNDTixTQUFTLEVBQUMsQ0FBNEw7OzRCQUVwTSxDQUFHOzRCQUFDLENBQ1Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV3BDLENBQUM7S0FoREtILE1BQU07QUFrRFosK0RBQWVBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L2hlYWRlci9oZWFkZXIudHN4P2YwZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmludGVyZmFjZSBDdXJyZW50VXNlclByb3BzIHtcbiAgICBjdXJyZW50VXNlcjogeyBlbWFpbDogc3RyaW5nIH1cbn1cblxuY29uc3QgSGVhZGVyOiBSZWFjdC5GQzxDdXJyZW50VXNlclByb3BzPiA9ICh7IGN1cnJlbnRVc2VyIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBuYXYtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naC04IHctYXV0byBzbTpoLTEwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9J2h0dHBzOi8vdGFpbHdpbmR1aS5jb20vaW1nL2xvZ29zL3dvcmtmbG93LW1hcmstaW5kaWdvLTYwMC5zdmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nSG9tZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyFjdXJyZW50VXNlciA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL2F1dGgvc2lnbmluJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J3doaXRlc3BhY2Utbm93cmFwIHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtZ3JheS05MDAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpZ24gaW4geycgICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9hdXRoL3NpZ251cCd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21sLTggd2hpdGVzcGFjZS1ub3dyYXAgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTQgcHktMiBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQtbWQgc2hhZG93LXNtIHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGJnLWluZGlnby02MDAgaG92ZXI6YmctaW5kaWdvLTcwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaWduIHVwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9hdXRoL3NpZ25vdXQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbWwtOCB3aGl0ZXNwYWNlLW5vd3JhcCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNCBweS0yIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcm91bmRlZC1tZCBzaGFkb3ctc20gdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgYmctaW5kaWdvLTYwMCBob3ZlcjpiZy1pbmRpZ28tNzAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9IFNpZ24gb3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz4pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgKVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJIZWFkZXIiLCJjdXJyZW50VXNlciIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsImFsdCIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/header/header.tsx\n");

/***/ })

});