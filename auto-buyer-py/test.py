# import time
from selenium import webdriver
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

indexUrl = "http://www.jd.com"
loginUrl = "https://passport.jd.com/new/login.aspx"
# url = "https://item.jd.com/3742086.html"
# url1 = "https://graph.qq.com/oauth/show?which=Login&display=pc&response_type=code&client_id=100273020&redirect_uri=https%3A%2F%2Fqq.jd.com%2Fnew%2Fqq%2Fcallback.action%3Fview%3Dnull"
remoteChrome = webdriver.Remote(
   command_executor='http://127.0.0.1:9515',
   desired_capabilities=DesiredCapabilities.CHROME)

jdConfig = {
    "loginname": "hehe",
    "loginpwd": "ww"
}

remoteChrome.get(indexUrl)
# remoteChrome.get(loginUrl)
# switchAccountLoginBtn = remoteChrome.find_element_by_css_selector("#content > div > div.w > div > div.login-tab.login-tab-r > a")
# switchAccountLoginBtn.click()
# loginNameInput = remoteChrome.find_element_by_id("loginname")
# loginPasswordInput = remoteChrome.find_element_by_id("nloginpwd")
# loginSubmitBtn = remoteChrome.find_element_by_id("loginsubmit")
# loginNameInput.send_keys("homer1011110")
# loginPasswordInput.send_keys("wsh10203")
# loginSubmitBtn.click()
