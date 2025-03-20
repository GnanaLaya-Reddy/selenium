const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function handleAlerts() {
  let driver = await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options()).build();//opening chrome
  try {
    await driver.get('https://the-internet.herokuapp.com/javascript_alerts');//a website providing js alerts
    await driver.sleep(2000); // Wait 2 seconds to see the page load
    // Click button to trigger alert
    let alertButton = await driver.findElement(By.xpath("//button[text()='Click for JS Alert']"));//finding button showing 'click for js alert'
    await driver.sleep(2000); // Pause before clicking
    await alertButton.click();//clicking
    console.log('Clicked the alert button!');//print the action done
    await driver.sleep(2000); // Wait to see the alert
    let alert = await driver.switchTo().alert();
    console.log('Alert Text:', await alert.getText());
    await driver.sleep(2000); // Pause before accepting
    await alert.accept(); // Click OK
    console.log('Alert accepted!');

    await driver.sleep(2000); // Pause to see the result before closing
  } catch (err) {
    console.error('Error:', err);//if error print the error
  } finally {
    await driver.quit();//exit the chrome tab
  }
}())
