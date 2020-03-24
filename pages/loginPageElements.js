function loginPageElements () {
    this.loginField = element(by.id('passp-field-login'));
    this.passwordField =  element(by.id('passp-field-passwd'));
    this.submitLogin = element(by.xpath('//form[1]/div[3]/button[1]'));
    this.submitPassword = element(by.xpath('//form[1]/div[2]/button[1]'));
    this.logoutButton = element(by.cssContainingText('.b-mail-dropdown__item__content.js-user-dropdown-item ', 'Выйти из сервисов Яндекса'));
    this.errorMessage = element(by.css('.passp-form-field__error'));
    this.anotherAccount = element(by.css('.control.link.link_theme_normal.passp-auth-header-link.passp-auth-header-link_visible'))

}

module.exports = new loginPageElements();