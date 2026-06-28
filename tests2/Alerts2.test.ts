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
    const ext="You pressed Cancel!"
    const actual=page.locator("//p[@id='confirm-demo']").textContent();
    console.log(actual)
    await expect(ext).toBe(actual);
    
});
