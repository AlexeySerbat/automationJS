function languagePageMethods() {
    const EC = protractor.ExpectedConditions;
    const languagePageElements = require('../pages/languagePageElements');
    this.chooseEnglish = async function () {
        await languagePageElements.languageButton.click();
        await languagePageElements.languageEnglish.click();
        await browser.wait(EC.elementToBeClickable(languagePageElements.saveButton));
        await languagePageElements.saveButton.click();
    }
}

module.exports = new languagePageMethods();