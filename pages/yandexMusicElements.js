function yandexMusicElements() {
    this.searchInput = element(by.css('.d-suggest__input.deco-input__suggest > input'));
    this.firstElInSearch = element(by.css('div.d-suggest__items.d-suggest__items_type_artist > div:nth-child(2)'));
    this.nameOfAuthor = element(by.css('div.d-generic-page-head__main-top > h1'));
    this.firstInPopular = element(by.css('div.page-artist__albums > div:nth-child(1) > div.album__title.deco-typo.typo-main > a'));
    this.firstPlayButton = element(by.xpath('//div[1]/div[1]/div[1]/div[3]/span[1]/button[1]/span[1]/span[1]'));
    this.autorName = element(by.css('div.track__artists.deco-link.deco-link_no-hover-color > span > a'));
    this.playButton = element(by.css('div.player-controls__btn.deco-player-controls__button.player-controls__btn_play'));
}

module.exports = new yandexMusicElements();