function yandexPageElements () {
    this.elseButton = element(by.xpath('//div[2]/div[1]/div[1]/div[1]/a[8]'));
    this.elseDropdown = element(by.xpath('//div[7]/div[2]'));
    this.loginButton = element(by.css('.button.desk-notif-card__login-enter-expanded.button_theme_gray'));
    this.yandexVideo = element(by.xpath(`//div[2]/div/div[2]/div/div[1]/div/a[1]`));
    this.yandexPictures = element(by.xpath('//div[2]/div/div[2]/div/div[1]/div/a[2]'));
    this.yandexNews = element(by.xpath('//div[2]/div/div[2]/div/div[1]/div/a[3]'));
    this.yandexMaps = element(by.xpath('//div[2]/div/div[2]/div/div[1]/div/a[4]'));
    this.yandexMarket = element(by.xpath('//div[2]/div/div[2]/div/div[1]/div/a[5]'));
    this.languageButton = element(by.xpath('//div[3]/div[1]/div[1]/div[3]/div[1]/a[1]'));
    this.languageDropdown = element(by.xpath('/html[1]/body[1]/div[9]'));
    this.elseLanguage = element(by.css('body > div.popup2.popup2_view_default.popup2_theme_normal.popup2_alt-shadow_yes.popup2_autoclosable_yes.popup2_target_anchor.i-bem.popup2_js_inited.popup2_direction_bottom-center.popup2_visible_yes > ul > div:nth-child(2) > li > a'));///html/body/div[5]/ul/div[2]/li/a

}

module.exports = new yandexPageElements();