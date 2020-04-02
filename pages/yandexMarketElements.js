function yandexMarketElements() {
    this.searchInput = element(by.id('header-search'));
    this.searchButton1 = element(by.css('span.search2__button > button'));
    this.searchButton2 = element(by.css('form > div > div:nth-child(2) > button'));
    this.addFirstElement = element(by.css('div:nth-child(1) > div.n-snippet-cell2__hover > div > div > div'));
    this.textOfFirstElement = element(by.css('div:nth-child(1) > div.n-snippet-cell2__header > h3 > a'));
    this.addSecondElement = element(by.css('div:nth-child(2) > div.n-snippet-cell2__hover > div > div > div'));
    this.comparisonPopUp = element(by.css('body > div.popup-informer.i-bem.popup-informer_js_inited'));
    this.compareElement = element(by.css('body > div.main > div.header2.suggest-owner.i-bem.header2_type_default > noindex > div > div > div.header2__middle > div > div.header2__right > div.header2-menu.header2-menu_loading_yes.i-bem.header2-menu_js_inited > a.link.header2-menu__item.header2-menu__item_type_compare.i-bem.link_js_inited > span.header2-menu__icon-wrap > span.header2-menu__count.personal-counter.personal-counter_provider_comparison.i-bem.personal-counter_js_inited.personal-counter_empty_no.header2-menu__count_draw_yes'));
    this.compareButton = element(by.cssContainingText('.header2-menu__item_type_compare > span.header2-menu__text', 'Сравнение'));
    this.comparisonField = element(by.css('div.n-compare-head.i-bem.n-compare-head_js_inited > div > div > div'));
    this.firstComparedElement = element(by.xpath('//div[1]/div[5]/div[2]/div[4]/div/div/div/div[1]/a'));
    this.secondComparedElement = element(by.xpath('//div[1]/div[5]/div[2]/div[4]/div/div/div/div[2]/a'));
    this.removeButtonFirstEl = element(by.xpath('/html/body/div[1]/div[5]/div[2]/div[4]/div/div/div/div[1]/div[2]/span'));
    this.removeButtonSecondEl = element(by.xpath('/html/body/div[1]/div[5]/div[2]/div[4]/div/div/div/div[2]/div[2]/span'));
    this.emptyComparison = element(by.css('.n-compare__no-data_state_hidden > div'));
    this.electronicsButton = element(by.cssContainingText('div:nth-child(3) > div > a > span', 'Электроника'));
    this.actionCams = element(by.cssContainingText('ul > li:nth-child(3)', 'Экшн-камеры'));
    this.priceSorting = element(by.css('div.n-filter-block_pos_left.i-bem > div:nth-child(3)'));
    this.homeAppliancesButton = element(by.css('div:nth-child(4) > div > a'));
    this.refrigerators = element(by.xpath('//div[1]/div[2]/ul/li[1]/div/a'));
    this.widthInput = element(by.css('div:nth-child(10) > div > div > fieldset > div > ul > li:nth-child(2) > p > input'));
    this.widthCross = element(by.css('div:nth-child(10) > div > div > fieldset > div > ul > li:nth-child(2) > p > button'));
    this.addFirstElAlter = element(by.xpath('/html/body/div[2]/div[5]/div[2]/div[1]/div[2]/div/div[1]/div[1]/div[1]/div/div/div'));
    this.addSecondElAlter = element(by.xpath('/html/body/div[2]/div[5]/div[2]/div[1]/div[2]/div/div[1]/div[2]/div[1]/div/div/div'))
}

module.exports = new yandexMarketElements();