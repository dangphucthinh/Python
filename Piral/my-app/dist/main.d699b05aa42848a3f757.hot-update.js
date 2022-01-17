webpackHotUpdate("main",{

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var piral_polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral/polyfills */ "./node_modules/piral/polyfills.js");
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral */ "./node_modules/piral/esm/index.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout */ "./src/layout.tsx");

 //to render everything

 //api-key: ac36fb1ce817971c07fec3eb8d5bdcf7c8d1606d7d8dd87e8c080504f2187c28 - https://feed.piral.cloud/api/v1/pilet/tutorialss
//api-key: 1873ae11f44b8b0c6e525c7d6636bb8ba295af26776a74286a6cfb2d84483b91 - https://feed.piral.cloud/api/v1/pilet/tut0rials
//pilet publish --fresh --url https://feed.piral.cloud/api/v1/pilet/tut0rials --api-key 1873ae11f44b8b0c6e525c7d6636bb8ba295af26776a74286a6cfb2d84483b91
// change to your feed URL here (either using feed.piral.cloud or your own service)

var feedUrl = 'https://feed.piral.cloud/api/v1/pilet/tutorialss';
;

var _renderInstance = Object(piral__WEBPACK_IMPORTED_MODULE_1__["renderInstance"])({
  layout: _layout__WEBPACK_IMPORTED_MODULE_2__["layout"],
  errors: _layout__WEBPACK_IMPORTED_MODULE_2__["errors"],
  requestPilets: function requestPilets() {
    return fetch(feedUrl).then(function (res) {
      return res.json();
    }).then(function (res) {
      return res.items;
    });
  }
}),
    root = _renderInstance.root;

setTimeout(function () {
  alert(root.foo());
}, 2000);

/***/ })

})
//# sourceMappingURL=main.d699b05aa42848a3f757.hot-update.js.map