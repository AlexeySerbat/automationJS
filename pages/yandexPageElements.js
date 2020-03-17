function yandexPageElements () {
    this.elseButton = element(by.xpath('//div[2]/div[1]/div[1]/div[1]/a[8]'));
    this.elseDropdown = element(by.xpath('//div[7]/div[2]'));
}

module.exports = new yandexPageElements();