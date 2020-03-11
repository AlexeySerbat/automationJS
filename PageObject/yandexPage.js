function yandexPage () {
    this.loginButton = element(by.xpath('/html/body/div[1]/div[1]/div/div[1]/div/a[1]'));
    this.geoName = element(by.css('.geolink__reg'));
    this.geoInput = element(by.css('.input__control.input__input'));
    this.cityLabel = element(by.xpath('//div[2]/div[1]/label[1]'));
    this.geoInputDropdown = element(by.css('ul.popup__items.input__popup-items li:nth-child(1)'));
    this.elseButton = element(by.xpath('//div[2]/div[1]/div[1]/div[1]/a[9]'));
    this.elseUpperElements = element.all(by.css('.home-tabs__more-top')).all(by.css('.home-tabs__more-item'));
    this.elseLowerElements = element.all(by.css('.home-tabs__more-bottom')).all(by.css('.home-tabs__more-item'))


}
module.exports = new yandexPage();