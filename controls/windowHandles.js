function windowsHandles() {
    this.changeToSecondWindow = function (){
         browser.getAllWindowHandles().then(  async function (handles) {
             await browser.switchTo().window(handles[1]);
        });
    };
    this.changeToFirstWindow = async function () {
        await browser.driver.close();
        await browser.getAllWindowHandles().then(async function (handles) {
            await browser.switchTo().window(handles[0]);
        });
    }
}

module.exports = new windowsHandles();