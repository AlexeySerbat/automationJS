function LoginPageMethods () {
    const EC = protractor.ExpectedConditions;
    const yandexPageElements = require('../pages/yandexPageElements');
    const loginPageElements = require('../pages/loginPageElements');
    const mailPageElements = require('../pages/mailPageElements');
    this.enterLoginAndClickEnter = async function(login) {
        await browser.wait(EC.presenceOf(loginPageElements.loginField));
        await loginPageElements.loginField.sendKeys(login);
        await loginPageElements.submitLogin.click();
        await browser.wait(EC.presenceOf(loginPageElements.passwordField));
    };
    this.enterPasswordAndClickEnter = async function (password) {
        await browser.wait(EC.presenceOf(loginPageElements.passwordField));
        await loginPageElements.passwordField.sendKeys(password);
        await loginPageElements.submitPassword.click();
        await browser.wait(EC.presenceOf(mailPageElements.displayNameOnTop));
    };
    this.enterIncorrectLoginAndCLickEnter = async function(login) {
        await browser.wait(EC.presenceOf(loginPageElements.anotherAccount));
        await loginPageElements.anotherAccount.click();
        await browser.wait(EC.visibilityOf(loginPageElements.loginField));
        await loginPageElements.loginField.sendKeys(login);
        await loginPageElements.submitLogin.click();
        await browser.wait(EC.presenceOf(loginPageElements.errorMessage));
    };
    this.enterIncorrectPasswordAndClickEnter = async function (password) {
        await browser.wait(EC.presenceOf(loginPageElements.passwordField));
        await loginPageElements.passwordField.sendKeys(password);
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