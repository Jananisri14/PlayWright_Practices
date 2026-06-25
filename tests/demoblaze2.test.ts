
import { chromium,test} from "@playwright/test";
test("Login test demo", async ()=> {
    const browser=await chromium.launch({
        headless:false
    });
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://www.demoblaze.com/")
    await page.click("//a[@id='login2']")
    await page.locator('#loginusername').click();
    await page.locator('#loginusername').fill('admin');
    await page.locator('#loginpassword').click();
    await page.locator('#loginpassword').fill('admin');
    await page.click("//button[normalize-space()='Log in']");
    await page.waitForTimeout(5000);
    const page1=await context.newPage();
    await page1.goto("https://www.demoblaze.com/cart.html");
    await page1.waitForTimeout(5000);
    // const newcontext=await browser.newContext();//if we created a new context it will run in the new page
    // const newpage=await newcontext.newPage();
    // await newpage.goto("https://www.demoblaze.com/cart.html")
    // await page.waitForTimeout(5000)




});