describe('First tests pull', () => {
    const yandexPageElements = require('../pages/yandexPageElements');
    const yandexPageMethods = require('../methods/YandexPageMethods');
    const loginPageMethods = require('../methods/LoginPageMethods');
    const loginPageElements = require('../pages/loginPageElements');
    const mailPageElements = require('../pages/mailPageElements');
    const languagePageMethods = require('../methods/LanguagePageMethods');
    const windowsHandles = require('../controls/windowHandles');
    const clearData = require('../controls/clearData');
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('https://yandex.by/');
    });
    afterEach(async () => {
        await clearData.clearSessionData();
    });

    it('Login in Yandex.Mail', async () => {
        await yandexPageElements.loginButton.click();
        await windowsHandles.changeToSecondWindow();
        await loginPageMethods.enterLogin();
        await loginPageMethods.enterPassword();
        await expect(mailPageElements.displayNameOnTop.getText()).toEqual('AutotestUser');
        await windowsHandles.changeToFirstWindow();
    });

    it('Log out Yandex.Mail', async () => {
        await yandexPageElements.loginButton.click();
        await windowsHandles.changeToSecondWindow();
        await loginPageMethods.enterPassword();
        await expect(mailPageElements.displayNameOnTop.getText()).toEqual('AutotestUser');
        await loginPageMethods.logoutMail();
        await windowsHandles.changeToFirstWindow();
    });

    it('Incorrect password', async () => {
        await yandexPageElements.loginButton.click();
        await windowsHandles.changeToSecondWindow();
        await loginPageMethods.enterIncorrectPassword();
        await expect(loginPageElements.errorMessage.getText()).toEqual('Неверный пароль');
        await windowsHandles.changeToFirstWindow();
    });

    it('Incorrect login', async () => {
        await yandexPageElements.loginButton.click();
        await windowsHandles.changeToSecondWindow();
        await loginPageMethods.enterIncorrectLogin();
        await expect(loginPageElements.errorMessage.getText()).toEqual('Такого аккаунта нет');
        await windowsHandles.changeToFirstWindow();
    });

    it('Navigation', async () => {
        await yandexPageMethods.goToYandexPages();
    });

    it('Change language', async () => {
        await yandexPageMethods.clickOnCurrentLanguage();
        await languagePageMethods.chooseEnglish();
        await yandexPageMethods.expectEnglishIsCurrentLang();
    });
});