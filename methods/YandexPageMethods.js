function yandexPageMethods() {
    const EC = protractor.ExpectedConditions;
    const yandexPageElements = require('../pages/yandexPageElements');
    const languagePageElements = require('../pages/languagePageElements');
    const windowsHandles = require('../controls/windowHandles');
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
        await windowsHandles.changeToFirstWindow();

        await yandexPageElements.yandexPictures.click();
        await windowsHandles.changeToSecondWindow();
        await browser.wait(EC.titleContains(yandexPage[1]));
        await EC.titleIs(yandexPage[1]);
        await windowsHandles.changeToFirstWindow();

        await yandexPageElements.yandexNews.click();
        await windowsHandles.changeToSecondWindow();
        await browser.wait(EC.titleContains(yandexPage[2]));
        await EC.titleIs(yandexPage[2]);
        await windowsHandles.changeToFirstWindow();

        await yandexPageElements.yandexMaps.click();
        await windowsHandles.changeToSecondWindow();
        await browser.wait(EC.titleContains(yandexPage[3]));
        await EC.titleIs(yandexPage[3]);
        await windowsHandles.changeToFirstWindow();

        await yandexPageElements.yandexMarket.click();
        await windowsHandles.changeToSecondWindow();
        await browser.wait(EC.titleContains(yandexPage[4]));
        await EC.titleIs(yandexPage[4]);
        await windowsHandles.changeToFirstWindow();
    };
    this.clickOnCurrentLanguage = async function () {
        await yandexPageElements.languageButton.click();
        await browser.wait(EC.presenceOf(yandexPageElements.elseLanguage));
        await yandexPageElements.elseLanguage.click();
        await browser.wait(EC.presenceOf(languagePageElements.languageButton));
    };
    this.expectEnglishIsCurrentLang = async function () {
        await yandexPageElements.languageButton.click();
        await browser.wait(EC.presenceOf(yandexPageElements.elseLanguage));
        await yandexPageElements.elseLanguage.click();
        await browser.wait(EC.presenceOf(yandexPageElements.languageDropdown));
        expect(yandexPageElements.languageDropdown.getText()).toEqual("English");
    }
}

module.exports = new yandexPageMethods();
