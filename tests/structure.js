describe('Project structure case', () => {
    const yandexPageElements = require('../pages/yandexPageElements.js');
    const yandexPageMethods = require('../methods/YandexPageMethods.js');
    const geoPageMethods = require('../methods/GeoPageMethods.js');

    beforeAll(async () => {
        await browser.get('https://yandex.by/')
    });

    it('test', async () => {
        await geoPageMethods.changeLocation('Лондон');
        await yandexPageMethods.countElse();
        const londonEls = await yandexPageElements.elseDropdown.getText();
        await geoPageMethods.changeLocation('Париж');
        await yandexPageMethods.countElse();
        const parisEls = await yandexPageElements.elseDropdown.getText();
        await expect(londonEls).toEqual(parisEls);
    });
});





