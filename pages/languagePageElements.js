function languagePageElements() {
    this.languageButton = element(by.css('.select_js_inited > button'));
    this.saveButton = element(by.css('div:nth-child(5) > div > button'));
    this.languageEnglish = element(by.cssContainingText('.select__text', 'English'))
}

module.exports = new languagePageElements();

