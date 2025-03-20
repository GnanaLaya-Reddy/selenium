const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function locateElements() {
  let driver = await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options()).build();//opening chrome
  try {
    await driver.get('https://www.wikipedia.org');//open wikipedia
    // Locate elements using different locators
    let searchBox = await driver.findElement(By.name('search')); // Locate by name
    let logo = await driver.findElement(By.css('.central-textlogo__image')); // Locate by CSS selector
    console.log('Elements located successfully!');
  } catch (err) {
    console.error('Error:', err);//if error print it
  } finally {
    await driver.quit(); // exit the opened chrome tab
  }
})();
