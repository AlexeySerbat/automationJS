function LoginPageMethods () {
    const EC = protractor.ExpectedConditions;
    const yandexPageElements = require('../pages/yandexPageElements');
    const loginPageElements = require('../pages/loginPageElements');
    const mailPageElements = require('../pages/mailPageElements');
    const loginData = require('../data/loginData');
    this.enterLogin = async function() {
        await browser.wait(EC.presenceOf(loginPageElements.loginField));
        await loginPageElements.loginField.sendKeys(loginData.correctData.login);
        await loginPageElements.submitLogin.click();
        await browser.wait(EC.presenceOf(loginPageElements.passwordField));
    };
    this.enterPassword = async function () {
        await browser.wait(EC.presenceOf(loginPageElements.passwordField));
        await loginPageElements.passwordField.sendKeys(loginData.correctData.password);
        await loginPageElements.submitPassword.click();
        await browser.wait(EC.presenceOf(mailPageElements.displayNameOnTop));
    };
    this.enterIncorrectLogin = async function() {
        await browser.wait(EC.presenceOf(loginPageElements.anotherAccount));
        await loginPageElements.anotherAccount.click();
        await browser.wait(EC.presenceOf(loginPageElements.loginField));
        await loginPageElements.loginField.sendKeys(loginData.incorretData.login);
        await loginPageElements.submitLogin.click();
        await browser.wait(EC.presenceOf(loginPageElements.errorMessage));
    };
    this.enterIncorrectPassword = async function () {
        await browser.wait(EC.presenceOf(loginPageElements.passwordField));
        await loginPageElements.passwordField.sendKeys(loginData.incorretData.password);
        await loginPageElements.submitPassword.click();
        await browser.wait(EC.presenceOf(loginPageElements.errorMessage));
    };
    this.logoutMail = async function () {
        await mailPageElements.displayNameOnTop.click();
        await browser.wait(EC.presenceOf(loginPageElements.logoutButton));
        await loginPageElements.logoutButton.click();
        await browser.wait(EC.presenceOf(yandexPageElements.loginButton));
    }
}

module.exports = new LoginPageMethods();