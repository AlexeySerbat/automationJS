function removeAttribute() {
    const yandexPageElements = require('../pages/yandexPageElements');
    this.removeTarget = async function () {
        await browser.executeScript('arguments[0].removeAttribute("target");', yandexPageElements.loginButton.getWebElement());
    }
}

module.exports = new removeAttribute();