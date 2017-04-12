import elements from "./elementConfig"

import BaseScript from "./BaseScript"

let scriptOption = {
  synchronisedUrl: "https://item.jd.com/2693720.html"
}

class ItemJdScript extends BaseScript {
  constructor(option) {
    super(option)
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
      let jdMiaoShaBanner = document.querySelector(elements.jdMiaoShaBanner)
      if(!jdMiaoShaBanner) {
        alert("此商品不参与抢购活动")
        reject("have no activity")
        return
      } else {
        let jdMiaoShaMessage = document.querySelector(elements.jdMiaoShaMessage)
        let pattern = /预计(.*)开始/
        console.log(jdMiaoShaMessage.innerText)
        if(pattern.test(jdMiaoShaMessage.innerText)) {
          // have not started
          let acH = RegExp.$1.split(":")[0]
          let acM = RegExp.$1.split(":")[1]
          // activityDate = new Date(serverDate.getUTCFullYear(), serverDate.getUTCMonth(), serverDate.getUTCDate(), parseInt(activityHour), parseInt(activityMinute))
          // let leftTime = activityDate.getTime() - serverDate.getTime()
          // console.log("left minutes:", leftTime/(1000 * 60))
          // NOTE: for test
          // setTimeout(resolve, 1000 * 10)
          // self.countdownTimer = setTimeout(resolve, leftTime)
        } else {
          //have started
          console.warn("活动已经开始")
        }
      }
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
