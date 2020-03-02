const {Builder, Key, By, until, wait} = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');

function Singleton() {
  if(Singleton.instance) {
    return Singleton.instance
  }
  let newDriver = function () {
    return new webdriver.Builder()
        .forBrowser('chrome')
        .build()
  };
  Singleton.instance = this;
  this.driver = newDriver()
}
const browser = new Singleton();

function waitForElementIsEnabledAndDisplayed(element) {
  try {
    for (let i = 1; i < 10; i++) {
      if (!element.isEnabled() && !element.isDisplayed()) {
        browser.driver.sleep(1000);
      }
    }
    if (element.isEnabled() && element.isDisplayed()) {
      console.log('Element is Enabled and Displayed');
    }
  } catch (e) {
    if (e) {
      throw "element is not Enabled and Displayed";
    }
  }
}

describe('BBC test',  function () {
    browser.driver.manage().window().maximize();
    browser.driver.manage().setTimeouts({pageLoad:20000});
  it('BBC test', async function() {
    await browser.driver.get('https://bbc.com');
    const searchField = await browser.driver.findElement(By.id('orb-search-q'))
    waitForElementIsEnabledAndDisplayed(searchField);
    await browser.driver.findElement(By.id('orb-search-q')).sendKeys('Belarus');
    await browser.driver.findElement(By.xpath('//nav[1]/div[1]/ul[1]/li[2]')).click();
    await browser.driver.wait(until.elementLocated(By.xpath('//div[@class=\'orb-nav-section orb-nav-blocks\']')), 5000);

  });

  after(() => browser.driver && browser.driver.quit());
});

