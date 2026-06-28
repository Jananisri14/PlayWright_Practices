import {expect,test} from "@playwright/test";
test("test2",async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/");
    page.on("dialog",async(alert)=>{
        const text=alert.defaultValue();
        console.log(text);
        await alert.accept("Janani");


    })
   
    await expect(page.locator("#prompt-demo")).toHaveText("You have entered 'Janani' !")
});