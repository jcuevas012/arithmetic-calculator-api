"use strict";
exports.id = 236;
exports.ids = [236];
exports.modules = {

/***/ 7236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const useRequest = (options)=>{
    const { 0: errors1 , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const request = async (params = {})=>{
        try {
            setErrors(null);
            const response = await (axios__WEBPACK_IMPORTED_MODULE_1___default())[options.method](options.url, {
                ...options.body,
                ...params
            });
            if (options.onSuccess) {
                options.onSuccess(response.data);
            }
        } catch (error) {
            var ref, ref1;
            const errors = (ref = error.response) === null || ref === void 0 ? void 0 : (ref1 = ref.data) === null || ref1 === void 0 ? void 0 : ref1.errors;
            setErrors(errors && errors.map((err, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: err.message
                }, i)
            ));
        }
    };
    return [
        request,
        errors1
    ];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRequest);


/***/ })

};
;