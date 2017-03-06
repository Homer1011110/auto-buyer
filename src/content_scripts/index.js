console.log("%c content script run!!", "color: blue")
let documentReadyState = document.readyState
console.log("document.readyState: ", documentReadyState)

if(documentReadyState !== "complete") {
  window.onload = function() {
    console.log(document.querySelector("#J_SecKill > div.tb-sec-kill-upper > div.tb-sk-btns > a"))
  }
}
