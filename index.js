const {Builder,By,Key,util}=require("selenium-webdriver");
async function exe()
{
    let driver=await new Builder().forBrowser("firefox").build();

    await driver.get("https://www.google.com/");
    await driver.wait(until.titleContains("Google"),100000);
    console.log("TEST CASE 1 = GOOGLE");

    await driver.findElement(By.name("q")).sendKeys("selenium",Key.RETURN);
    await driver.wait(until.titleContains("selenium"),100000);
    console.log("TEST CASE 2=selenium");

   const c= await driver.findElement(By.name("q"));
   const d=await c.isDisplayed();
   console.log("test case 4: ${d}");
   
}
exe();