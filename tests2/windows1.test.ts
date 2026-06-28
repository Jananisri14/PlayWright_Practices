import {expect,test} from "@playwright/test";
test("test2",async({page,context})=>{
    await page.goto("https://demoqa.com/browser-windows");
    console.log("First Window url",page.url());
    const [newWindow]=await Promise.all([
        context.waitForEvent("page"),
        page.locator("#windowButton").click(),
        
    ]);
    await newWindow.waitForLoadState("domcontentloaded");
    console.log("New Window Url:",newWindow.url());
    const heading=await newWindow.locator("#sampleHeading").textContent();
    console.log("Heading:",heading);
    await expect(newWindow.locator("#sampleHeading")).toHaveText("This is a sample page");
    await newWindow.close();
    await expect(page).toHaveURL("https://demoqa.com/browser-windows")


});