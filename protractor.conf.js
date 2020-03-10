const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
const AllureReporter = require('jasmine-allure-reporter');
exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['structure.js'],
    multiCapabilities: {
        browserName: 'chrome',
    },
    onPrepare: function () {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().deleteAllCookies();
        browser.driver.manage().window().maximize();
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'test/reports'
            })
        );
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
    }
};