"use strict";
(() => {
var exports = {};
exports.id = 394;
exports.ids = [394];
exports.modules = {

/***/ 2128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Errors = ({ errors  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "text-sm text-red-800",
        children: Array.isArray(errors) && errors.length ? errors.map((err, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: err
            }, i)
        ) : ''
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Errors);


/***/ }),

/***/ 4842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ operations)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./component/balance.tsx
var balance = __webpack_require__(3340);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./component/operation-dropdown.tsx
var operation_dropdown = __webpack_require__(9482);
;// CONCATENATED MODULE: ./component/calculator-form.tsx



const CalculatorForm = ({ onChange , errors , loading  })=>{
    const { 0: firstValue , 1: setFirstValue  } = (0,external_react_.useState)(0);
    const { 0: secondValue , 1: setSecondValue  } = (0,external_react_.useState)(0);
    const { 0: operationId , 1: setOperationId  } = (0,external_react_.useState)('');
    const _onChange = ()=>{
        onChange({
            firstValue,
            secondValue,
            operationId
        });
    };
    const onChangeOperationType = (value)=>{
        setOperationId(value);
    };
    const isValidPayload = ()=>!!operationId && !!firstValue && !!secondValue
    ;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex-col py-20 ",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-10",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: "block text-sm font-medium leading-6 text-gray-900 ",
                        children: "First Value"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "relative mt-15 rounded-md shadow-sm",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            value: firstValue,
                            onChange: ({ target: { value  }  })=>setFirstValue(value ? parseInt(value) : 0)
                            ,
                            type: "text",
                            name: "price",
                            id: "price",
                            className: "block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                            placeholder: "0"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-10",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: "block text-sm font-medium leading-6 text-gray-900 ",
                        children: "Second Value"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "relative mt-15 rounded-md shadow-sm",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            value: secondValue,
                            onChange: ({ target: { value  }  })=>setSecondValue(value ? parseInt(value) : 0)
                            ,
                            type: "text",
                            name: "price",
                            id: "price",
                            className: "block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                            placeholder: "0"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx(operation_dropdown/* default */.Z, {
                onChange: onChangeOperationType
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-10 inline-block justify-center align-middle content-center items-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    onClick: _onChange,
                    disabled: !isValidPayload(),
                    className: isValidPayload() ? 'inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700' : 'no-cursor disabled:opacity-50 inline-flex items-center justify-center px-5 py-3 bg-gray hover:bg-gray-100 text-gray-800  py-2 px-4  rounded shadow',
                    children: "Process Operation"
                })
            })
        ]
    }));
};
/* harmony default export */ const calculator_form = (CalculatorForm);

// EXTERNAL MODULE: ./hooks/use-request.tsx
var use_request = __webpack_require__(7236);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./component/error.tsx
var error = __webpack_require__(2128);
// EXTERNAL MODULE: ./utils/with-auth.tsx + 1 modules
var with_auth = __webpack_require__(7425);
;// CONCATENATED MODULE: ./pages/operations/index.tsx








const OperationPage = ()=>{
    const router = (0,router_.useRouter)();
    const [request, errors, isLoading] = (0,use_request/* default */.Z)({
        method: 'post',
        url: '/api/operations',
        onSuccess: (data)=>{
            router.push({
                pathname: '/operations/success',
                query: {
                    operationResponse: data.operationResponse
                }
            });
        }
    });
    const onChange = async (data)=>{
        // @ts-ignore
        await request(data);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Arithmetic Operation App - Operation"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "max-w-7xl mx-auto h-screen py-12 px-4 sm:px-6 ",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "py-5 ",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(balance/* default */.Z, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(calculator_form, {
                        onChange: onChange,
                        loading: isLoading,
                        errors: errors
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(error/* default */.Z, {
                        errors: errors
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const operations = ((0,with_auth/* withAuth */.Q)(OperationPage));


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,236,340,425,482], () => (__webpack_exec__(4842)));
module.exports = __webpack_exports__;

})();