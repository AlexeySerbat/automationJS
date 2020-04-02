function YandexMusicMethods() {
    const yandexMusicElements = require('../pages/yandexMusicElements');
    const EC = protractor.ExpectedConditions;
    this.search = async function (searchText) {
        await yandexMusicElements.searchInput.sendKeys(searchText)
    };
    this.chooseFirstEl = async function (author) {
        await browser.wait(EC.textToBePresentInElement(yandexMusicElements.firstElInSearch, author));
        await yandexMusicElements.firstElInSearch.click();
    };
    this.expectIsAuthor = async function (author) {
        await browser.wait(EC.presenceOf(yandexMusicElements.nameOfAuthor));
        await expect(yandexMusicElements.nameOfAuthor.getText()).toEqual(author);
    };
    this.expectAuthorIsInPopularAlbums = async function (author) {
        await expect(yandexMusicElements.firstInPopular.getText()).toEqual(author);
    };
    this.playFirstTrackInPopular = async function () {
        await browser.wait(EC.presenceOf(yandexMusicElements.firstPlayButton));
        await browser.executeScript('arguments[0].click();', yandexMusicElements.firstPlayButton);
        await browser.wait(EC.presenceOf(yandexMusicElements.autorName));
        await browser.sleep(3000);
    };
    this.expectTrackIsPlaying = async function () {
        await expect(yandexMusicElements.playButton.getAttribute('title'))
            .toEqual('Пауза [P]')
    };
    this.pauseTrackAndExpectIsStopped = async function () {
        await yandexMusicElements.playButton.click();
        await expect(yandexMusicElements.playButton.getAttribute('title'))
            .toEqual('Играть [P]');

    }
}

module.exports = new YandexMusicMethods();