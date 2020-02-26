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
const webDriver = new Singleton();

describe('BBC test',  function () {
     webDriver.driver.manage().window().maximize();
     webDriver.driver.manage().setTimeouts({pageLoad:20000});
  it('BBC test', async function() {

    await webDriver.driver.get('https://bbc.com');
    const searchFieldPresence = await webDriver.driver.findElement(By.id('orb-search-q')).isDisplayed();
    const searchFieldEnabled = await webDriver.driver.findElement(By.id('orb-search-q')).isEnabled();
    if(searchFieldPresence === true && searchFieldEnabled === true) {
      console.log('Element is Displayed and Enabled');
      await webDriver.driver.findElement(By.id('orb-search-q')).sendKeys('Belarus');
    }
    await webDriver.driver.findElement(By.xpath('//nav[1]/div[1]/ul[1]/li[2]')).click();
    await webDriver.driver.wait(until.elementLocated(By.xpath('//div[@class=\'orb-nav-section orb-nav-blocks\']')), 5000);
  });

  after(() => webDriver.driver && webDriver.driver.quit());
});

