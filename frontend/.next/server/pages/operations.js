"use strict";
(() => {
var exports = {};
exports.id = 394;
exports.ids = [394];
exports.modules = {

/***/ 6097:
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
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
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
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                name: "cars",
                id: "cars",
                onChange: _onChange,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        children: " Select Operation Type "
                    }),
                    operationTypes.length && operationTypes.map((operationType)=>{
                        /*#__PURE__*/ return jsx_runtime_.jsx("option", {
                            value: operationType === null || operationType === void 0 ? void 0 : operationType.id,
                            children: `${operationType === null || operationType === void 0 ? void 0 : operationType.description} -- Cost: ${operationType.cost}`
                        }, operationType.id);
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const operation_dropdown = (OperationTypeDropDown);

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
            /*#__PURE__*/ jsx_runtime_.jsx(operation_dropdown, {
                onChange: onChangeOperationType
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-10 inline-block",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    onClick: _onChange,
                    disabled: !isValidPayload(),
                    className: isValidPayload() ? 'inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700' : 'disabled inline-flex items-center justify-center px-5 py-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow',
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
;// CONCATENATED MODULE: ./pages/operations/index.tsx






const Records = ()=>{
    const router = (0,router_.useRouter)();
    const [request, errors, isLoading] = (0,use_request/* default */.Z)({
        method: 'post',
        url: '/api/operations',
        onSuccess: ()=>router.push('/')
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
                className: "py-5 max-w-md",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "py-5 ",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(balance/* default */.Z, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(calculator_form, {
                        onChange: onChange,
                        loading: isLoading,
                        errors: errors
                    })
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
var __webpack_exports__ = __webpack_require__.X(0, [236,340], () => (__webpack_exec__(6097)));
module.exports = __webpack_exports__;

})();