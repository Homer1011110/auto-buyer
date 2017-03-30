class ContentScript {
  constructor() {
    this.router = {}
  }
  route(route, callback) {
    let router = this.router
    if(router[route]) {
      console.warn(`rout--${hostname} has aleady exist`)
      return
    }
    router[route] = callback
  }
  run() {
    let hostname = window.location.hostname
    let router = this.router
    let matchTag = false
    let readyState = document.readyState
    console.log(readyState)
    for(var route in router) {
      if(route.indexOf(hostname) > -1) {
        matchTag = true
        switch (readyState) {
          case "interactive":
            router[route].onInteractive.apply(this)
            break
          case "complete":
            router[route].onComplete.apply(this)
            break
        }

      }
    }
    if(!matchTag) {
      console.warn(`hostname(${window.location.hostname}) cannot match a route`)
    }
  }
}

export default ContentScript
