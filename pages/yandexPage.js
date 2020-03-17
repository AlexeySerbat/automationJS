function yandexPage () {
    const EC = protractor.ExpectedConditions;
    this.elseButton = element(by.xpath('//div[2]/div[1]/div[1]/div[1]/a[8]'));
    this.elseDropdown = element(by.xpath('//div[7]/div[2]'));
    this.countElse = async function () {
        await this.elseButton.click();
        await browser.wait(EC.presenceOf(this.elseDropdown));
    }
}
module.exports = new yandexPage();