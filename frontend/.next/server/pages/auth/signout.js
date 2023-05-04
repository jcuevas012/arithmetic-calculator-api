"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/auth/signout";
exports.ids = ["pages/auth/signout"];
exports.modules = {

/***/ "./hooks/use-request.tsx":
/*!*******************************!*\
  !*** ./hooks/use-request.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst useRequest = (options)=>{\n    const { 0: errors1 , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const { 0: isLoading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const request = async (params = {})=>{\n        try {\n            setErrors(null);\n            setLoading(true);\n            const response = await (axios__WEBPACK_IMPORTED_MODULE_1___default())[options.method](options.url, {\n                ...options.body,\n                ...params\n            });\n            if (options.onSuccess) {\n                setLoading(false);\n                options.onSuccess(response.data);\n            }\n        } catch (error) {\n            var ref, ref1;\n            setLoading(false);\n            const errors = (ref = error.response) === null || ref === void 0 ? void 0 : (ref1 = ref.data) === null || ref1 === void 0 ? void 0 : ref1.errors;\n            setErrors(errors && errors.map((err, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: err.message\n                }, i, false, {\n                    fileName: \"/app/hooks/use-request.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 69\n                }, undefined)\n            ));\n        }\n    };\n    return [\n        request,\n        errors1,\n        isLoading\n    ];\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRequest);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2UtcmVxdWVzdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUI7QUFDcUI7QUFTOUMsS0FBSyxDQUFDRSxVQUFVLElBQUlDLE9BQXdCLEdBQUssQ0FBQztJQUM5QyxLQUFLLE1BQUVDLE9BQU0sTUFBRUMsU0FBUyxNQUFJSiwrQ0FBUTtJQUNwQyxLQUFLLE1BQUVLLFNBQVMsTUFBRUMsVUFBVSxNQUFJTiwrQ0FBUSxDQUFDLEtBQUs7SUFFOUMsS0FBSyxDQUFDTyxPQUFPLFVBQVVDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBSyxDQUFDO1FBQ3BDLEdBQUcsQ0FBQyxDQUFDO1lBQ0RKLFNBQVMsQ0FBQyxJQUFJO1lBQ2RFLFVBQVUsQ0FBQyxJQUFJO1lBQ2YsS0FBSyxDQUFDRyxRQUFRLEdBQUcsS0FBSyxDQUFDViw4Q0FBSyxDQUFDRyxPQUFPLENBQUNRLE1BQU0sRUFBRVIsT0FBTyxDQUFDUyxHQUFHLEVBQUUsQ0FBQzttQkFBSVQsT0FBTyxDQUFDVSxJQUFJO21CQUFLSixNQUFNO1lBQUEsQ0FBQztZQUV2RixFQUFFLEVBQUVOLE9BQU8sQ0FBQ1csU0FBUyxFQUFFLENBQUM7Z0JBQ3BCUCxVQUFVLENBQUMsS0FBSztnQkFDaEJKLE9BQU8sQ0FBQ1csU0FBUyxDQUFDSixRQUFRLENBQUNLLElBQUk7WUFDbkMsQ0FBQztRQUVMLENBQUMsQ0FBQyxLQUFLLEVBQUVDLEtBQUssRUFBTyxDQUFDO2dCQUVIQSxHQUFjO1lBRDdCVCxVQUFVLENBQUMsS0FBSztZQUNoQixLQUFLLENBQUNILE1BQU0sSUFBR1ksR0FBYyxHQUFkQSxLQUFLLENBQUNOLFFBQVEsY0FBZE0sR0FBYyxLQUFkQSxJQUFJLENBQUpBLENBQW9CLEdBQXBCQSxJQUFJLENBQUpBLENBQW9CLFdBQXBCQSxHQUFjLENBQUVELElBQUksdUJBQXBCQyxJQUFJLENBQUpBLENBQW9CLEdBQXBCQSxJQUFJLENBQUpBLENBQW9CLFFBQUVaLE1BQU07WUFDM0NDLFNBQVMsQ0FBQ0QsTUFBTSxJQUFJQSxNQUFNLENBQUNhLEdBQUcsRUFBRUMsR0FBUSxFQUFFQyxDQUFTLCtFQUFNQyxDQUFHOzhCQUFVRixHQUFHLENBQUNHLE9BQU87bUJBQWZGLENBQUM7Ozs7OztRQUN2RSxDQUFDO0lBQ0wsQ0FBQztJQUVELE1BQU0sQ0FBQyxDQUFDWDtRQUFBQSxPQUFPO1FBQUVKLE9BQU07UUFBRUUsU0FBUztJQUFBLENBQUM7QUFDdkMsQ0FBQztBQUVELGlFQUFlSixVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXJpdGhtZXRpYy13ZWItY2xpZW50Ly4vaG9va3MvdXNlLXJlcXVlc3QudHN4P2FmNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgUmVhY3RFbGVtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbnRlcmZhY2UgVXNlUmVxdWVzdFByb3BzIHtcbiAgICB1cmw6IHN0cmluZ1xuICAgIG1ldGhvZDogJ3Bvc3QnIHwgJ3B1dCcgfCAnZGVsZXRlJ1xuICAgIGJvZHk6IGFueVxuICAgIG9uU3VjY2VzczogRnVuY3Rpb25cbn1cblxuY29uc3QgdXNlUmVxdWVzdCA9IChvcHRpb25zOiBVc2VSZXF1ZXN0UHJvcHMpID0+IHtcbiAgICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGU8UmVhY3RFbGVtZW50IHwgbnVsbD4oKVxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICBjb25zdCByZXF1ZXN0ID0gYXN5bmMgKHBhcmFtcyA9IHt9KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXRFcnJvcnMobnVsbClcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3Nbb3B0aW9ucy5tZXRob2RdKG9wdGlvbnMudXJsLCB7IC4uLm9wdGlvbnMuYm9keSwgLi4ucGFyYW1zfSlcblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMub25TdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgICAgICAgICBvcHRpb25zLm9uU3VjY2VzcyhyZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICBjb25zdCBlcnJvcnMgPSBlcnJvci5yZXNwb25zZT8uZGF0YT8uZXJyb3JzXG4gICAgICAgICAgICBzZXRFcnJvcnMoZXJyb3JzICYmIGVycm9ycy5tYXAoKGVycjogYW55LCBpOiBudW1iZXIpID0+IDxkaXYga2V5PXtpfT57ZXJyLm1lc3NhZ2V9PC9kaXY+KSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBbcmVxdWVzdCwgZXJyb3JzLCBpc0xvYWRpbmddXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJlcXVlc3RcbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVN0YXRlIiwidXNlUmVxdWVzdCIsIm9wdGlvbnMiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVxdWVzdCIsInBhcmFtcyIsInJlc3BvbnNlIiwibWV0aG9kIiwidXJsIiwiYm9keSIsIm9uU3VjY2VzcyIsImRhdGEiLCJlcnJvciIsIm1hcCIsImVyciIsImkiLCJkaXYiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/use-request.tsx\n");

/***/ }),

