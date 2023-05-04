"use strict";
(() => {
var exports = {};
exports.id = 959;
exports.ids = [959];
exports.modules = {

/***/ 5168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ records)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./component/operation-dropdown.tsx
var operation_dropdown = __webpack_require__(9482);
;// CONCATENATED MODULE: ./component/table/pagination.tsx


const Item = ({ value , onClick  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            onClick: ()=>onClick(value)
            ,
            className: "ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow text-base font-medium text-black bg-white hover:bg-indigo-700",
            children: value
        })
    }));
};
const ActiveItem = ({ value , onClick  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            onClick: ()=>onClick(value)
            ,
            className: "ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700",
            children: value
        })
    }));
};
const Pagination = ({ currentPage , totalItems , totalPages , onSelect  })=>{
    const { 0: _currentPage , 1: setCurrentPage  } = (0,external_react_.useState)(currentPage);
    (0,external_react_.useEffect)(()=>{
        setCurrentPage(currentPage);
    }, [
        currentPage
    ]);
    const pages = Array(totalPages).fill('page');
    const onArrowClick = (type)=>{
        if (type === 'increase' && _currentPage < totalPages) {
            const value = _currentPage + 1;
            setCurrentPage(value);
        } else {
            const value = _currentPage - 1;
            setCurrentPage(value && value);
        }
        onSelect(_currentPage);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("ol", {
        className: "flex justify-center gap-1 text-xs font-medium py-3",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    onClick: ()=>onArrowClick('decrease')
                    ,
                    className: "ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow text-base font-medium text-black bg-white hover:bg-indigo-700",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "sr-only",
                            children: "Prev Page"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            id: "decrease",
                            children: [
                                " ",
                                '<'
                            ]
                        })
                    ]
                })
            }),
            pages.map((_v, page)=>{
                const value = page + 1;
                return value === _currentPage ? /*#__PURE__*/ jsx_runtime_.jsx(ActiveItem, {
                    onClick: onSelect,
                    value: value
                }, page) : /*#__PURE__*/ jsx_runtime_.jsx(Item, {
                    onClick: onSelect,
                    value: value
                }, page);
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    onClick: ()=>onArrowClick('increase')
                    ,
                    className: "ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow text-base font-medium text-black bg-white hover:bg-indigo-700",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "sr-only",
                            children: "Next Page"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            id: "increase",
                            children: '>'
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const pagination = (Pagination);

;// CONCATENATED MODULE: ./component/table/index.tsx



const PageDropDown = ({ totalPages , currentPage , onChange  })=>{
    const pages = Array(10).fill('page');
    const _onChange = ({ target: { value  }  })=>{
        onChange(value);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex justify-end py-5",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "Quantity"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("select", {
                    name: "page",
                    id: "page",
                    onChange: _onChange,
                    children: pages.length && pages.map((_page, i)=>{
                        const size = (i + 1) * 10;
                        return(/*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: size,
                            children: size
                        }, size));
                    })
                })
            ]
        })
    }));
};
const TableItem = ({ record  })=>{
    var ref, ref1;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                className: "whitespace-nowrap px-4 py-2 font-medium text-gray-900",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: (ref = record.operation) === null || ref === void 0 ? void 0 : ref.description
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                className: "whitespace-nowrap px-4 py-2 text-gray-700",
                children: (ref1 = record.operation) === null || ref1 === void 0 ? void 0 : ref1.cost
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                className: "whitespace-nowrap px-4 py-2 text-gray-700",
                children: record.userBalance
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                className: "whitespace-nowrap px-4 py-2 text-gray-700",
                children: record.operationResponse
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                className: "whitespace-nowrap px-4 py-2 text-gray-700",
                children: record.date ? new Date(record.date).toDateString() : '--'
            })
        ]
    }));
};
const Table = ({ result: { records , totalItems , totalPages , currentPage  } , onPageSelect , onSizeSelect  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(PageDropDown, {
                totalPages: totalPages,
                currentPage: currentPage,
                onChange: onSizeSelect
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "my-5 overflow-x-auto rounded-lg border border-gray-200",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                    className: "min-w-full divide-y-2 divide-gray-200 bg-white text-sm",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                            className: "ltr:text-left rtl:text-right",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                        className: "whitespace-nowrap px-4 py-2 font-medium text-gray-900",
                                        children: "Operation"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                        className: "whitespace-nowrap px-4 py-2 font-medium text-gray-900",
                                        children: "Cost"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                        className: "whitespace-nowrap px-4 py-2 font-medium text-gray-900",
                                        children: "User Balance"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                        className: "whitespace-nowrap px-4 py-2 font-medium text-gray-900",
                                        children: "Operation Result"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                        className: "whitespace-nowrap px-4 py-2 font-medium text-gray-900",
                                        children: "Date"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                            className: "divide-y divide-gray-200",
                            children: records.length ? records.map((record)=>/*#__PURE__*/ jsx_runtime_.jsx(TableItem, {
                                    record: record
                                }, record.id)
                            ) : /*#__PURE__*/ jsx_runtime_.jsx("tr", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "NO RECORDS"
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(pagination, {
                totalItems: totalItems,
                totalPages: totalPages,
                currentPage: currentPage,
                onSelect: onPageSelect
            })
        ]
    }));
};
/* harmony default export */ const table = (Table);

// EXTERNAL MODULE: ./utils/with-auth.tsx + 1 modules
var with_auth = __webpack_require__(7425);
;// CONCATENATED MODULE: ./pages/records/index.tsx







const Records = ()=>{
    const { 0: result , 1: setResult  } = (0,external_react_.useState)({
        currentPage: 0,
        totalItems: 0,
        totalPages: 0,
        records: []
    });
    const { 0: filter , 1: setFilter  } = (0,external_react_.useState)({
        size: 10,
        page: 1,
        operationId: ''
    });
    const fetchData = async ()=>{
        try {
            const { data  } = await external_axios_default().get('/api/records');
            setResult(data);
        } catch (error) {}
    };
    const onOperationTypeChange = async (operationId)=>{
        if (operationId) {
            const { data  } = await external_axios_default().get(`/api/records?operationId=${operationId}`);
            setResult(data);
        }
    };
    const onPageSelect = async (page)=>{
        if (page) {
            const { data  } = await external_axios_default().get(`/api/records?page=${page}`);
            setResult(data);
        }
    };
    const onSizeSelect = async (size)=>{
        if (size) {
            const { data  } = await external_axios_default().get(`/api/records?size=${size}`);
            setResult(data);
        }
    };
    (0,external_react_.useEffect)(()=>{
        fetchData();
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "min-h-full",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Arithmetic Operation App - Records"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "py-6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(operation_dropdown/* default */.Z, {
                            onChange: onOperationTypeChange
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(table, {
                        result: result,
                        onPageSelect: onPageSelect,
                        onSizeSelect: onSizeSelect
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const records = ((0,with_auth/* withAuth */.Q)(Records));


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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,425,482], () => (__webpack_exec__(5168)));
module.exports = __webpack_exports__;

})();