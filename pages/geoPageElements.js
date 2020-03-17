function geoPageElements () {
    this.geoName = element(by.css('.geolink__reg'));
    this.geoInput = element(by.css('.input__control.input__input'));
    this.geoInputDropdown = element(by.xpath('//div[5]/div[2]/ul[1]/li[1]'));
}

module.exports = new geoPageElements();