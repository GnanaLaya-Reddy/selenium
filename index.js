const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function setupSelenium() {
  let driver = await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options()).build();
  try {
    console.log('Selenium WebDriver setup successful!');//print statement
    await driver.get('https://www.wikipedia.org/'); //opening a website via url
    await driver.sleep(4000); // Wait for 4 seconds
  } catch (err) {
    console.error('Error:', err);//if error print the error
  } finally {
    await driver.quit(); // Close the browser
  }
})();
