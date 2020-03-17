describe('Project structure case', () => {
    const yandexPage = require('../pages/yandexPage.js');
    const geoPage = require('../pages/geoPage.js');

    beforeAll(async () => {
        await browser.get('https://yandex.by/')
    });

    it('test', async () => {
        await geoPage.changeLocation('Лондон');
        await expect(geoPage.geoName.getText()).toBe('Лондон');
        await yandexPage.countElse();
        const londonEls = await yandexPage.elseDropdown.getText();
        await geoPage.changeLocation('Париж');
        await yandexPage.countElse();
        const parisEls = await yandexPage.elseDropdown.getText();
        await expect(londonEls).toEqual(parisEls);
    });
});





