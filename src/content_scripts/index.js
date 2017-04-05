import ContentScript from "./ContentScript"
import itemJd from "./itemJd"
import cashierJd from "./cashierJd"

let app = new ContentScript()

app.route("item.jd.com", itemJd)
app.route("cashier.jd.com", cashierJd)

app.run()
