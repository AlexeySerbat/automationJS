describe('First pull', () => {
  let EC = protractor.ExpectedConditions;
  let yandexPage = require('./PageObject/yandexPage.js')
  let loginPage = require('./PageObject/loginPage.js')
  it('Create project structure', () => {
    browser.waitForAngularEnabled(false);
    browser.get('https://yandex.by/');
    yandexPage.geoName.click().then(() => {
      expect(browser.getCurrentUrl()).toBe('https://yandex.by/tune/geo/?retpath=https%3A%2F%2Fyandex.by%2F%3Fdomredir%3D1&nosync=1');
    });
    yandexPage.geoInput.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
    yandexPage.geoInput.sendKeys(protractor.Key.DELETE);
    yandexPage.geoInput.sendKeys('Лондон').then(() => {
      browser.sleep(2000);
    });
    yandexPage.geoInputDropdown.click().then(() => {
      browser.sleep(2000);
      expect(yandexPage.geoName.getText()).toBe('Лондон');
    });
  });

  it('Login to Yandex.Mail', () => {
    yandexPage.loginButton.click().then(() => {
      EC.titleIs('Авторизация');
    });
    loginPage.loginField.sendKeys('AutotestUser')
    loginPage.submitButton.click().then(() =>{
      browser.sleep(1000);
      expect(loginPage.displayName.getText()).toBe('AutotestUser');
    });
    loginPage.passwordField.sendKeys('AutotestUser123');
    loginPage.submitButton.click().then(() => {
      browser.sleep(2000);
      expect(loginPage.displayNameOnTop.getText()).toBe('AutotestUser');
    });
    browser.sleep(2000);
  });

  it('Logout from Yandex Mail', () => {
    loginPage.displayNameOnTop.click();
    loginPage.logoutButton.click().then(() => {
      browser.sleep(1500);
      EC.titleIs('Яндекс');
    });
  });

  it('Login in Yandex Mail with incorrect password', () => {
    yandexPage.loginButton.click().then(() => {
      EC.titleIs('Авторизация');
    });
    expect(loginPage.displayName.getText()).toBe('AutotestUser');
    loginPage.passwordField.sendKeys('NoAutotestUser123');
    browser.sleep(1000);
    loginPage.submitButton.click().then(() => {
      browser.sleep(1000);
      expect(loginPage.errorMessage.getText()).toBe('Неверный пароль');
    });
    browser.sleep(2000);
  });
});