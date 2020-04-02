import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
import {describe, it, beforeEach} from 'mocha';

describe('Second Pull', () => {
    const yandexPageMethods = require('../methods/YandexPageMethods');
    const yandexMarketMethods = require('../methods/yandexMarketMethods');
    const yandexMusicMethods = require('../methods/YandexMusicMethods');
    const loginPageMethods = require('../methods/LoginPageMethods');
    const windowsHandles = require('../controls/windowHandles');
    const clearData = require('../controls/clearData');
    beforeEach(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.get('https://yandex.by/');
        await clearData.clearSessionData();
    });

    it('Add to Comparison', async () => {
        await yandexPageMethods.goToYandexMarket();
        await yandexMarketMethods.search('Note 8');
        await yandexMarketMethods.addTwoElementToComparison();
        await yandexMarketMethods.goToCompareAndCheck();
        await windowsHandles.changeToFirstWindow();
    });

    it('Remove from Comparison', async () => {
        await yandexPageMethods.goToYandexMarket();
        await yandexMarketMethods.search('Note 8');
        await yandexMarketMethods.addTwoElementToComparison();
        await yandexMarketMethods.goToCompareAndCheck();
        await yandexMarketMethods.removeFromComparison();
        await yandexMarketMethods.expectElementsRemoved();
    });

    it('Sort in Market', async () => {
        await yandexPageMethods.goToYandexMarket();
        await yandexMarketMethods.chooseActionCams();
        await yandexMarketMethods.sortByPriceDesc();
        await yandexMarketMethods.expectSortingByPriceIsDesc();
    });

    it('Sort by tag', async () => {
        await yandexPageMethods.goToYandexMarket();
        await yandexMarketMethods.chooseRefrigerator();
        await yandexMarketMethods.chooseWidth('50');
        await yandexMarketMethods.expectSortingByWidth();
    });

    it('Yandex Music', async () => {
        await yandexPageMethods.loginIntoYandex();
        await yandexPageMethods.goToYandexMusic();
        await yandexMusicMethods.search('Metal');
        await yandexMusicMethods.chooseFirstEl('Metallica');
        await yandexMusicMethods.expectIsAuthor('Metallica');
        await yandexMusicMethods.expectAuthorIsInPopularAlbums('Metallica');
        await windowsHandles.changeToFirstWindow();
    });
    it('Play Music', async () => {
        // await yandexPageMethods.loginIntoYandexMusic();
        await yandexPageMethods.goToYandexMusic();
        await yandexMusicMethods.search('beyo');
        await yandexMusicMethods.chooseFirstEl('Beyoncé');
        await yandexMusicMethods.playFirstTrackInPopular();
        await yandexMusicMethods.expectTrackIsPlaying();
        await yandexMusicMethods.pauseTrackAndExpectIsStopped();
    });
});