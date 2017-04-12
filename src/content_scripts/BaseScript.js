import elements from "./elementConfig"
import infoBox from "./infoBox.html"

class BaseScript {
  constructor(option) {
    this.serverTime = null
    this.activityDateTime = null
    this.settingTime = null
    this.synchronisedUrl = option.synchronisedUrl
    this.countdownTimer = null
    // NOTE: 计时器，用来同步显示服务器时间
    this.serverTimer = null
    // NOTE: cache dom for unncessary dom query
    this.shadowRoot = null
    this.shadowServerTime = null
    this.shadowLeftTime = null
  }
  synchronisedTime(url, callback) {
    let self = this
    let xhr = new XMLHttpRequest()
    xhr.addEventListener("load", function(e) {
      // console.log("server datetime : ", this.getResponseHeader("date"))
      self.serverTime = new Date(this.getResponseHeader("date")).getTime()
      callback.call(null)
    })
    xhr.open("get", url)
    xhr.send()
  }
  insertInfoBox() {
    let div = document.createElement("div")
    this.shadowRoot = div.attachShadow({mode: "open"})
    this.shadowRoot.innerHTML = infoBox
    document.body.append(div)
    this.shadowServerTime = this.shadowRoot.querySelector("#homer-server-time")
    this.shadowLeftTime = this.shadowRoot.querySelector("#homer-left-time")
    let timePicker = this.shadowRoot.querySelector("#homer-time-picker")
    let settingTime = this.shadowRoot.querySelector("#homer-setting-time")
    let leftTimeDiv = this.shadowRoot.querySelector("#homer-left-time-div")
    let startBtn = this.shadowRoot.querySelector("#homer-start-btn")
    let cancelBtn = this.shadowRoot.querySelector("#homer-cancel-btn")
    startBtn.onclick = (e)=>{
      console.log("time picker value:", timePicker.value)
      if(!timePicker.value) {
        alert("请先正确设置自动购买的时间")
        return
      }
      startBtn.classList.add("homer-hide")
      cancelBtn.classList.remove("homer-hide")
      timePicker.classList.add("homer-hide")
      leftTimeDiv.classList.remove("homer-hide")
      settingTime.classList.remove("homer-hide")
      settingTime.innerText = timePicker.value

      let hoursAndMinutes = timePicker.value.split(":")
      let settingDate = new Date()
      settingDate.setHours(parseInt(hoursAndMinutes[0]))
      settingDate.setMinutes(parseInt(hoursAndMinutes[1]))
      settingDate.setSeconds(0)
      settingDate.setMilliseconds(0)
      this.settingTime = settingDate.getTime()
      let diff = settingDate.getTime() - this.serverTime
    }
    cancelBtn.onclick = (e)=>{
      timePicker.classList.remove("homer-hide")
      settingTime.classList.add("homer-hide")
      leftTimeDiv.classList.add("homer-hide")
      startBtn.classList.remove("homer-hide")
      cancelBtn.classList.add("homer-hide")

      this.settingTime = null
    }
    return this
  }
  updateInfoBox() {
    if(this.serverTime) {
      this.shadowServerTime.innerText = this.normalizeTime(this.serverTime)
    }
    if(!this.settingTime) return
    let leftTime = this.settingTime - this.serverTime - 8 * 60 * 60 * 1000
    this.shadowLeftTime.innerText = this.normalizeTime(leftTime)
  }
  normalizeTime(millisecond) {
    millisecond += 8 * 60 * 60 * 1000 // 中国时区补正
    let d = Math.floor(millisecond / (24 * 60 * 60 * 1000))
    millisecond -= d * 24 * 60 * 60 * 1000
    let h = Math.floor(millisecond / (60 * 60 * 1000))
    millisecond -= h * 60 * 60 * 1000
    let m = Math.floor(millisecond / (60 * 1000))
    millisecond -= m * 60 * 1000
    let s = Math.floor(millisecond / 1000)
    return `${h} : ${m} : ${s}`
  }
  updateServerTime() {
    // let serverTimeString = this.normalizeTime(this.serverTime)
    this.updateInfoBox()
    this.serverTimer = setTimeout(()=>{
      this.serverTime += 1000
      this.updateServerTime()
    }, 1000)
    return this
  }
  onInteractive() {
    let self = this
    console.log("BaseScript onInteractive this:", this)
    let pOnload = new Promise(function(resolve, reject) {
      window.addEventListener("load", function() {
        console.log("onload")
        resolve()
      })
    })
    let pSynchronised = new Promise(function(resolve, reject) {
      self.synchronisedTime(self.synchronisedUrl, function(date) {
        console.log("synchronisedTime")
        resolve()
      })
    })
    Promise.all([pOnload, pSynchronised])
      .then(()=>{
        this.insertInfoBox().updateServerTime()
        return this.onLoadAndSynchronise()
      })
      .then(this.onActivityStart.bind(this))
  }
  onComplete() {

  }
  onLoadAndSynchronise() {
    // NOTE: interface implement by subclass
    // NOTE: this method will be called when onLoadAndSynchronise's promise is resolved
  }
  onActivityStart() {
    // NOTE: interface implement by subclass
  }
}

export default BaseScript