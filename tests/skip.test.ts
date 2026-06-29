import { Page } from 'playwright';
import { expect,test } from '@playwright/test';
test("Login test1",async({page})=>{
    await page.goto("https://www.demoblaze.com/");
    await page.getByRole("link",{name:"Log in"}).click()
    await page.fill("#loginusername","admin");
    await page.fill("#loginpassword","admin");
    await page.click("//button[normalize-space()='Log in']")
    await expect(page.getByRole("link",{name:"Log out"})).toBeVisible()
    await expect(page.getByRole("link",{name:"Log out"})).toHaveText("Log out");
    const expected=await page.locator("#nameofuser").textContent();
    expect(expected).toContain("Welcome admin")
})
test.skip("Login test2",async({page})=>{
    await page.goto("https://www.demoblaze.com/");
    await page.getByRole("link",{name:"Log in"}).click()
    await page.fill("#loginusername","admin");
    await page.fill("#loginpassword","admin");
    await page.click("//button[normalize-space()='Log in']")
    await expect(page.getByRole("link",{name:"Log out"})).toBeVisible()
    await expect(page.getByRole("link",{name:"Log out"})).toHaveText("Log out");
    const expected=await page.locator("#nameofuser").textContent();
    expect(expected).toContain("Welcome admin")
})
test.only("Login test3",async({page})=>{
    await page.goto("https://www.demoblaze.com/");
    await page.getByRole("link",{name:"Log in"}).click()
    await page.fill("#loginusername","admin");
    await page.fill("#loginpassword","admin");
    await page.click("//button[normalize-space()='Log in']")
    page.on("dialog", async dialog => {
    console.log(dialog.message());
    await dialog.accept();
   });
    await expect(page.getByRole("link",{name:"Log out"})).toBeVisible()
    await expect(page.getByRole("link",{name:"Log out"})).toHaveText("Log out");
    const expected=await page.locator("#nameofuser").textContent();
    expect(expected).toContain("Welcome admin")
})