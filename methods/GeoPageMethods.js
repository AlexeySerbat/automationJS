function geoPageElements () {
    const EC = protractor.ExpectedConditions;
    const geoPageElements = require('../pages/geoPageElements');
    this.changeLocation = async function (city) {
        await geoPageElements.geoName.click();
        await browser.wait(EC.presenceOf(geoPageElements.geoInput));
        await geoPageElements.geoInput.clear();
        await geoPageElements.geoInput.sendKeys(city);
        await browser.wait(EC.presenceOf(geoPageElements.geoInputDropdown));
        await browser.wait(EC.textToBePresentInElement(geoPageElements.geoInputDropdown, city),10000);
        await geoPageElements.geoInputDropdown.click();
        await browser.wait(EC.presenceOf(geoPageElements.geoName));
        await expect(geoPageElements.geoName.getText()).toBe(city);
    };
}

module.exports = new geoPageElements();