# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testcase1.test.ts >> testcase1
- Location: tests\testcase1.test.ts:3:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Enter Account Information')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Enter Account Information')

```

```yaml
- banner:
  - link "Website for automation practice":
    - /url: /
    - img "Website for automation practice"
  - list:
    - listitem:
      - link " Home":
        - /url: /
    - listitem:
      - link " Products":
        - /url: /products
    - listitem:
      - link " Cart":
        - /url: /view_cart
    - listitem:
      - link " Signup / Login":
        - /url: /login
    - listitem:
      - link " Test Cases":
        - /url: /test_cases
    - listitem:
      - link " API Testing":
        - /url: /api_list
    - listitem:
      - link " Video Tutorials":
        - /url: https://www.youtube.com/c/AutomationExercise
    - listitem:
      - link " Contact us":
        - /url: /contact_us
- heading "Login to your account" [level=2]
- textbox "Email Address"
- textbox "Password"
- button "Login"
- heading "OR" [level=2]
- heading "New User Signup!" [level=2]
- textbox "Name": Dhanush
- textbox "Email Address": dhanush20@gmail.com
- paragraph: Email Address already exist!
- button "Signup"
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
- insertion:
  - heading "These are topics related to the article that might interest you" [level=2]: Discover more
  - link "Automation testing tools"
  - link "Test automation courses"
  - link "Robotic process automation"
```

# Test source

```ts
  1  | import { expect,test } from '@playwright/test';
  2  | 
  3  | test("testcase1",async({page}) => {
  4  |     await page.goto('http://automationexercise.com');
  5  |     await expect(page.getByText("Home")).toBeVisible();
  6  |     await page.getByRole('link',{name:'login'}).click();
  7  |     await page.locator("//h2[normalize-space()='New User Signup!']").isVisible();
  8  |     await page.getByPlaceholder("Name").fill("Dhanush");
  9  |     await page.locator("//input[@data-qa='signup-email']").fill("dhanush20@gmail.com")
  10 |     await page.getByRole("button",{name:"Signup"}).click();
> 11 |     await expect(page.getByText("Enter Account Information")).toBeVisible();
     |                                                               ^ Error: expect(locator).toBeVisible() failed
  12 |     await page.fill("#password","dhanush@123")
  13 |     await page.waitForTimeout(5000);
  14 |     await page.locator("#newsletter").check()
  15 |     await page.locator("#optin").check()
  16 |     await page.getByRole('textbox', { name: 'First name *' }).fill("Dhanush");
  17 |     await page.locator("//input[@id='last_name']").fill("Kumar");
  18 |     await page.fill("#address1","KKR Street");
  19 |     await page.getByLabel("Country *").selectOption({label:"India"});
  20 |     await page.locator("#state").fill("Tamil Nadu");
  21 |     await page.fill("#city","Erode")
  22 |     await page.fill("#zipcode","606615");
  23 |     await page.fill("#mobile_number","6785456789");
  24 |     await page.getByRole("button",{name:'Create Account'}).click();
  25 |     await expect(page.getByText("Account Created!")).toBeVisible();
  26 |     await page.locator("//a[normalize-space()='Continue']").click();
  27 |     await expect(page.getByText('Logged in as Dhanush')).toBeVisible();
  28 |     await page.locator("a[href='/delete_account']").click();
  29 |     await expect(page.getByText("Account Deleted!")).toBeVisible();
  30 |     await page.locator("//a[normalize-space()='Continue']").click();
  31 |     await page.close(); 
  32 | 
  33 | });
```