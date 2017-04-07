import elements from "./elementConfig"

function checkActivity(delay) {
  let tbMiaoBtn = document.querySelector(elements.tbMiaoBtn)
  if(tbMiaoBtn) {
    pollClick(tbMiaoBtn, 10)
  } else {
    setTimeout(checkActivity, delay, delay)
  }
}

function pollClick(btn, delay) {
  btn.click()
  // console.log(btn)
  let tbMiaoAnswer = document.querySelector(elements.tbMiaoAnswer)
  if(tbMiaoAnswer) {
    tbMiaoAnswer.focus()
  } else {
    setTimeout(pollClick, delay, btn, delay)
  }
}

export default {
  onInteractive: function() {
    window.addEventListener("load", function() {
      let tbMiaoBtn = document.querySelector(elements.tbMiaoBtn)
      checkActivity()
    })
  },
  onComplete: function() {

  }
}
