"use strict";
exports.id = 482;
exports.ids = [482];
exports.modules = {

/***/ 9482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



const OperationTypeDropDown = ({ onChange  })=>{
    const { 0: operationTypes , 1: setOperationTypes  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const fetchData = async ()=>{
        try {
            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('/api/operations/types');
            setOperationTypes(data || []);
        } catch (error) {
            console.log('Error loading data', error);
        }
    };
    const _onChange = ({ target: { value  }  })=>{
        onChange(value);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchData();
    }, []);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex-col py-20 ",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                children: "Operation Type:"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                name: "cars",
                id: "cars",
                onChange: _onChange,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "",
                        children: " Select Operation Type "
                    }),
                    operationTypes.length && operationTypes.map((operationType)=>{
                        /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                            value: operationType === null || operationType === void 0 ? void 0 : operationType.id,
                            children: `${operationType === null || operationType === void 0 ? void 0 : operationType.description} -- Cost: ${operationType.cost}`
                        }, operationType.id);
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OperationTypeDropDown);


/***/ })

};
;