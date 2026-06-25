# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testcase1.test.ts >> testcase1
- Location: tests\testcase1.test.ts:2:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Home')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Home')

```

```yaml
- heading "This website is under heavy load (queue full)" [level=2]
- paragraph: We're sorry, too many people are accessing this website at the same time. We're working on this problem. Please try again later.
```

# Test source

```ts
  1  | import { expect,test } from '@playwright/test';
  2  | test("testcase1",async({page}) => {
  3  |     await page.goto('http://automationexercise.com');
> 4  |     await expect(page.getByText("Home")).toBeVisible();
     |                                          ^ Error: expect(locator).toBeVisible() failed
  5  |     await page.getByRole('link',{name:'login'}).click();
  6  |     await page.locator("//h2[normalize-space()='New User Signup!']").isVisible();
  7  |     await page.getByPlaceholder("Name").fill("Praveen");
  8  |     await page.locator("//input[@data-qa='signup-email']").fill("praveen33@gmail.com")
  9  |     await page.getByRole("button",{name:"Signup"}).click();
  10 |     await expect(page.getByText("Enter Account Information")).toBeVisible();
  11 |     await page.fill("#password","praveen@123")
  12 |     await page.getByRole('textbox', { name: 'First name *' }).fill("Praveen");
  13 |     await page.locator("//input[@id='last_name']").fill("Kumar");
  14 |     await page.fill("#address1","TTT Stret");
  15 |     await page.getByLabel("Country *").selectOption({label:"India"});
  16 |     await page.locator("#state").fill("Tamil Nadu");
  17 |     await page.fill("#city","Madurai")
  18 |     await page.fill("#zipcode","765845");
  19 |     await page.fill("#mobile_number","7658456789");
  20 |     await page.getByRole("button",{name:'Create Account'}).click();
  21 |     await expect(page.getByText("Account Created!")).toBeVisible();
  22 | 
  23 | 
  24 | 
  25 | 
  26 | })
```