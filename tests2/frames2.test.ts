import {expect,test} from "@playwright/test";
test("test2",async({page})=>{
    await page.goto("https://letcode.in/frame");
    const allframes=page.frames();
    console.log("Get Frames:"+allframes.length)
    const myfr=await page.frame("firstFr")
    await myfr?.fill("//input[@placeholder='Enter name']","janani")
    await myfr?.fill(" //input[@placeholder='Enter email']","sri")
    const fr=page.frameLocator(" //iframe[@id='firstFr']")
    await expect(await page.frameLocator('#firstFr').locator('p:has-text("You have entered janani sri")')).toContainText("You have entered janani sri");
});