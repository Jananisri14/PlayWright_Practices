# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testcase1.test.ts >> testcase1
- Location: tests\testcase1.test.ts:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Enter Account Information')
Expected: visible
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
- textbox "Name": Praveen
- textbox "Email Address": praveen13@gmail.com
- paragraph: Email Address already exist!
- button "Signup"
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
- insertion:
  - iframe
- insertion:
  - iframe
```

# Test source

```ts
  1  | import { expect,test,chromium } from '@playwright/test';
  2  | 
  3  | test("testcase1",async({page}) => {
  4  |     const browser=await chromium.launch({
  5  |             headless:false
  6  |         });
  7  |     await page.goto('http://automationexercise.com');
  8  |     await expect(page.getByText("Home")).toBeVisible();
  9  |     await page.getByRole('link',{name:'login'}).click();
  10 |     await page.locator("//h2[normalize-space()='New User Signup!']").isVisible();
  11 |     await page.getByPlaceholder("Name").fill("Praveen");
  12 |     await page.locator("//input[@data-qa='signup-email']").fill("praveen13@gmail.com")
  13 |     await page.getByRole("button",{name:"Signup"}).click();
> 14 |     await expect(page.getByText("Enter Account Information")).toBeVisible();
     |                                                               ^ Error: expect(locator).toBeVisible() failed
  15 |     await page.fill("#password","praveen@123")
  16 |     await page.getByRole('textbox', { name: 'First name *' }).fill("Praveen");
  17 |     await page.locator("//input[@id='last_name']").fill("Kumar");
  18 |     await page.fill("#address1","TTT Stret");
  19 |     await page.getByLabel("Country *").selectOption({label:"India"});
  20 |     await page.locator("#state").fill("Tamil Nadu");
  21 |     await page.fill("#city","Madurai")
  22 |     await page.fill("#zipcode","765845");
  23 |     await page.fill("#mobile_number","7658456789");
  24 |     await page.getByRole("button",{name:'Create Account'}).click();
  25 |     await expect(page.getByText("Account Created!")).toBeVisible();
  26 | 
  27 | 
  28 | 
  29 | 
  30 | })
```