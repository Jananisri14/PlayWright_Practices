# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testcase1.test.ts >> testcase1
- Location: tests\testcase1.test.ts:2:1

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('button', { name: 'submit' })

```

# Test source

```ts
  1  | import { expect,test } from '@playwright/test';
  2  | test("testcase1",async({page}) => {
  3  |     await page.goto('http://automationexercise.com');
  4  |     await expect(page.getByText("Home")).toBeVisible();
  5  |     await page.getByRole('link',{name:'login'}).click();
  6  |     await page.locator("//h2[normalize-space()='New User Signup!']").isVisible();
  7  |     await page.getByPlaceholder("Name").fill("Praveen");
  8  |     await page.locator("//input[@data-qa='signup-email']").fill("praveen33@gmail.com")
> 9  |     await page.getByRole("button",{name:"submit"}).click();
     |                                                    ^ Error: locator.click: Target page, context or browser has been closed
  10 | 
  11 | 
  12 | })
```