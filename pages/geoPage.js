function geoPage () {
    const EC = protractor.ExpectedConditions;
    this.geoName = element(by.css('.geolink__reg'));
    this.geoInput = element(by.css('.input__control.input__input'));
    this.geoInputDropdown = element(by.css('ul.popup__items.input__popup-items li:nth-child(1)'));
    this.changeLocation = async function (city) {
        await this.geoName.click();
        await browser.wait(EC.presenceOf(this.geoInput));
        await this.geoInput.clear();
        await this.geoInput.sendKeys(city);
        await browser.wait(EC.presenceOf(this.geoInputDropdown));
        await browser.sleep(1500);
        await this.geoInputDropdown.click();
        await browser.wait(EC.presenceOf(this.geoName));
    };
}

module.exports = new geoPage();