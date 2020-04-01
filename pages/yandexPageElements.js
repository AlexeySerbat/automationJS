function yandexPageElements () {
    this.elseButton = element(by.xpath('//div[2]/div[1]/div[1]/div[1]/a[8]'));
    this.elseDropdown = element(by.xpath('//div[7]/div[2]'));
    this.loginButton = element(by.css('.button.desk-notif-card__login-enter-expanded.button_theme_gray'));
    this.yandexVideo = element(by.css(`div.home-arrow__tabs > div > a:nth-child(1)`));
    this.yandexPictures = element(by.css('div.home-arrow__tabs > div > a:nth-child(2)'));
    this.yandexNews = element(by.css('div.home-arrow__tabs > div > a:nth-child(3)'));
    this.yandexMaps = element(by.css('div.home-arrow__tabs > div > a:nth-child(4)'));
    this.yandexMarket = element(by.css('div.home-arrow__tabs > div > a:nth-child(5)'));
    this.yandexMusic = element(by.css('div.home-arrow__tabs > div > a:nth-child(7)'));
    this.languageButton = element(by.css('div.col.headline__bar-item.b-langs > div > a'));
    this.languageDropdown = element(by.css('.i-bem.select_js_inited > button > span'));
    this.elseLanguage = element(by.css('.popup2_visible_yes > ul > div:nth-child(2) > li > a'));
}

module.exports = new yandexPageElements();