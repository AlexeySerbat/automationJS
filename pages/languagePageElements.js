function languagePageElements() {
    this.languageButton = element(by.css('.select_js_inited > button'));
    this.saveButton = element(by.css('#form__a11y > div:nth-child(4) > div > button'));
    this.languageEnglish = element(by.cssContainingText('.select__text', 'English'))
}

module.exports = new languagePageElements();

