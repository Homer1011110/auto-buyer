import elements from "./elementConfig"

let serverDate = null
let activityDate = null

function synchronisedTime(url, callback) {
  let xhr = new XMLHttpRequest()
  xhr.addEventListener("load", function(e) {
    let date = new Date(this.getResponseHeader("date"))
    callback.call(null, date)
  })
  xhr.open("get", url)
  xhr.send()
}

export default {
  onInteractive: function() {
    let pOnload = new Promise(function(resolve, reject) {
      window.addEventListener("load", function() {
        console.log("onload")
        resolve()
      })
    })
    let pSynchronised = new Promise(function(resolve, reject) {
      synchronisedTime("https://item.jd.com/2693720.html", function(date) {
        serverDate = date
        console.log("synchronisedTime")
        resolve()
      })
    })
    Promise.all([pOnload, pSynchronised]).then(function() {
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
            let activityHour = RegExp.$1.split(":")[0]
            let activityMinute = RegExp.$1.split(":")[1]
            activityDate = new Date(serverDate.getUTCFullYear(), serverDate.getUTCMonth(), serverDate.getUTCDate(), parseInt(activityHour), parseInt(activityMinute))
            let leftTime = activityDate.getTime() - serverDate.getTime()
            console.log("left minutes:", leftTime/(1000 * 60))
            // NOTE: for test
            // setTimeout(resolve, 1000 * 10)
            setTimeout(resolve, leftTime)
          } else {
            //have started
            console.warn("活动已经开始")
          }
        }
      })
    }).then(function(values) {
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
    })
  },
  onComplete: function() {
    // NOTE: window.onload will not be fired any more
  }
}
