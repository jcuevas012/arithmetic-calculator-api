"use strict";
(() => {
var exports = {};
exports.id = 394;
exports.ids = [394];
exports.modules = {

/***/ 5216:
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
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./component/balance.tsx



const Balance = ()=>{
    const { 0: balance , 1: setBalance  } = (0,external_react_.useState)(0);
    const fetchData = async ()=>{
        try {
            const { data  } = await external_axios_default().get('/api/current-balance');
            setBalance(data.balance | 0);
        } catch (error) {}
    };
    (0,external_react_.useEffect)(()=>{
        fetchData();
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("article", {
            className: "rounded-lg border border-gray-100 bg-white p-6",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-sm text-gray-500",
                                children: "Balance"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "text-2xl font-medium text-gray-900",
                                children: [
                                    "$ ",
                                    balance
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "rounded-full bg-blue-100 p-3 text-blue-600",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-8 w-8",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                            })
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const balance = (Balance);

;// CONCATENATED MODULE: ./component/operation-dropdown.tsx



const OperationTypeDropDown = ({ onChange  })=>{
    const { 0: operationTypes , 1: setOperationTypes  } = (0,external_react_.useState)([]);
    const fetchData = async ()=>{
        try {
            const { data  } = await external_axios_default().get('/api/operations/types');
            setOperationTypes(data || []);
        } catch (error) {
            console.log('Error loading data', error);
        }
    };
    const _onChange = ({ target: { value  }  })=>{
        onChange(value);
    };
    (0,external_react_.useEffect)(()=>{
        fetchData();
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex-col py-20 ",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                children: "Operation Type:"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("select", {
                name: "cars",
                id: "cars",
                onChange: _onChange,
                children: operationTypes.length && operationTypes.map((operationType)=>{
                    /*#__PURE__*/ return jsx_runtime_.jsx("option", {
                        value: operationType === null || operationType === void 0 ? void 0 : operationType.id,
                        children: operationType === null || operationType === void 0 ? void 0 : operationType.type
                    }, operationType.id);
                })
            })
        ]
    }));
};
/* harmony default export */ const operation_dropdown = (OperationTypeDropDown);

;// CONCATENATED MODULE: ./component/calculator-form.tsx


const CalculatorForm = ({ currentUser  })=>{
    const onChange = ()=>{};
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
                            type: "text",
                            name: "price",
                            id: "price",
                            className: "block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                            placeholder: "0"
                        })
                    })
                ]
            }),
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
                            type: "text",
                            name: "price",
                            id: "price",
                            className: "block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                            placeholder: "0"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(operation_dropdown, {
                onChange: onChange
            })
        ]
    }));
};
/* harmony default export */ const calculator_form = (CalculatorForm);

;// CONCATENATED MODULE: ./pages/operations/index.tsx




const Records = ()=>{
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
                className: "my-9 max-w-md",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(balance, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(calculator_form, {})
                ]
            })
        ]
    }));
};
/* harmony default export */ const operations = (Records);


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

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
var __webpack_exports__ = (__webpack_exec__(5216));
module.exports = __webpack_exports__;

})();