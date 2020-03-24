function languagePageElements() {
    this.languageButton = element(by.xpath('/html[1]/body[1]/div[2]/form[1]/div[1]/div[1]/div[1]/div[1]/button[1]'));
    this.languageSelect = element(by.css('.select__control'));
    this.saveButton = element(by.css('#form__a11y > div:nth-child(4) > div > button'));
    this.yandexLogo = element(by.css('body > div.body__wrapper > div.content.i-bem > div.mlogo__container.covers-block.covers-block_z_2 > a > div'));
    this.languageEnglish = element(by.xpath('//option[contains(text(),\'English\')]'))
}

module.exports = new languagePageElements();

