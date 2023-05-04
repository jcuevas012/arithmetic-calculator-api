"use strict";
exports.id = 425;
exports.ids = [425];
exports.modules = {

/***/ 7425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Q": () => (/* binding */ withAuth)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./component/not-authorized.tsx


const NotAuthorized = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "grid h-screen px-4 bg-white place-content-center",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "text-center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "font-black text-gray-200 text-9xl",
                    children: "401"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl",
                    children: "Uh-oh!"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "mt-4 text-gray-500",
                    children: "We can't access this page."
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: '/',
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "inline-flex items-center justify-center px-5 py-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow",
                        children: "Go Home"
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const not_authorized = (NotAuthorized);

;// CONCATENATED MODULE: ./utils/with-auth.tsx


const withAuth = (Component)=>{
    return (ctx)=>{
        const { currentUser  } = ctx;
        if (!currentUser) {
            return(/*#__PURE__*/ jsx_runtime_.jsx(not_authorized, {}));
        }
        return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {}));
    };
};


/***/ })

};
;