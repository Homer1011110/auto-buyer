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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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

var _elementConfig = __webpack_require__(0);

var _elementConfig2 = _interopRequireDefault(_elementConfig);

var _infoBox = __webpack_require__(9);

var _infoBox2 = _interopRequireDefault(_infoBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseScript = function () {
  function BaseScript(option) {
    _classCallCheck(this, BaseScript);

    this.serverTime = null;
    this.activityDateTime = null;
    this.settingTime = null;
    this.synchronisedUrl = option.synchronisedUrl;
    this.countdownTimer = null;
    this.oldPrice = null;
    // NOTE: 计时器，用来同步显示服务器时间
    this.serverTimer = null;
    // NOTE: cache dom for unncessary dom query
    this.shadowRoot = null;
    this.shadowServerTime = null;
    this.shadowLeftTime = null;
    // NOTE:
    this.isCheckingPrice = false;
  }

  _createClass(BaseScript, [{
    key: "checkLoginState",
    value: function checkLoginState(resolve, reject) {}
  }, {
    key: "getCookie",
    value: function getCookie(resolve, reject) {}
  }, {
    key: "synchronisedTime",
    value: function synchronisedTime(url, callback) {
      var self = this;
      var xhr = new XMLHttpRequest();
      xhr.addEventListener("load", function (e) {
        // console.log("server datetime : ", this.getResponseHeader("date"))
        self.serverTime = new Date(this.getResponseHeader("date")).getTime();
        callback.call(null);
      });
      xhr.open("get", url);
      xhr.send();
    }
  }, {
    key: "insertInfoBox",
    value: function insertInfoBox() {
      var _this = this;

      var div = document.createElement("div");
      div.id = "homer-extension";
      this.shadowRoot = div.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = _infoBox2.default;
      document.body.appendChild(div);
      this.shadowServerTime = this.shadowRoot.querySelector("#homer-server-time");
      this.shadowLeftTime = this.shadowRoot.querySelector("#homer-left-time");
      var timePicker = this.shadowRoot.querySelector("#homer-time-picker");
      var settingTime = this.shadowRoot.querySelector("#homer-setting-time");
      var leftTimeDiv = this.shadowRoot.querySelector("#homer-left-time-div");
      var startBtn = this.shadowRoot.querySelector("#homer-start-btn");
      var cancelBtn = this.shadowRoot.querySelector("#homer-cancel-btn");
      startBtn.onclick = function (e) {
        console.log("time picker value:", timePicker.value);
        if (!timePicker.value) {
          alert("请先正确设置自动购买的时间");
          return;
        }
        startBtn.classList.add("homer-hide");
        cancelBtn.classList.remove("homer-hide");
        timePicker.classList.add("homer-hide");
        leftTimeDiv.classList.remove("homer-hide");
        settingTime.classList.remove("homer-hide");
        settingTime.innerText = timePicker.value;

        var hoursAndMinutes = timePicker.value.split(":");
        var settingDate = new Date();
        settingDate.setHours(parseInt(hoursAndMinutes[0]));
        settingDate.setMinutes(parseInt(hoursAndMinutes[1]));
        settingDate.setSeconds(0);
        settingDate.setMilliseconds(0);
        _this.settingTime = settingDate.getTime();
      };
      cancelBtn.onclick = function (e) {
        timePicker.classList.remove("homer-hide");
        settingTime.classList.add("homer-hide");
        leftTimeDiv.classList.add("homer-hide");
        startBtn.classList.remove("homer-hide");
        cancelBtn.classList.add("homer-hide");

        _this.settingTime = null;
      };
      return this;
    }
  }, {
    key: "updateInfoBox",
    value: function updateInfoBox() {
      if (this.serverTime) {
        this.shadowServerTime.innerText = this.normalizeTime(this.serverTime);
      }
      if (!this.settingTime) return;
      var leftTime = this.settingTime - this.serverTime;
      if (leftTime >= 0) {
        this.shadowLeftTime.innerText = this.normalizeTime(leftTime - 8 * 60 * 60 * 1000);
      }
    }
  }, {
    key: "normalizeTime",
    value: function normalizeTime(millisecond) {
      millisecond += 8 * 60 * 60 * 1000; // 中国时区补正
      var d = Math.floor(millisecond / (24 * 60 * 60 * 1000));
      millisecond -= d * 24 * 60 * 60 * 1000;
      var h = Math.floor(millisecond / (60 * 60 * 1000));
      millisecond -= h * 60 * 60 * 1000;
      var m = Math.floor(millisecond / (60 * 1000));
      millisecond -= m * 60 * 1000;
      var s = Math.floor(millisecond / 1000);
      return h + " : " + m + " : " + s;
    }
  }, {
    key: "updateServerTime",
    value: function updateServerTime() {
      var _this2 = this;

      this.updateInfoBox();
      this.serverTimer = setTimeout(function () {
        _this2.serverTime += 1000;
        _this2.updateServerTime();
      }, 1000);
      if (this.settingTime && !this.isCheckingPrice && this.settingTime - this.serverTime < 60 * 1000) {
        this.isCheckingPrice = true;
        this.checkPriceChange();
      }
      return this;
    }
  }, {
    key: "checkPriceChange",
    value: function checkPriceChange(succeed, fail) {
      // NOTE: implement by subclass
    }
  }, {
    key: "onPriceChange",
    value: function onPriceChange() {}
  }, {
    key: "onCheckTimeout",
    value: function onCheckTimeout() {}
  }, {
    key: "onInteractive",
    value: function onInteractive() {
      var self = this;
      window.addEventListener("load", function () {
        new Promise(self.checkLoginState).then(self.getCookie);
      });
      /*let pOnload = new Promise(function(resolve, reject) {
        window.addEventListener("load", function() {
          console.log("onload")
          resolve()
        })
      })
      let pSynchronised = new Promise(function(resolve, reject) {
        self.synchronisedTime(self.synchronisedUrl, function(date) {
          console.log("synchronisedTime")
          resolve()
        })
      })
      Promise.all([pOnload, pSynchronised])
      .then(()=>{
        this.insertInfoBox().updateServerTime()
      })*/
    }
  }, {
    key: "onComplete",
    value: function onComplete() {}
  }, {
    key: "onLoadAndSynchronise",
    value: function onLoadAndSynchronise() {
      // NOTE: interface implement by subclass
    }
  }, {
    key: "onActivityStart",
    value: function onActivityStart() {
      // NOTE: interface implement by subclass
      // NOTE: this method will be called when onLoadAndSynchronise's promise is resolved
    }
  }]);

  return BaseScript;
}();

exports.default = BaseScript;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cookie = function () {
  function Cookie() {
    _classCallCheck(this, Cookie);
  }

  _createClass(Cookie, [{
    key: "get",
    value: function get(name) {
      var cookieName = encodeURIComponent(name) + "=",
          cookieStart = document.cookie.indexOf(cookieName),
          cookieValue = null;
      if (cookieStart > -1) {
        var cookieEnd = document.cookie.indexOf(";", cookieStart);
        if (cookieEnd == -1) {
          cookieEnd = document.cookie.length;
        }
        cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
      }
      return cookieValue;
    }
  }]);

  return Cookie;
}();

var cookie = new Cookie();
exports.default = cookie;

/***/ }),
/* 3 */
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
              router[route].onInteractive();
              break;
            case "complete":
              router[route].onComplete();
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
/* 4 */
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
      jdPayPasswordInput.value = "";
      jdPaySubmitBtn.click();
    });
  },
  onComplete: function onComplete() {}
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _elementConfig = __webpack_require__(0);

