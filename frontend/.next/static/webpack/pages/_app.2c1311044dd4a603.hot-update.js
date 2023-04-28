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

/***/ "./utils/session-middleware.ts":
/*!*************************************!*\
  !*** ./utils/session-middleware.ts ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSessionInfo\": function() { return /* binding */ getSessionInfo; }\n/* harmony export */ });\n/* harmony import */ var _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./utils/config.ts\");\n/* harmony import */ var _utils_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/client */ \"./utils/client.ts\");\n/* harmony import */ var iron_session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! iron-session */ \"./node_modules/iron-session/dist/index.mjs\");\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction fetchUser(client) {\n    return _fetchUser.apply(this, arguments);\n}\nfunction _fetchUser() {\n    _fetchUser = _asyncToGenerator(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(client) {\n        var data;\n        return _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    _ctx.next = 3;\n                    return client.get('/api/auth/current-user');\n                case 3:\n                    data = _ctx.sent.data;\n                    console.log(data);\n                    console.log('----->>> Current fetchUser >');\n                    return _ctx.abrupt(\"return\", data.currentUser);\n                case 9:\n                    _ctx.prev = 9;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    console.log('Error clientFetch with axios');\n                case 12:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                9\n            ]\n        ]);\n    }));\n    return _fetchUser.apply(this, arguments);\n}\nfunction getSessionInfo(ctx) {\n    return _getSessionInfo.apply(this, arguments);\n}\nfunction _getSessionInfo() {\n    _getSessionInfo = _asyncToGenerator(_app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(ctx) {\n        var res, req, client, currentUser, session;\n        return _app_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    res = ctx.res;\n                    req = ctx.req;\n                    client = (0,_utils_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ctx);\n                    ;\n                    if (true) {\n                        _ctx.next = 11;\n                        break;\n                    }\n                    _ctx.next = 7;\n                    return (0,iron_session__WEBPACK_IMPORTED_MODULE_3__.getIronSession)(req, res, _config__WEBPACK_IMPORTED_MODULE_1__.ironOptions);\n                case 7:\n                    session = _ctx.sent;\n                    currentUser = session.user;\n                    _ctx.next = 14;\n                    break;\n                case 11:\n                    _ctx.next = 13;\n                    return fetchUser(client);\n                case 13:\n                    currentUser = _ctx.sent;\n                case 14:\n                    return _ctx.abrupt(\"return\", [\n                        currentUser,\n                        client\n                    ]);\n                case 15:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _getSessionInfo.apply(this, arguments);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9zZXNzaW9uLW1pZGRsZXdhcmUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVzQztBQUNHO0FBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUc5QkcsU0FBUyxDQUFDQyxNQUFXO1dBQXJCRCxVQUFTOztTQUFUQSxVQUFTO0lBQVRBLFVBQVMscUlBQXhCLFFBQVEsU0FBaUJDLE1BQVcsRUFBRSxDQUFDO1lBRXZCQyxJQUFJOzs7Ozs7MkJBQVdELE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLENBQXdCOztvQkFBbERELElBQUksYUFBSkEsSUFBSTtvQkFDWkUsT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUk7b0JBQ2hCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUE4QjtpREFDbkNILElBQUksQ0FBQ0ksV0FBVzs7OztvQkFFdkJGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQThCOzs7Ozs7Ozs7OztJQUVsRCxDQUFDO1dBVGNMLFVBQVM7O0FBYWpCLFNBQWVPLGNBQWMsQ0FBQ0MsR0FBb0I7V0FBbkNELGVBQWM7O1NBQWRBLGVBQWM7SUFBZEEsZUFBYyxxSUFBN0IsUUFBUSxTQUFzQkMsR0FBb0IsRUFBRSxDQUFDO1lBQ2xEQyxHQUFHLEVBQ0hDLEdBQUcsRUFDSFQsTUFBTSxFQUNSSyxXQUFXLEVBR0xLLE9BQU87Ozs7b0JBTlhGLEdBQUcsR0FBR0QsR0FBRyxDQUFDQyxHQUFHO29CQUNiQyxHQUFHLEdBQUdGLEdBQUcsQ0FBQ0UsR0FBRztvQkFDYlQsTUFBTSxHQUFHSCx5REFBVyxDQUFDVSxHQUFHOzs0QkFHRzs7Ozs7MkJBQ1BULDREQUFjLENBQUNXLEdBQUcsRUFBRUQsR0FBRyxFQUFFWixnREFBVzs7b0JBQXBEYyxPQUFPO29CQUNiTCxXQUFXLEdBQUdLLE9BQU8sQ0FBQ0MsSUFBSTs7Ozs7MkJBRU5aLFNBQVMsQ0FBQ0MsTUFBTTs7b0JBQXBDSyxXQUFXOztpREFHUixDQUFDQTt3QkFBQUEsV0FBVzt3QkFBRUwsTUFBTTtvQkFBQSxDQUFDOzs7Ozs7SUFDaEMsQ0FBQztXQWRxQk0sZUFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9zZXNzaW9uLW1pZGRsZXdhcmUudHM/YmNiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IE5leHRQYWdlQ29udGV4dCB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBpcm9uT3B0aW9ucyB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IGJ1aWxkQ2xpZW50IGZyb20gXCIuLi91dGlscy9jbGllbnRcIjtcbmltcG9ydCB7IGdldElyb25TZXNzaW9uIH0gZnJvbSBcImlyb24tc2Vzc2lvblwiO1xuXG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoVXNlcihjbGllbnQ6IGFueSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LmdldCgnL2FwaS9hdXRoL2N1cnJlbnQtdXNlcicpXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIGNvbnNvbGUubG9nKCctLS0tLT4+PiBDdXJyZW50IGZldGNoVXNlciA+JylcbiAgICAgICAgcmV0dXJuIGRhdGEuY3VycmVudFVzZXJcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGNsaWVudEZldGNoIHdpdGggYXhpb3MnKSAgICAgICAgXG4gICAgfVxufVxuXG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlc3Npb25JbmZvKGN0eDogTmV4dFBhZ2VDb250ZXh0KSB7XG4gICAgY29uc3QgcmVzID0gY3R4LnJlcyFcbiAgICBjb25zdCByZXEgPSBjdHgucmVxIVxuICAgIGNvbnN0IGNsaWVudCA9IGJ1aWxkQ2xpZW50KGN0eClcbiAgICBsZXQgY3VycmVudFVzZXJcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0SXJvblNlc3Npb24ocmVxLCByZXMsIGlyb25PcHRpb25zKTtcbiAgICAgICAgY3VycmVudFVzZXIgPSBzZXNzaW9uLnVzZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY3VycmVudFVzZXIgPSBhd2FpdCBmZXRjaFVzZXIoY2xpZW50KVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gW2N1cnJlbnRVc2VyLCBjbGllbnRdXG59Il0sIm5hbWVzIjpbImlyb25PcHRpb25zIiwiYnVpbGRDbGllbnQiLCJnZXRJcm9uU2Vzc2lvbiIsImZldGNoVXNlciIsImNsaWVudCIsImRhdGEiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFVzZXIiLCJnZXRTZXNzaW9uSW5mbyIsImN0eCIsInJlcyIsInJlcSIsInNlc3Npb24iLCJ1c2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/session-middleware.ts\n");

/***/ })

});