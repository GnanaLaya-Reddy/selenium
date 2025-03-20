const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const fs = require('fs');

(async function takeScreenshot() {
  let driver = await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options()).build();
  try {
    await driver.get('https://www.wikipedia.org');
    // Take a screenshot
    let screenshot = await driver.takeScreenshot();
    fs.writeFileSync('screenshot.png', screenshot, 'base64');
    console.log('Screenshot saved successfully as screenshot.png!');
    await driver.sleep(2000);
  } catch (err) {
    console.error('Error:', err);//if error print it
  } finally {
    await driver.quit();
  }
})();
