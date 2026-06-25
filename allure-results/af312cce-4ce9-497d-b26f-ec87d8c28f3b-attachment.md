# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demoblaze.test.ts >> test
- Location: tests\demoblaze.test.ts:4:1

# Error details

```
Error: page.goForward: Test ended.
Call log:
  - waiting for navigation until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { url } from 'node:inspector';
  3  | 
  4  | test('test', async ({ page }) => {
  5  |   await page.goto('https://www.demoblaze.com/');
  6  |   await page.getByRole('link', { name: 'Log in' }).click();
  7  |   await page.locator('#loginusername').click();
  8  |   await page.locator('#loginusername').fill('admin');
  9  |   await page.locator('#loginpassword').click();
  10 |   await page.locator('#loginpassword').fill('admin');
  11 |   await page.getByRole('button', { name: 'Log in' }).click();
  12 |   const title=await page.title();
  13 |   console.log("Title:",title);
  14 |   const url=await page.url();
  15 |   console.log("URL:",url);
  16 |   const html=await page.content();
  17 |   console.log("HTML:",html);
  18 |   await expect(page.getByRole('link', { name: 'Welcome admin' })).toBeVisible();
  19 |   await page.waitForTimeout(5000);
  20 |   await page.goto("https://www.flipkart.com/")
  21 |   await page.goBack();
  22 |   await page.waitForTimeout(5000);
> 23 |   await page.goForward();
     |              ^ Error: page.goForward: Test ended.
  24 |   await page.waitForTimeout(5000);
  25 |   await page.reload();
  26 |   await page.close();
  27 | });
```