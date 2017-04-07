/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
  jdMiaoShaMessage: "#banner-miaosha .activity-message",
  jdPayPasswordInput: "#payPwd",
  jdPaySubmitBtn: "#paySubmit",
  tbMiaoBtn: "#J_SecKill > div.tb-sec-kill-upper > div.tb-sk-btns > a",
  tbMiaoAnswer: "#J_SecKill > table > tbody > tr.answer > td:nth-child(2) > input",
  tbHeaderLoginLink: "#J_LoginInfoHd > a.h",
  tbBuyBtn: "#J_juValid > div.tb-btn-buy > a"
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
        if (route == hostname) {
          //严格匹配
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
var activityDate = null;

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
    var pOnload = new Promise(function (resolve, reject) {
      window.addEventListener("load", function () {
        console.log("onload");
        resolve();
      });
    });
    var pSynchronised = new Promise(function (resolve, reject) {
      synchronisedTime("https://item.jd.com/2693720.html", function (date) {
        serverDate = date;
        console.log("synchronisedTime");
        resolve();
      });
    });
    Promise.all([pOnload, pSynchronised]).then(function () {
      return new Promise(function (resolve, reject) {
        console.log("onload & synchronisedTime done");
        var jdHeaderLoginLink = document.querySelector(_elementConfig2.default.jdHeaderLoginLink);
        if (jdHeaderLoginLink) {
          alert("请先登录");
          reject("didn't login");
          return;
        }
        var jdMiaoShaBanner = document.querySelector(_elementConfig2.default.jdMiaoShaBanner);
        if (!jdMiaoShaBanner) {
          alert("此商品不参与抢购活动");
          reject("have no activity");
          return;
        } else {
          var jdMiaoShaMessage = document.querySelector(_elementConfig2.default.jdMiaoShaMessage);
          var pattern = /预计(.*)开始/;
          console.log(jdMiaoShaMessage.innerText);
          if (pattern.test(jdMiaoShaMessage.innerText)) {
            // have not started
            var activityHour = RegExp.$1.split(":")[0];
            var activityMinute = RegExp.$1.split(":")[1];
            activityDate = new Date(serverDate.getUTCFullYear(), serverDate.getUTCMonth(), serverDate.getUTCDate(), parseInt(activityHour), parseInt(activityMinute));
            var leftTime = activityDate.getTime() - serverDate.getTime();
            console.log("left minutes:", leftTime / (1000 * 60));
            // NOTE: for test
            // setTimeout(resolve, 1000 * 10)
            setTimeout(resolve, leftTime);
          } else {
            //have started
            console.warn("活动已经开始");
          }
        }
      });
    }).then(function (values) {
      console.log("detect price changing");
      var jdEasyBuyBtn = document.querySelector(_elementConfig2.default.jdEasyBuyBtn);
      var jdOnKeyBuyBtn = document.querySelector(_elementConfig2.default.jdOnKeyBuyBtn);
      if (jdEasyBuyBtn) {
        console.log("jdEasyBuyBtn");
        jdEasyBuyBtn.click();
      } else if (jdOnKeyBuyBtn) {
        console.log("jdOnKeyBuyBtn");
        jdOnKeyBuyBtn.click();
      } else {
        alert("一键购按钮未加载");
        console.log("jd easy buy btn , ", jdEasyBuyBtn, "jd on key buy btn, ", jdOnKeyBuyBtn);
        return;
      }
    });
  },
  onComplete: function onComplete() {
    // NOTE: window.onload will not be fired any more
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _elementConfig = __webpack_require__(0);

var _elementConfig2 = _interopRequireDefault(_elementConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkActivity(delay) {
  var tbMiaoBtn = document.querySelector(_elementConfig2.default.tbMiaoBtn);
  if (tbMiaoBtn) {
    pollClick(tbMiaoBtn, 10);
  } else {
    setTimeout(checkActivity, delay, delay);
  }
}

function pollClick(btn, delay) {
  btn.click();
  // console.log(btn)
  var tbMiaoAnswer = document.querySelector(_elementConfig2.default.tbMiaoAnswer);
  if (tbMiaoAnswer) {
    tbMiaoAnswer.focus();
  } else {
    setTimeout(pollClick, delay, btn, delay);
  }
}

exports.default = {
  onInteractive: function onInteractive() {
    window.addEventListener("load", function () {
      var tbMiaoBtn = document.querySelector(_elementConfig2.default.tbMiaoBtn);
      checkActivity();
    });
  },
  onComplete: function onComplete() {}
};

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ContentScript = __webpack_require__(1);

var _ContentScript2 = _interopRequireDefault(_ContentScript);

var _itemJd = __webpack_require__(3);

var _itemJd2 = _interopRequireDefault(_itemJd);

var _cashierJd = __webpack_require__(2);

var _cashierJd2 = _interopRequireDefault(_cashierJd);

var _miaoTB = __webpack_require__(4);

var _miaoTB2 = _interopRequireDefault(_miaoTB);

var _itemTB = __webpack_require__(8);

var _itemTB2 = _interopRequireDefault(_itemTB);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _ContentScript2.default();

app.route("item.jd.com", _itemJd2.default);
app.route("cashier.jd.com", _cashierJd2.default);
app.route("miao.item.taobao.com", _miaoTB2.default);
app.route("item.taobao.com", _itemTB2.default);

app.run();

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _elementConfig = __webpack_require__(0);

var _elementConfig2 = _interopRequireDefault(_elementConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var serverDate = null;
var activityDate = null;

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
    var pOnload = new Promise(function (resolve, reject) {
      window.addEventListener("load", function () {
        console.log("onload");
        resolve();
      });
    });
    var pSynchronised = new Promise(function (resolve, reject) {
      synchronisedTime("https://item.taobao.com/item.htm", function (date) {
        serverDate = date;
        console.log("synchronisedTime");
        resolve();
      });
    });
    Promise.all([pOnload, pSynchronised]).then(function () {
      return new Promise(function (resolve, reject) {
        console.log("onload & synchronisedTime done");
        var tbHeaderLoginLink = document.querySelector(_elementConfig2.default.tbHeaderLoginLink);
        if (tbHeaderLoginLink) {
          alert("请先登录");
          reject("please login first");
          return;
        }
        resolve();
      });
    }).then(function (values) {
      var tbBuyBtn = document.querySelector(_elementConfig2.default.tbBuyBtn);
      console.log(tbBuyBtn);
      setTimeout(function () {
        tbBuyBtn.click();
      }, 10 * 1000);
    });
  },
  onComplete: function onComplete() {
    // NOTE: window.onload will not be fired any more
  }
};

/***/ })
/******/ ]);