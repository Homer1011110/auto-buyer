# Auto Buyer
It's a Chrome extension to help you buy goods in Taobao, Mi, JD and so on.

## Process

```javascript
let app = new ContentScript()
app.route("www.baidu.com", require("baidu.js"))
app.run()

//then call the onInteractive method of the BaseScript
```