var _elementConfig2 = _interopRequireDefault(_elementConfig);

var _cookie = __webpack_require__(2);

var _cookie2 = _interopRequireDefault(_cookie);

var _BaseScript2 = __webpack_require__(1);

var _BaseScript3 = _interopRequireDefault(_BaseScript2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var scriptOption = {
  synchronisedUrl: "https://item.jd.com/2693720.html"
};

var ItemJdScript = function (_BaseScript) {
  _inherits(ItemJdScript, _BaseScript);

  function ItemJdScript(option) {
    _classCallCheck(this, ItemJdScript);

    var _this = _possibleConstructorReturn(this, (ItemJdScript.__proto__ || Object.getPrototypeOf(ItemJdScript)).call(this, option));

    var pattern = /item\.jd\.com\/(\d*)\.html/;
    if (pattern.test(window.location.href)) {
      _this.skuId = RegExp.$1;
    } else {
      console.warn("url: " + window.location.href + " not match item.jd.com/xxxxx.html");
    }
    return _this;
  }

  _createClass(ItemJdScript, [{
    key: "checkPriceChange",
    value: function checkPriceChange() {
      setInterval(this.getPrice.bind(this), 1000);
    }
  }, {
    key: "getPrice",
    value: function getPrice() {
      var e = _cookie2.default.get("__jda"),
          t = "";
      e && e.indexOf(".") > -1 && (t = e.split(".")[1]);

      var script = document.createElement("script");
      var callbackRandom = Math.random().toString().substring(2);
      script.setAttribute("data-homer-jsonp", callbackRandom);
      script.src = window.location.protocol + "//p.3.cn/prices/mgets?skuIds=J_" + this.skuId + "&pduid=" + t + "&callback=homer" + callbackRandom;
      document.head.appendChild(script);
      var jsonpHandler = document.createElement("script");
      jsonpHandler.setAttribute("data-homer-handler", callbackRandom);
      jsonpHandler.innerHTML = "\n      window.homer" + callbackRandom + " = function(data) {\n        //console.log(data[0], typeof data[0].p)\n        let homerExtension = document.querySelector(\"#homer-extension\")\n        if(homerExtension.hasAttribute(\"homer-price\")) {\n          if(homerExtension.getAttribute(\"homer-price\") != data[0].p) {\n            console.warn(\"click easybuy btn !!!\")\n            let easyBuyBtn = document.querySelector(\"#btn-easybuy-submit\")\n            let keyBuyBtn = document.querySelector(\"#btn-onkeybuy\")\n            if(easyBuyBtn) {\n              easyBuyBtn.click()\n            } else if(keyBuyBtn) {\n              keyBuyBtn.click()\n            } else {\n              console.error(\"cannot find easybuy btn\")\n            }\n          } else {\n            console.log(\"price: \", data[0].p)\n          }\n        } else {\n          homerExtension.setAttribute(\"homer-price\", data[0].p)\n        }\n        let jsonpScript = document.head.querySelector(\"[data-homer-jsonp='" + callbackRandom + "']\")\n        let jsonpHandler = document.head.querySelector(\"[data-homer-handler='" + callbackRandom + "']\")\n        document.head.removeChild(jsonpScript)\n        delete window.homer" + callbackRandom + "\n      }\n    ";
      document.head.appendChild(jsonpHandler);
    }
  }, {
    key: "onLoadAndSynchronise",
    value: function onLoadAndSynchronise() {
      var self = this;
      return new Promise(function (resolve, reject) {
        console.log("onload & synchronisedTime done");
        var jdHeaderLoginLink = document.querySelector(_elementConfig2.default.jdHeaderLoginLink);
        if (jdHeaderLoginLink) {
          alert("请先登录");
          reject("didn't login");
          return;
        }
        resolve();
        // let jdMiaoShaBanner = document.querySelector(elements.jdMiaoShaBanner)
        // if(!jdMiaoShaBanner) {
        //   alert("此商品不参与抢购活动")
        //   reject("have no activity")
        //   return
        // } else {
        //   let jdMiaoShaMessage = document.querySelector(elements.jdMiaoShaMessage)
        //   let pattern = /预计(.*)开始/
        //   console.log(jdMiaoShaMessage.innerText)
        //   if(pattern.test(jdMiaoShaMessage.innerText)) {
        //     // have not started
        //     let acH = RegExp.$1.split(":")[0]
        //     let acM = RegExp.$1.split(":")[1]
        //     // activityDate = new Date(serverDate.getUTCFullYear(), serverDate.getUTCMonth(), serverDate.getUTCDate(), parseInt(activityHour), parseInt(activityMinute))
        //     // let leftTime = activityDate.getTime() - serverDate.getTime()
        //     // console.log("left minutes:", leftTime/(1000 * 60))
        //     // NOTE: for test
        //     // setTimeout(resolve, 1000 * 10)
        //     // self.countdownTimer = setTimeout(resolve, leftTime)
        //   } else {
        //     //have started
        //     console.warn("活动已经开始")
        //   }
        // }
      });
    }
  }, {
    key: "onActivityStart",
    value: function onActivityStart() {
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
    }
  }]);

  return ItemJdScript;
}(_BaseScript3.default);

var itemJd = new ItemJdScript(scriptOption);

chrome.runtime.sendMessage({ action: "getCookie" }, function (response) {
  console.log(response.farewell);
});

exports.default = itemJd;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _elementConfig = __webpack_require__(0);

var _elementConfig2 = _interopRequireDefault(_elementConfig);

var _cookie = __webpack_require__(2);

var _cookie2 = _interopRequireDefault(_cookie);

var _BaseScript2 = __webpack_require__(1);

var _BaseScript3 = _interopRequireDefault(_BaseScript2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var scriptOption = {
  synchronisedUrl: "http://item.mi.com/product/10000041.html"
};

var ItemMiScript = function (_BaseScript) {
  _inherits(ItemMiScript, _BaseScript);

  function ItemMiScript(option) {
    _classCallCheck(this, ItemMiScript);

    var _this = _possibleConstructorReturn(this, (ItemMiScript.__proto__ || Object.getPrototypeOf(ItemMiScript)).call(this, option));

    var pattern = /item\.mi\.com\/(\d*)\.html/;
    if (pattern.test(window.location.href)) {
      _this.skuId = RegExp.$1;
    } else {
      console.warn("url: " + window.location.href + " not match item.mi.com/xxxxx.html");
    }
    return _this;
  }

  _createClass(ItemMiScript, [{
    key: "checkPriceChange",
    value: function checkPriceChange() {
      setInterval(this.getPrice.bind(this), 1000);
    }
  }, {
    key: "getPrice",
    value: function getPrice() {
      var e = _cookie2.default.get("__jda"),
          t = "";
      e && e.indexOf(".") > -1 && (t = e.split(".")[1]);

      var script = document.createElement("script");
      var callbackRandom = Math.random().toString().substring(2);
      script.setAttribute("data-homer-jsonp", callbackRandom);
      script.src = window.location.protocol + "//p.3.cn/prices/mgets?skuIds=J_" + this.skuId + "&pduid=" + t + "&callback=homer" + callbackRandom;
      document.head.appendChild(script);
      var jsonpHandler = document.createElement("script");
      jsonpHandler.setAttribute("data-homer-handler", callbackRandom);
      jsonpHandler.innerHTML = "\n      window.homer" + callbackRandom + " = function(data) {\n        //console.log(data[0], typeof data[0].p)\n        let homerExtension = document.querySelector(\"#homer-extension\")\n        if(homerExtension.hasAttribute(\"homer-price\")) {\n          if(homerExtension.getAttribute(\"homer-price\") != data[0].p) {\n            console.warn(\"click easybuy btn !!!\")\n            let easyBuyBtn = document.querySelector(\"#btn-easybuy-submit\")\n            let keyBuyBtn = document.querySelector(\"#btn-onkeybuy\")\n            if(easyBuyBtn) {\n              easyBuyBtn.click()\n            } else if(keyBuyBtn) {\n              keyBuyBtn.click()\n            } else {\n              console.error(\"cannot find easybuy btn\")\n            }\n          } else {\n            console.log(\"price: \", data[0].p)\n          }\n        } else {\n          homerExtension.setAttribute(\"homer-price\", data[0].p)\n        }\n        let jsonpScript = document.head.querySelector(\"[data-homer-jsonp='" + callbackRandom + "']\")\n        let jsonpHandler = document.head.querySelector(\"[data-homer-handler='" + callbackRandom + "']\")\n        document.head.removeChild(jsonpScript)\n        delete window.homer" + callbackRandom + "\n      }\n    ";
      document.head.appendChild(jsonpHandler);
    }
  }, {
    key: "onLoadAndSynchronise",
    value: function onLoadAndSynchronise() {
      var self = this;
      return new Promise(function (resolve, reject) {
        console.log("onload & synchronisedTime done");
        var jdHeaderLoginLink = document.querySelector(_elementConfig2.default.jdHeaderLoginLink);
        if (jdHeaderLoginLink) {
          alert("请先登录");
          reject("didn't login");
          return;
        }
        resolve();
        // let jdMiaoShaBanner = document.querySelector(elements.jdMiaoShaBanner)
        // if(!jdMiaoShaBanner) {
        //   alert("此商品不参与抢购活动")
        //   reject("have no activity")
        //   return
        // } else {
        //   let jdMiaoShaMessage = document.querySelector(elements.jdMiaoShaMessage)
        //   let pattern = /预计(.*)开始/
        //   console.log(jdMiaoShaMessage.innerText)
        //   if(pattern.test(jdMiaoShaMessage.innerText)) {
        //     // have not started
        //     let acH = RegExp.$1.split(":")[0]
        //     let acM = RegExp.$1.split(":")[1]
        //     // activityDate = new Date(serverDate.getUTCFullYear(), serverDate.getUTCMonth(), serverDate.getUTCDate(), parseInt(activityHour), parseInt(activityMinute))
        //     // let leftTime = activityDate.getTime() - serverDate.getTime()
        //     // console.log("left minutes:", leftTime/(1000 * 60))
        //     // NOTE: for test
        //     // setTimeout(resolve, 1000 * 10)
        //     // self.countdownTimer = setTimeout(resolve, leftTime)
        //   } else {
        //     //have started
        //     console.warn("活动已经开始")
        //   }
        // }
      });
    }
  }, {
    key: "onActivityStart",
    value: function onActivityStart() {
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
    }
  }]);

  return ItemMiScript;
}(_BaseScript3.default);

var itemMi = new ItemMiScript(scriptOption);

exports.default = itemMi;

/***/ }),
/* 7 */
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

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _elementConfig = __webpack_require__(0);

