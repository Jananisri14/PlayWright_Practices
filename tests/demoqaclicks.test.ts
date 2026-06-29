import { expect,test } from "@playwright/test";
test("Different Clicks",async({page})=>{
    await page.goto("https://demoqa.com/buttons");
    await page.locator("#doubleClickBtn").dblclick()
    await expect(page.locator("//p[@id='doubleClickMessage']")).toContainText("You have done a double click");
    await page.locator("#rightClickBtn").click({button:"right"})
    await expect(page.locator("#rightClickMessage")).toContainText("You have done a right click");
    await page.locator("#userName").press("$");

    

})