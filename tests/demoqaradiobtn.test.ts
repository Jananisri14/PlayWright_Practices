import {expect,test} from "@playwright/test"
test("Radio Button",async({page})=>{
    await page.goto("https://demoqa.com/radio-button");
    await page.waitForTimeout(5000);
    await page.getByLabel("Impressive").check();
    await expect(page.locator("//p[@class='mt-3']")).toContainText("Impressive")
})