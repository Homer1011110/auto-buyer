/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  jdHeaderLoginLink: "#ttbar-login > a.link-login.style-red", // 登录按钮
  jdEasyBuyBtn: "#btn-easybuy-submit", // 一键购
  jdOnKeyBuyBtn: "#btn-onkeybuy", // 一键购
  jdMiaoShaBanner: "#banner-miaosha", // 秒杀提示栏
  jdPayPasswordInput: "#payPwd",
  jdPaySubmitBtn: "#paySubmit"
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ContentScript = function () {
  function ContentScript() {
    _classCallCheck(this, ContentScript);

    this.router = {};
  }

  _createClass(ContentScript, [{
    key: "route",
    value: function route(_route, callback) {
      var router = this.router;
      if (router[_route]) {
        console.warn("rout--" + hostname + " has aleady exist");
        return;
      }
      router[_route] = callback;
    }
  }, {
    key: "run",
    value: function run() {
      var hostname = window.location.hostname;
      var router = this.router;
      var matchTag = false;
      var readyState = document.readyState;
      console.log(readyState);
      for (var route in router) {
        if (route.indexOf(hostname) > -1) {
          matchTag = true;
          switch (readyState) {
            case "interactive":
              router[route].onInteractive.apply(this);
              break;
            case "complete":
              router[route].onComplete.apply(this);
              break;
          }
        }
      }
      if (!matchTag) {
        console.warn("hostname(" + window.location.hostname + ") cannot match a route");
      }
    }
  }]);

  return ContentScript;
}();

exports.default = ContentScript;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _elementConfig = __webpack_require__(0);

var _elementConfig2 = _interopRequireDefault(_elementConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  onInteractive: function onInteractive() {
    window.addEventListener("load", function () {
      var jdPayPasswordInput = document.querySelector(_elementConfig2.default.jdPayPasswordInput);
      var jdPaySubmitBtn = document.querySelector(_elementConfig2.default.jdPaySubmitBtn);
      if (!jdPayPasswordInput || !jdPaySubmitBtn) {
        alert("element not exist: payPasswordInput--" + jdPayPasswordInput + ", jdPaySubmitBtn--" + jdPaySubmitBtn);
        return;
      }
      jdPayPasswordInput.value = "xxxxx";
      jdPaySubmitBtn.click();
    });
  },
  onComplete: function onComplete() {}
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _elementConfig = __webpack_require__(0);

var _elementConfig2 = _interopRequireDefault(_elementConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var serverDate = null;

function synchronisedTime(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("load", function (e) {
    var date = new Date(this.getResponseHeader("date"));
    callback.call(null, date);
  });
  xhr.open("get", url);
  xhr.send();
}

exports.default = {
  onInteractive: function onInteractive() {
    window.addEventListener("load", function () {
      var jdHeaderLoginLink = document.querySelector(_elementConfig2.default.jdHeaderLoginLink);
      if (jdHeaderLoginLink) {
        alert("请先登录");
        return;
      }
      var jdEasyBuyBtn = document.querySelector(_elementConfig2.default.jdEasyBuyBtn);
      var jdOnKeyBuyBtn = document.querySelector(_elementConfig2.default.jdOnKeyBuyBtn);
      // if(jdEasyBuyBtn) {
      //   console.log("jdEasyBuyBtn")
      //   jdEasyBuyBtn.click()
      // } else if(jdOnKeyBuyBtn) {
      //   console.log("jdOnKeyBuyBtn")
      //   jdOnKeyBuyBtn.click()
      // } else {
      //   alert("一键购按钮未加载")
      //   console.log("jd easy buy btn , ", jdEasyBuyBtn, "jd on key buy btn, ", jdOnKeyBuyBtn)
      //   return
      // }
    });
    synchronisedTime("https://item.jd.com/2693720.html", function (date) {
      serverDate = date;
      console.log(serverDate);
      console.log(document.querySelector(_elementConfig2.default.jdMiaoShaBanner));
      var jdMiaoShaBanner = document.querySelector(_elementConfig2.default.jdMiaoShaBanner);
      if (!jdMiaoShaBanner) {
        alert("此商品不参与抢购活动");
        return;
      }
    });
  },
  onComplete: function onComplete() {
    // NOTE: window.onload will not be fired any more
  }
};

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ContentScript = __webpack_require__(1);

var _ContentScript2 = _interopRequireDefault(_ContentScript);

var _itemJd = __webpack_require__(3);

var _itemJd2 = _interopRequireDefault(_itemJd);

var _cashierJd = __webpack_require__(2);

var _cashierJd2 = _interopRequireDefault(_cashierJd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _ContentScript2.default();

app.route("item.jd.com", _itemJd2.default);
app.route("cashier.jd.com", _cashierJd2.default);

app.run();

/***/ })
/******/ ]);