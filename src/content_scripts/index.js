import ContentScript from "./ContentScript"
import itemJd from "./itemJd"
import cashierJd from "./cashierJd"
import miaoTB from "./miaoTB"
import itemTB from "./itemTB"

let app = new ContentScript()

app.route("item.jd.com", itemJd)
app.route("cashier.jd.com", cashierJd)
app.route("miao.item.taobao.com", miaoTB)
app.route("item.taobao.com", itemTB)

app.run()
