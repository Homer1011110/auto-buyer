// just run once ?
let d = new Date()
console.log(`%c background script run!! ${d}`, "background: ccc; color: red")


// chrome.cookies.onChanged.addListener(function(info) {
//   console.log("cookie change: " + JSON.stringify(info))
// })

let cookiesStore = {}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension")
  if (request.action == "getCookie") {
    chrome.cookies.getAll({
      url: sender.tab.url
    }, function(cookies) {
      cookies.forEach(function(cookie) {
        cookiesStore[cookie.name] = cookie.value
        if(cookie.httpOnly) {
          console.log(cookie)
        }
      })
    })
    sendResponse({code: 200})
  }
})
