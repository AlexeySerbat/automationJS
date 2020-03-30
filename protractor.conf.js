exports.config = {
    framework: 'jasmine2',
    seleniumServerJar: "node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.4.0.jar",
    directConnect: true,
    SELENIUM_PROMISE_MANAGER: false,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./tests/secondPull.js'],
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
             excludeSwitches: ['enable-automation'],
             args: [//"--headless",
                 //"--disable-gpu",
                 //"--window-size=800x600",
                 "disable-infobars"],
        }
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 240000
    },

    onPrepare: function () {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().deleteAllCookies();
        browser.driver.manage().window().maximize();
        const AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'reports/allure-results'
        }));
        let jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: 'reports/xml',
            filePrefix: 'xmlresults'
        }));
        let fs = require('fs-extra');

        fs.emptyDir('reports/screenshots/', function (err) {
            console.log(err);
        });

        jasmine.getEnv().addReporter({
            specDone: function(result) {
                if (result.status == 'failed') {
                    browser.getCapabilities().then(function (caps) {
                        let browserName = caps.get('browserName');

                        browser.takeScreenshot().then(function (png) {
                            let stream = fs.createWriteStream('reports/screenshots/' + browserName + '-' + result.fullName+ '.png');
                            stream.write(new Buffer(png, 'base64'));
                            stream.end();
                        });
                    });
                }
            }
        });
    },
    onComplete: function() {
        let browserName, browserVersion;
        let capsPromise = browser.getCapabilities();

        capsPromise.then(function (caps) {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');
            platform = caps.get('platform');

            let HTMLReport = require('protractor-html-reporter-2');

            testConfig = {
                reportTitle: 'Protractor Test Execution Report',
                outputPath: 'reports/protractorHTMLreport',
                outputFilename: 'ProtractorTestReport',
                screenshotPath: 'reports/screenshots',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: true,
                testPlatform: platform
            };
            new HTMLReport().from('reports/xml/xmlresults.xml', testConfig);
        });
    }
};