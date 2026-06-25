import { expect,test } from '@playwright/test';

test("testcase1",async({page}) => {
    await page.goto('http://automationexercise.com');
    await expect(page.getByText("Home")).toBeVisible();
    await page.getByRole('link',{name:'login'}).click();
    await page.locator("//h2[normalize-space()='New User Signup!']").isVisible();
    await page.getByPlaceholder("Name").fill("Dhanush");
    await page.locator("//input[@data-qa='signup-email']").fill("dhanush20@gmail.com")
    await page.getByRole("button",{name:"Signup"}).click();
    await expect(page.getByText("Enter Account Information")).toBeVisible();
    await page.fill("#password","dhanush@123")
    await page.waitForTimeout(5000);
    await page.locator("#newsletter").check()
    await page.locator("#optin").check()
    await page.getByRole('textbox', { name: 'First name *' }).fill("Dhanush");
    await page.locator("//input[@id='last_name']").fill("Kumar");
    await page.fill("#address1","KKR Street");
    await page.getByLabel("Country *").selectOption({label:"India"});
    await page.locator("#state").fill("Tamil Nadu");
    await page.fill("#city","Erode")
    await page.fill("#zipcode","606615");
    await page.fill("#mobile_number","6785456789");
    await page.getByRole("button",{name:'Create Account'}).click();
    await expect(page.getByText("Account Created!")).toBeVisible();
    await page.locator("//a[normalize-space()='Continue']").click();
    await expect(page.getByText('Logged in as Dhanush')).toBeVisible();
    await page.locator("a[href='/delete_account']").click();
    await expect(page.getByText("Account Deleted!")).toBeVisible();
    await page.locator("//a[normalize-space()='Continue']").click();
    await page.close(); 

});