import { expect,test } from '@playwright/test';
test("File Download",async({page})=>{
    await page.goto("https://www.leafground.com/file.xhtml");
    await page.locator("//span[normalize-space()='Download']").click();



})