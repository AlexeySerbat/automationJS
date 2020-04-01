function clearData() {
    this.clearSessionData = async function () {
        await browser.executeScript("window.sessionStorage.clear();");
        await browser.executeScript("window.localStorage.clear();");
        await browser.manage().deleteAllCookies();
    }
}

module.exports = new clearData();