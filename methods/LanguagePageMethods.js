function languagePageMethods() {
    const EC = protractor.ExpectedConditions;
    const languagePageElements = require('../pages/languagePageElements');
    this.chooseEnglish = async function () {
        await languagePageElements.languageButton.click();
        await browser.executeScript('arguments[0].click();', languagePageElements.languageEnglish);
        await browser.wait(EC.elementToBeClickable(languagePageElements.saveButton));
        await languagePageElements.saveButton.click();
    }
}

module.exports = new languagePageMethods();