import elements from "./elementConfig"

let serverDate = null

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
    window.addEventListener("load", function() {
      let jdHeaderLoginLink = document.querySelector(elements.jdHeaderLoginLink)
      if(jdHeaderLoginLink) {
        alert("请先登录")
        return
      }
      let jdEasyBuyBtn = document.querySelector(elements.jdEasyBuyBtn)
      let jdOnKeyBuyBtn = document.querySelector(elements.jdOnKeyBuyBtn)
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
    })
    synchronisedTime("https://item.jd.com/2693720.html", function(date) {
      serverDate = date
      console.log(serverDate)
    })
  },
  onComplete: function() {
    // NOTE: window.onload will not be fired any more
  }
}