/***/ "./pages/auth/signout.tsx":
/*!********************************!*\
  !*** ./pages/auth/signout.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-request */ \"./hooks/use-request.tsx\");\n\n\n\n\nconst SignOutPage = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [request] = (0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n        method: 'post',\n        url: '/api/auth/sign-out',\n        body: {},\n        onSuccess: ()=>router.push('/')\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        //@ts-ignore\n        request();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Signing out ...\"\n    }, void 0, false, {\n        fileName: \"/app/pages/auth/signout.tsx\",\n        lineNumber: 20,\n        columnNumber: 12\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignOutPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL3NpZ25vdXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUN1QztBQUNOO0FBQ2U7QUFFaEQsS0FBSyxDQUFDRyxXQUFXLE9BQW1CLENBQUM7SUFDakMsS0FBSyxDQUFDQyxNQUFNLEdBQUdKLHNEQUFTO0lBQ3hCLEtBQUssRUFBRUssT0FBTyxJQUFJSCw4REFBVSxDQUFDLENBQUM7UUFDMUJJLE1BQU0sRUFBRSxDQUFNO1FBQ2RDLEdBQUcsRUFBRSxDQUFvQjtRQUN6QkMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNSQyxTQUFTLE1BQVFMLE1BQU0sQ0FBQ00sSUFBSSxDQUFDLENBQUc7SUFDcEMsQ0FBQztJQUVEVCxnREFBUyxLQUFPLENBQUM7UUFDYixFQUFZO1FBQ1pJLE9BQU87SUFDWCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsTUFBTSw2RUFBRU0sQ0FBQztrQkFBQyxDQUFlOzs7Ozs7QUFDN0IsQ0FBQztBQUVELGlFQUFlUixXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXJpdGhtZXRpYy13ZWItY2xpZW50Ly4vcGFnZXMvYXV0aC9zaWdub3V0LnRzeD9hNmMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB1c2VSZXF1ZXN0IGZyb20gJy4uLy4uL2hvb2tzL3VzZS1yZXF1ZXN0J1xuXG5jb25zdCBTaWduT3V0UGFnZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCBbcmVxdWVzdF0gPSB1c2VSZXF1ZXN0KHtcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIHVybDogJy9hcGkvYXV0aC9zaWduLW91dCcsXG4gICAgICAgIGJvZHk6IHt9LFxuICAgICAgICBvblN1Y2Nlc3M6ICgpID0+IHJvdXRlci5wdXNoKCcvJyksXG4gICAgfSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICByZXF1ZXN0KClcbiAgICB9LCBbXSlcblxuICAgIHJldHVybiA8cD5TaWduaW5nIG91dCAuLi48L3A+XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25PdXRQYWdlXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlUmVxdWVzdCIsIlNpZ25PdXRQYWdlIiwicm91dGVyIiwicmVxdWVzdCIsIm1ldGhvZCIsInVybCIsImJvZHkiLCJvblN1Y2Nlc3MiLCJwdXNoIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/auth/signout.tsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/auth/signout.tsx"));
module.exports = __webpack_exports__;

})();