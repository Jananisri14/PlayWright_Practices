# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation.test.ts >> test
- Location: tests\navigation.test.ts:4:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.reload: Test timeout of 30000ms exceeded.
Call log:
  - waiting for navigation until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { url } from 'node:inspector';
  3  | 
  4  | test('test', async ({ page }) => {
  5  |   await page.goto('https://www.google.com/');
  6  |   await page.waitForTimeout(5000);
  7  |   await page.goto("https://www.flipkart.com/")
  8  |   await page.waitForTimeout(5000);
  9  |   await page.goBack();
  10 |   await page.waitForTimeout(5000);
  11 |   await page.goForward();
  12 |   await page.waitForTimeout(5000);
> 13 |   await page.reload();
     |              ^ Error: page.reload: Test timeout of 30000ms exceeded.
  14 |   await page.waitForTimeout(5000);
  15 |   await page.close();
  16 | });
```