var _elementConfig2 = _interopRequireDefault(_elementConfig);

var _cookie = __webpack_require__(2);

var _cookie2 = _interopRequireDefault(_cookie);

var _BaseScript2 = __webpack_require__(1);

var _BaseScript3 = _interopRequireDefault(_BaseScript2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var scriptOption = {
  synchronisedUrl: "http://miao.item.taobao.com/550572544447.htm"
};

var ItemTaobaoScript = function (_BaseScript) {
  _inherits(ItemTaobaoScript, _BaseScript);

  function ItemTaobaoScript(option) {
    _classCallCheck(this, ItemTaobaoScript);

    var _this = _possibleConstructorReturn(this, (ItemTaobaoScript.__proto__ || Object.getPrototypeOf(ItemTaobaoScript)).call(this, option));

    var pattern = /item\.taobao\.com\/(\d*)\.htm/;
    if (pattern.test(window.location.href)) {
      _this.skuId = RegExp.$1;
    } else {
      console.warn("url: " + window.location.href + " not match item.taobao.com/xxxxx.html");
    }
    return _this;
  }

  _createClass(ItemTaobaoScript, [{
    key: "checkPriceChange",
    value: function checkPriceChange() {
      setInterval(this.getPrice.bind(this), 1000);
    }
  }, {
    key: "getPrice",
    value: function getPrice() {
      var e = _cookie2.default.get("__jda"),
          t = "";
      e && e.indexOf(".") > -1 && (t = e.split(".")[1]);

      var script = document.createElement("script");
      var callbackRandom = Math.random().toString().substring(2);
      script.setAttribute("data-homer-jsonp", callbackRandom);
      script.src = window.location.protocol + "//p.3.cn/prices/mgets?skuIds=J_" + this.skuId + "&pduid=" + t + "&callback=homer" + callbackRandom;
      document.head.appendChild(script);
      var jsonpHandler = document.createElement("script");
      jsonpHandler.setAttribute("data-homer-handler", callbackRandom);
      jsonpHandler.innerHTML = "\n      window.homer" + callbackRandom + " = function(data) {\n        //console.log(data[0], typeof data[0].p)\n        let homerExtension = document.querySelector(\"#homer-extension\")\n        if(homerExtension.hasAttribute(\"homer-price\")) {\n          if(homerExtension.getAttribute(\"homer-price\") != data[0].p) {\n            console.warn(\"click easybuy btn !!!\")\n            let easyBuyBtn = document.querySelector(\"#btn-easybuy-submit\")\n            let keyBuyBtn = document.querySelector(\"#btn-onkeybuy\")\n            if(easyBuyBtn) {\n              easyBuyBtn.click()\n            } else if(keyBuyBtn) {\n              keyBuyBtn.click()\n            } else {\n              console.error(\"cannot find easybuy btn\")\n            }\n          } else {\n            console.log(\"price: \", data[0].p)\n          }\n        } else {\n          homerExtension.setAttribute(\"homer-price\", data[0].p)\n        }\n        let jsonpScript = document.head.querySelector(\"[data-homer-jsonp='" + callbackRandom + "']\")\n        let jsonpHandler = document.head.querySelector(\"[data-homer-handler='" + callbackRandom + "']\")\n        document.head.removeChild(jsonpScript)\n        delete window.homer" + callbackRandom + "\n      }\n    ";
      document.head.appendChild(jsonpHandler);
    }
  }, {
    key: "onLoadAndSynchronise",
    value: function onLoadAndSynchronise() {
      var self = this;
      return new Promise(function (resolve, reject) {
        console.log("onload & synchronisedTime done");
        var jdHeaderLoginLink = document.querySelector(_elementConfig2.default.jdHeaderLoginLink);
        if (jdHeaderLoginLink) {
          alert("请先登录");
          reject("didn't login");
          return;
        }
        resolve();
        // let jdMiaoShaBanner = document.querySelector(elements.jdMiaoShaBanner)
        // if(!jdMiaoShaBanner) {
        //   alert("此商品不参与抢购活动")
        //   reject("have no activity")
        //   return
        // } else {
        //   let jdMiaoShaMessage = document.querySelector(elements.jdMiaoShaMessage)
        //   let pattern = /预计(.*)开始/
        //   console.log(jdMiaoShaMessage.innerText)
        //   if(pattern.test(jdMiaoShaMessage.innerText)) {
        //     // have not started
        //     let acH = RegExp.$1.split(":")[0]
        //     let acM = RegExp.$1.split(":")[1]
        //     // activityDate = new Date(serverDate.getUTCFullYear(), serverDate.getUTCMonth(), serverDate.getUTCDate(), parseInt(activityHour), parseInt(activityMinute))
        //     // let leftTime = activityDate.getTime() - serverDate.getTime()
        //     // console.log("left minutes:", leftTime/(1000 * 60))
        //     // NOTE: for test
        //     // setTimeout(resolve, 1000 * 10)
        //     // self.countdownTimer = setTimeout(resolve, leftTime)
        //   } else {
        //     //have started
        //     console.warn("活动已经开始")
        //   }
        // }
      });
    }
  }, {
    key: "onActivityStart",
    value: function onActivityStart() {
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
    }
  }]);

  return ItemTaobaoScript;
}(_BaseScript3.default);

var itemTaobao = new ItemTaobaoScript(scriptOption);

exports.default = itemTaobao;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "<div class=\"homer-info-box\">\r\n  <div style=\"color: white; font-weight: bold; margin-bottom: 10px;\">\r\n      自动抢购器\r\n  </div>\r\n  <div class=\"homer-hide\" style=\"color: white;\">登录京东后才能使用本软件</div>\r\n  <div class=\"homer-hide\">\r\n    <div class=\"homer-line\">\r\n      <span class=\"homer-text\">服务器时间：</span>\r\n      <span id=\"homer-server-time\" class=\"homer-text\"></span>\r\n    </div>\r\n    <div class=\"homer-line homer-hide\">\r\n      <span class=\"homer-text\">选择抢购时间：</span>\r\n      <input id=\"homer-time-picker\" type=\"time\"/>\r\n      <span id=\"homer-setting-time\" class=\"homer-text homer-hide\"></span>\r\n    </div>\r\n    <div id=\"homer-left-time-div\" class=\"homer-line homer-hide\">\r\n      <span class=\"homer-text\">抢购倒计时：</span>\r\n      <span id=\"homer-left-time\" class=\"homer-text homer-red\"></span>\r\n    </div>\r\n  </div>\r\n  <div class=\"homer-form homer-hide\">\r\n    <div class=\"homer-form-item\">\r\n      <span>收货人姓名</span><input placeholder=\"张三\"/>\r\n    </div>\r\n    <div class=\"homer-form-item\">\r\n      <span>收货人电话</span><input placeholder=\"13511111111\"/>\r\n    </div>\r\n    <div class=\"homer-form-item\">\r\n      <span>收货省份</span><input placeholder=\"湖北\"/>\r\n    </div>\r\n    <div class=\"homer-form-item\">\r\n      <span>收货城市</span><input placeholder=\"武汉\"/>\r\n    </div>\r\n    <div class=\"homer-form-item\">\r\n      <span>收货地址</span><input  placeholder=\"华中科技大学韵苑23栋\"/>\r\n    </div>\r\n    <div class=\"homer-form-item\">\r\n      <span>活动开始时间</span><input type=\"time\"/>\r\n    </div>\r\n  </div>\r\n  <div class=\"homer-line homer-align-center homer-hide\">\r\n    <button id=\"homer-start-btn\" class=\"homer-btn\">开始定时购买</button>\r\n    <button id=\"homer-cancel-btn\" class=\"homer-btn homer-hide\">取消定时购买</button>\r\n  </div>\r\n</div>\r\n<style>\r\n  .homer-text {\r\n    color: white;\r\n    font-size: 16px;\r\n  }\r\n  .homer-red {\r\n    color: #db0f31;\r\n  }\r\n  .homer-hide {\r\n    display: none;\r\n  }\r\n  .homer-align-center {\r\n    text-align: center;\r\n  }\r\n  .homer-info-box {\r\n    padding: 10px 20px;\r\n    position: fixed;\r\n    left: 100px;\r\n    top: 100px;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    z-index: 99999999;\r\n    font-size: 14px;\r\n  }\r\n  .homer-line:not(:last-child) {\r\n    margin-bottom: 10px;\r\n  }\r\n  .homer-btn {\r\n    border-radius: 5px;\r\n    padding: 5px 10px;\r\n    border: 0;\r\n    outline: none;\r\n    background-color: #4cafe8;\r\n    color: #fff;\r\n  }\r\n  .homer-form {\r\n\r\n  }\r\n  .homer-form-item {\r\n    margin-bottom: 10px;\r\n  }\r\n  .homer-form-item>span{\r\n    display: inline-block;\r\n    width:30%;\r\n    color: white;\r\n  }\r\n  .homer-form-item>input{\r\n    display: inline-block;\r\n    width:65%;\r\n  }\r\n</style>\r\n";

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ContentScript = __webpack_require__(3);

var _ContentScript2 = _interopRequireDefault(_ContentScript);

var _itemJd = __webpack_require__(5);

var _itemJd2 = _interopRequireDefault(_itemJd);

var _cashierJd = __webpack_require__(4);

var _cashierJd2 = _interopRequireDefault(_cashierJd);

var _miaoTB = __webpack_require__(8);

var _miaoTB2 = _interopRequireDefault(_miaoTB);

var _itemTB = __webpack_require__(7);

var _itemTB2 = _interopRequireDefault(_itemTB);

var _itemMi = __webpack_require__(6);

var _itemMi2 = _interopRequireDefault(_itemMi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _ContentScript2.default();

app.route("item.jd.com", _itemJd2.default);
app.route("cashier.jd.com", _cashierJd2.default);
app.route("miao.item.taobao.com", _miaoTB2.default);
app.route("item.mi.com", _itemMi2.default);
// app.route("item.taobao.com", itemTB)

app.run();

/***/ })
/******/ ]);