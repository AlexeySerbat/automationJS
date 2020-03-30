function yandexMarketMethods() {
    const yandexMarketElements = require('../pages/yandexMarketElements');
    const windowsHandles = require('../controls/windowHandles');
    const waiter = require('../controls/waitForClass');
    const EC = protractor.ExpectedConditions;
    this.search = async function (searchText) {
        await yandexMarketElements.searchInput.sendKeys(searchText);
        await yandexMarketElements.searchButton1.isPresent().then(async function(isPresent) {
            if (isPresent === true) {
                await yandexMarketElements.searchButton1.click()
            } else {
                await yandexMarketElements.searchButton2.click()
            }
        });
        await browser.wait(EC.presenceOf(yandexMarketElements.addFirstElement));
        await expect(yandexMarketElements.textOfFirstElement.getText()).toContain(searchText)
    };
    this.addTwoElementToComparison = async function () {
        await browser.wait(EC.presenceOf(yandexMarketElements.addFirstElement || yandexMarketElements.addFirstElAlter));
        await yandexMarketElements.addFirstElement.isPresent().then(async function (isPresent) {
            if(isPresent === true) {
                await yandexMarketElements.addFirstElement.click();
                await browser.wait(EC.presenceOf(yandexMarketElements.comparisonPopUp));
                await yandexMarketElements.addSecondElement.click();
                await browser.wait(EC.presenceOf(yandexMarketElements.comparisonPopUp));
            } else {
                await browser.executeScript('arguments[0].click();', yandexMarketElements.addFirstElAlter);
                await browser.wait(EC.presenceOf(yandexMarketElements.comparisonPopUp));
                await browser.executeScript('arguments[0].click();', yandexMarketElements.addSecondElAlter);
                await browser.wait(EC.presenceOf(yandexMarketElements.comparisonPopUp));
            }
        });
    };
    this.goToCompareAndCheck = async function () {
        await yandexMarketElements.compareButton.click();
        await browser.wait(EC.presenceOf(yandexMarketElements.comparisonField));
        await expect(yandexMarketElements.firstComparedElement.getText()).toContain('Note 8');
        await expect(yandexMarketElements.secondComparedElement.getText()).toContain('Note 8');
    };
    this.removeFromComparison = async function () {
        await browser.wait(EC.presenceOf(yandexMarketElements.removeButtonFirstEl));
        await browser.executeScript('arguments[0].click();', yandexMarketElements.removeButtonFirstEl);
        await browser.executeScript('arguments[0].click();', yandexMarketElements.removeButtonSecondEl);
        await browser.wait(EC.presenceOf(yandexMarketElements.emptyComparison));
    };
    this.expectElementsRemoved = async function () {
        await expect(yandexMarketElements.emptyComparison.getText()).toEqual('Товаров нет');
        await windowsHandles.changeToFirstWindow();
    };
    this.chooseActionCams = async function () {
        await browser.wait(EC.presenceOf(yandexMarketElements.electronicsButton));
        await yandexMarketElements.electronicsButton.click();
        await browser.wait(EC.presenceOf(yandexMarketElements.actionCams));
        await yandexMarketElements.actionCams.click();
    };
    this.sortByPriceDesc = async function () {
        await browser.wait(EC.presenceOf(yandexMarketElements.priceSorting));
        await yandexMarketElements.priceSorting.click();
        await browser.wait(waiter.waitForClass(yandexMarketElements.priceSorting, 'n-filter-sorter i-bem n-filter-sorter_js_inited n-filter-sorter_sort_asc n-filter-sorter_state_select'), 5000);
        await yandexMarketElements.priceSorting.click();
        await browser.wait(waiter.waitForClass(yandexMarketElements.priceSorting, 'n-filter-sorter i-bem n-filter-sorter_js_inited n-filter-sorter_sort_desc n-filter-sorter_state_select'), 5000);
    };
    this.expectSortingByPriceIsDesc = async function () {
        await expect(yandexMarketElements.priceSorting.getAttribute('class')).toMatch('n-filter-sorter i-bem n-filter-sorter_js_inited n-filter-sorter_sort_desc n-filter-sorter_state_select');
        await windowsHandles.changeToFirstWindow();
    };
    this.chooseRefrigerator = async function () {
        await browser.wait(EC.presenceOf(yandexMarketElements.homeAppliancesButton));
        await yandexMarketElements.homeAppliancesButton.click();
        await browser.wait(EC.presenceOf(yandexMarketElements.refrigerators));
        await yandexMarketElements.refrigerators.click();
    };
    this.chooseWidth = async function (width) {
        await browser.wait(EC.presenceOf(yandexMarketElements.widthInput));
        await yandexMarketElements.widthInput.sendKeys(width);
    };
    this.expectSortingByWidth = async function () {
        await browser.wait(EC.presenceOf(yandexMarketElements.widthCross));
        await expect(yandexMarketElements.widthInput.getAttribute('value')).toEqual('50');
        await windowsHandles.changeToFirstWindow();
    }
}

module.exports = new yandexMarketMethods();