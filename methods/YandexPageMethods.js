function yandexPageMethods() {
    const EC = protractor.ExpectedConditions;
    const yandexPageElements = require('../pages/yandexPageElements');
    this.countElse = async function () {
        await yandexPageElements.elseButton.click();
        await browser.wait(EC.presenceOf(yandexPageElements.elseDropdown));
    };
}

module.exports = new yandexPageMethods();
