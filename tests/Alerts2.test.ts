import {expect,test} from "@playwright/test";
test("test2",async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/");
    page.on("dialog",async(alert)=>{
        const text=alert.message();
        console.log(text);
        await alert.dismiss();


    })
    await page.getByText('Click Me').nth(1).click();
    await page.waitForTimeout(5000);
    await expect(page.locator("//p[@id='confirm-demo']")).toBe("You pressed OK!")
});
