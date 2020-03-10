describe('Project structure case', () => {
    const EC = protractor.ExpectedConditions;
    const yandexPage = require('./PageObject/yandexPage.js');

    beforeEach(function () {
        browser.get('https://yandex.by/').then(() => {
            EC.titleIs('Яндекс');
        });
    });

    it('test', () => {
        yandexPage.geoName.click().then(() => {
            browser.getAllWindowHandles().then(function (handles) {
                expect(handles.length).toEqual(2);
                browser.switchTo().window(handles[1]);
                browser.wait(EC.presenceOf(yandexPage.cityLabel));
            });
        });
        yandexPage.geoInput.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        yandexPage.geoInput.sendKeys(protractor.Key.DELETE);
        yandexPage.geoInput.sendKeys('Лондон').then(() => {
            browser.wait(EC.presenceOf(yandexPage.geoInputDropdown));
            yandexPage.geoInputDropdown.click().then(() => {
                browser.wait(EC.presenceOf(yandexPage.geoName));
                expect(yandexPage.geoName.getText()).toBe('Лондон').then(() => {
                    yandexPage.elseButton.click().then(() => {
                        const londonUpEl = yandexPage.elseUpperElements.count();
                        const londonLowEl = yandexPage.elseUpperElements.count().then(() => {
                                yandexPage.geoName.click().then(() => {
                                    browser.getAllWindowHandles().then(function (handles) {
                                        expect(handles.length).toEqual(3);
                                        browser.switchTo().window(handles[2]);
                                        browser.wait(EC.presenceOf(yandexPage.cityLabel));
                                    });
                                }).then(() => {
                                    yandexPage.geoInput.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
                                    yandexPage.geoInput.sendKeys(protractor.Key.DELETE).then(() => {
                                        yandexPage.geoInput.sendKeys('Париж').then(() => {
                                            browser.sleep(1000);
                                            browser.wait(EC.presenceOf(yandexPage.geoInputDropdown));
                                            yandexPage.geoInputDropdown.click().then(() => {
                                                browser.wait(EC.presenceOf(yandexPage.geoName));
                                                expect(yandexPage.geoName.getText()).toBe('Париж').then(() => {
                                                    yandexPage.elseButton.click().then(() => {
                                                        const parisUpEl = yandexPage.elseUpperElements.count();
                                                        const parisLowEl = yandexPage.elseUpperElements.count().then(() => {
                                                                expect(londonUpEl).toEqual(parisUpEl);
                                                                expect(londonLowEl).toEqual(parisLowEl);
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                        });


                    });
                });
            });
        });
    });
});
