exports.config = {
    framework: 'jasmine2',
    seleniumServerJar: "node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.4.0.jar",
    directConnect: true,
    SELENIUM_PROMISE_MANAGER: false,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./tests/structure.js'],
    multiCapabilities: {
        browserName: 'chrome',
    },
    onPrepare: function () {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().deleteAllCookies();
        browser.driver.manage().window().maximize();
    }
};