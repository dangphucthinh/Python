(window["wp4Chunkpr_mypilet"] = window["wp4Chunkpr_mypilet"] || []).push([[0],{

/***/ "./src/Page.tsx":
/*!**********************!*\
  !*** ./src/Page.tsx ***!
  \**********************/
/*! exports provided: MyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPage", function() { return MyPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var MyPage = function MyPage(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, "Posts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", null, data.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
      key: item.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("b", null, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", null, item.body));
  })));
};

/***/ })

}]);
//# sourceMappingURL=fd6ae4bb.js.map