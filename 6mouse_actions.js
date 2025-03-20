const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { Actions } = require('selenium-webdriver');

(async function performMouseActions() {
  let driver = await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options()).build();//webdriver instance
  try {
    await driver.get('https://www.wikipedia.org');
    const englishLink = await driver.findElement(By.id('js-link-box-en')); // Find the English language link
    let actions = driver.actions({ async: true });// Create an instance of Actions
    console.log('Hovering over the English language link...');//Mouse Hover Action
    await actions
      .move({ origin: englishLink })  // Move the mouse to the English link
      .perform();  // Perform the hover action
    await driver.sleep(2000); // Wait for 2 seconds to see the hover effect
  } catch (err) {
    console.error('Error:', err);
  } finally {
    await driver.quit();
  }
})();
