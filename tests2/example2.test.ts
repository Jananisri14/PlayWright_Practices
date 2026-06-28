import {expect,test} from "@playwright/test";
test("test2",async({page})=>{
    await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");
    const input=await page.getByPlaceholder("Please enter your Message");
    console.log("Placeholder:", await input.getAttribute("placeholder"));
    await page.getByPlaceholder("Please enter your Message").fill("Hello!");
    await page.getByRole("button",{name:"Get Checked Value"}).click()
    console.log("After Entering Value:",await page.getByPlaceholder("Please enter your Message").inputValue());
    //await expect(page.locator("#message")).toHaveText("Hello!");

    

    

});
