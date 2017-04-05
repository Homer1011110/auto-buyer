import elements from "./elementConfig"

export default {
  onInteractive: function() {
    window.addEventListener("load", function() {
      let jdHeaderLoginLink = document.querySelector(elements.jdHeaderLoginLink)
      if(jdHeaderLoginLink) {
        alert("请先登录")
        return
      }
      let jdEasyBuyBtn = document.querySelector(elements.jdEasyBuyBtn)
      if(!jdEasyBuyBtn) {
        alert("一键购按钮未加载")
        console.log("jd easy buy btn , ", jdEasyBuyBtn)
        return
      }
      jdEasyBuyBtn.click()
    })
  },
  onComplete: function() {
    // NOTE: window.onload will not be fired any more
  }
}
