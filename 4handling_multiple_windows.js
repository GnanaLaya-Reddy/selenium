const { Builder, By, Key } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

(async function handleMultipleWindows() {
  let driver = await new Builder().forBrowser("chrome").setChromeOptions(new chrome.Options()).build();
  try {
    // Open first URL
    await driver.get("https://www.google.com");
    console.log("Opened Google");
    // Open a new tab using JavaScript
    await driver.executeScript("window.open('https://www.wikipedia.org', '_blank');");
    await driver.sleep(2000); // Wait for the tab to open
    // Get all window handles
    let windowHandles = await driver.getAllWindowHandles();
    console.log("Window Handles:", windowHandles);
    // Ensure the handles are strings before switching
    if (windowHandles.length > 1 && typeof windowHandles[1] === "string") {
      console.log("Switching to second window...");
      await driver.switchTo().window(windowHandles[1]); // Switch to new tab
      console.log("Switched to Wikipedia tab");
      console.log("Switching to first window...");
      await driver.switchTo().window(windowHandles[0]); // Switch to old tab
      console.log("Switched to chrome tab");
    } else {
      console.error("No valid second window handle found");
    }
    await driver.sleep(3000); // Wait to see the new tab
  } catch (err) {
    console.error("Error:", err);//if error print it
  } finally {
    await driver.quit(); // Close browser
  }
})();
