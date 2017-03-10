class ContentScript {
  constructor() {
    console.log(`%c content script run!!${new Date()}`, "color: blue")
    let documentReadyState = document.readyState
    console.log("document.readyState: ", documentReadyState)

    if(documentReadyState !== "complete") {
      // BUG: sometimes onload event will not be fired
      console.log(1)
      window.addEventListener("load", function onLoad(e) {
        console.log("onload:", e)
      })
    } else {
      console.log(2)
      // onload event will no longer trigger any more
      window.addEventListener("load", function onLoad(e) {
        console.log(document.querySelector("#J_SecKill > div.tb-sec-kill-upper > div.tb-sk-btns > a"))
      })

    }
  }
}

setTimeout(function() {
  new ContentScript()
}, 1)
