import elements from "./elementConfig"

export default {
  onInteractive: function() {
    window.addEventListener("load", function() {
      let jdPayPasswordInput = document.querySelector(elements.jdPayPasswordInput)
      let jdPaySubmitBtn = document.querySelector(elements.jdPaySubmitBtn)
      if(!jdPayPasswordInput || !jdPaySubmitBtn) {
        alert(`element not exist: payPasswordInput--${jdPayPasswordInput}, jdPaySubmitBtn--${jdPaySubmitBtn}`)
        return
      }
      jdPayPasswordInput.value = ""
      jdPaySubmitBtn.click()
    })
  },
  onComplete: function() {

  }
}
