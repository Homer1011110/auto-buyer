import elements from "./elementConfig"
import cookie from "../util/cookie"
import BaseScript from "./BaseScript"

let scriptOption = {
  synchronisedUrl: "https://item.jd.com/2693720.html"
}

class ItemJdScript extends BaseScript {
  constructor(option) {
    super(option)
    let pattern = /item\.jd\.com\/(\d*)\.html/
    if(pattern.test(window.location.href)) {
      this.skuId = RegExp.$1
    } else {
      console.warn("url: ${window.location.href} not match item.jd.com/xxxxx.html")
    }
  }
  checkPriceChange() {
    setInterval(this.getPrice.bind(this), 1000)
  }
  getPrice() {
    let e = cookie.get("__jda"), t = ""
    e && e.indexOf(".") > -1 && (t = e.split(".")[1])

    let script = document.createElement("script")
    let callbackRandom = Math.random().toString().substring(2)
    script.setAttribute("data-homer-jsonp", callbackRandom)
    script.src = `${window.location.protocol}//p.3.cn/prices/mgets?skuIds=J_${this.skuId}&pduid=${t}&callback=homer${callbackRandom}`
    document.head.appendChild(script)
    let jsonpHandler = document.createElement("script")
    jsonpHandler.setAttribute("data-homer-handler", callbackRandom)
    jsonpHandler.innerHTML = `
      window.homer${callbackRandom} = function(data) {
        //console.log(data[0], typeof data[0].p)
        let homerExtension = document.querySelector("#homer-extension")
        if(homerExtension.hasAttribute("homer-price")) {
          if(homerExtension.getAttribute("homer-price") != data[0].p) {
            console.warn("click easybuy btn !!!")
            let easyBuyBtn = document.querySelector("#btn-easybuy-submit")
            let keyBuyBtn = document.querySelector("#btn-onkeybuy")
            if(easyBuyBtn) {
              easyBuyBtn.click()
            } else if(keyBuyBtn) {
              keyBuyBtn.click()
            } else {
              console.error("cannot find easybuy btn")
            }
          } else {
            console.log("price: ", data[0].p)
          }
        } else {
          homerExtension.setAttribute("homer-price", data[0].p)
        }
        let jsonpScript = document.head.querySelector("[data-homer-jsonp='${callbackRandom}']")
        let jsonpHandler = document.head.querySelector("[data-homer-handler='${callbackRandom}']")
        document.head.removeChild(jsonpScript)
        delete window.homer${callbackRandom}
      }
    `
    document.head.appendChild(jsonpHandler)
  }
  onLoadAndSynchronise() {
    let self = this
    return new Promise(function(resolve, reject) {
      console.log("onload & synchronisedTime done")
      let jdHeaderLoginLink = document.querySelector(elements.jdHeaderLoginLink)
      if(jdHeaderLoginLink) {
        alert("请先登录")
        reject("didn't login")
        return
      }
      resolve()
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
    })
  }
  onActivityStart() {
    console.log("detect price changing")
    let jdEasyBuyBtn = document.querySelector(elements.jdEasyBuyBtn)
    let jdOnKeyBuyBtn = document.querySelector(elements.jdOnKeyBuyBtn)
    if(jdEasyBuyBtn) {
      console.log("jdEasyBuyBtn")
      jdEasyBuyBtn.click()
    } else if(jdOnKeyBuyBtn) {
      console.log("jdOnKeyBuyBtn")
      jdOnKeyBuyBtn.click()
    } else {
      alert("一键购按钮未加载")
      console.log("jd easy buy btn , ", jdEasyBuyBtn, "jd on key buy btn, ", jdOnKeyBuyBtn)
      return
    }
  }
}

let itemJd = new ItemJdScript(scriptOption)
export default itemJd
