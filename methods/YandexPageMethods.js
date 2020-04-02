function yandexPageMethods() {
    const EC = protractor.ExpectedConditions;
    const yandexPageElements = require('../pages/yandexPageElements');
    const languagePageElements = require('../pages/languagePageElements');
    const windowsHandles = require('../controls/windowHandles');
    const yandexMarketElements = require('../pages/yandexMarketElements');
    const loginPageMethods = require('../methods/LoginPageMethods');
    const loginPageElements = require('../pages/loginPageElements');
    const yandexMusicElements = require('../pages/yandexMusicElements');

    this.countElse = async function () {
        await yandexPageElements.elseButton.click();
        await browser.wait(EC.presenceOf(yandexPageElements.elseDropdown));
    };
    this.goToYandexPages = async function () {
        const yandexPage = ['Эфир' || 'Фильмы', 'Яндекс.Картинки', 'Яндекс.Новости', 'Яндекс.Карты', 'Яндекс.Маркет'];

        await yandexPageElements.yandexVideo.click();
        await windowsHandles.changeToSecondWindow();
        await browser.wait(EC.titleContains(yandexPage[0]));
        await EC.titleIs(yandexPage[0]);
        await browser.navigate().back();
        await windowsHandles.changeToFirstWindow();

        await yandexPageElements.yandexPictures.click();
        await windowsHandles.changeToSecondWindow();
        await browser.wait(EC.titleContains(yandexPage[1]));
        await EC.titleIs(yandexPage[1]);
        await browser.navigate().back();
        await windowsHandles.changeToFirstWindow();

        await yandexPageElements.yandexNews.click();
        await windowsHandles.changeToSecondWindow();
        await browser.wait(EC.titleContains(yandexPage[2]));
        await EC.titleIs(yandexPage[2]);
        await browser.navigate().back();
        await windowsHandles.changeToFirstWindow();

        await yandexPageElements.yandexMaps.click();
        await windowsHandles.changeToSecondWindow();
        await browser.wait(EC.titleContains(yandexPage[3]));
        await EC.titleIs(yandexPage[3]);
        await browser.navigate().back();
        await windowsHandles.changeToFirstWindow();

        await yandexPageElements.yandexMarket.click();
        await windowsHandles.changeToSecondWindow();
        await browser.wait(EC.titleContains(yandexPage[4]));
        await EC.titleIs(yandexPage[4]);
        await browser.navigate().back();
        await windowsHandles.changeToFirstWindow();
    };
    this.clickOnCurrentLanguage = async function () {
        await yandexPageElements.languageButton.click();
        await browser.wait(EC.presenceOf(yandexPageElements.elseLanguage));
        await yandexPageElements.elseLanguage.click();
        await browser.wait(EC.presenceOf(languagePageElements.languageButton));
    };
    this.expectEnglishIsCurrentLang = async function () {
        await browser.wait(EC.presenceOf(yandexPageElements.languageButton));
        await yandexPageElements.languageButton.click();
        await browser.wait(EC.presenceOf(yandexPageElements.elseLanguage));
        await yandexPageElements.elseLanguage.click();
        await browser.wait(EC.presenceOf(yandexPageElements.languageDropdown));
        await expect(yandexPageElements.languageDropdown.getText()).toEqual("English");
    };
    this.goToYandexMarket = async function () {
        await yandexPageElements.yandexMarket.click();
        await windowsHandles.changeToSecondWindow();
        await browser.wait(EC.presenceOf(yandexMarketElements.searchInput));
    };
    this.goToYandexMusic = async function () {
        await browser.wait(EC.presenceOf(yandexPageElements.yandexMusic));
        await yandexPageElements.yandexMusic.click()
        await windowsHandles.changeToSecondWindow();
        await browser.wait(EC.presenceOf(yandexMusicElements.searchInput));
    };
    this.loginIntoYandex = async function () {
        await yandexPageElements.loginButton.click();
        await windowsHandles.changeToSecondWindow();
        await browser.wait(EC.presenceOf(loginPageElements.submitLogin));
        await loginPageElements.passwordField.isPresent().then(async (isPresent) => {
            if (isPresent === true){
                await loginPageMethods.enterPasswordAndClickEnter('AutotestUser123');
            } else {
                await loginPageMethods.enterLoginAndClickEnter('AutotestUser');
                await loginPageMethods.enterPasswordAndClickEnter('AutotestUser123');
            }
        });
        await windowsHandles.changeToFirstWindow();
    };
    this.loginIntoYandexMusic = async function () {
        await yandexPageElements.loginButton.click();
        await windowsHandles.changeToSecondWindow();
        await loginPageMethods.enterPasswordAndClickEnter('AutotestUser123');
        await windowsHandles.changeToFirstWindow();
    }
}

module.exports = new yandexPageMethods();
