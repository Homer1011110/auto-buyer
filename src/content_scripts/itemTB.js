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
      synchronisedTime("https://item.taobao.com/item.htm", function(date) {
        serverDate = date
        console.log("synchronisedTime")
        resolve()
      })
    })
    Promise.all([pOnload, pSynchronised]).then(function() {
      return new Promise(function(resolve, reject) {
        console.log("onload & synchronisedTime done")
        let tbHeaderLoginLink = document.querySelector(elements.tbHeaderLoginLink)
        if(tbHeaderLoginLink) {
          alert("请先登录")
          reject("please login first")
          return
        }
        resolve()
      })
    }).then(function(values) {
      let tbBuyBtn = document.querySelector(elements.tbBuyBtn)
      console.log(tbBuyBtn)
      setTimeout(function() {
        tbBuyBtn.click()
      }, 10 * 1000)
    })
  },
  onComplete: function() {
    // NOTE: window.onload will not be fired any more
  }
}
