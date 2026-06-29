# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: parameters.test.ts >> Search Data >> search flow-Selenium
- Location: tests\parameters.test.ts:8:9

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for locator('h3').first()
    - waiting for navigation to finish...
    - navigated to "https://www.google.com/search?q=Selenium&sca_esv=2ab59e100257b972&source=hp&ei=Nx9CasDOAeDXrfcP26j4gAo&iflsig=ABILxe8AAAAAakItR445lLKYqR4_O_Ojyfr84dc-mcQB&ved=0ahUKEwiAxrWG96uVAxXga-sIHVsUHqAQ4dUDCC0…"
    - waiting for" https://www.google.com/search?q=Selenium&sca_esv=2ab59e100257b972&source=hp&ei=Nx9CasDOAeDXrfcP26j4gAo&iflsig=ABILxe8AAAAAakItR445lLKYqR4_O_Ojyfr84dc-mcQB&ved=0ahUKEwiAxrWG96uVAxXga-sIHVsUHqAQ4dUDCC0…" navigation to finish...
    - navigated to "https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3DSelenium%26sca_esv%3D2ab59e100257b972%26source%3Dhp%26ei%3DNx9CasDOAeDXrfcP26j4gAo%26iflsig%3DABILxe8AAAAAakItR445lLKYq…"

```

# Test source

```ts
  1  | import { expect,test } from '@playwright/test';
  2  | const searchdata=[{keyword:"playwright",expectedresult:"playwright"},
  3  |     {keyword:"Selenium",expectedresult:"Selenium"},
  4  |     {keyword:"Cypress",expectedresult:"Cypress"}
  5  | ]
  6  | test.describe("Search Data",()=>{
  7  |     for(const data of searchdata){
  8  |         test(`search flow-${data.keyword}`,async({page})=>{
  9  |             await page.goto("https://www.google.com/");
  10 |             await page.locator("textarea[name='q']").fill(data.keyword);
  11 |             await page.keyboard.press("Enter");
  12 |             const firstresult=page.locator("h3").first()
> 13 |             await firstresult.click();
     |                               ^ Error: locator.click: Test ended.
  14 |             await expect(page).toHaveTitle(new RegExp(data.expectedresult,"i"));
  15 | 
  16 |         })
  17 |     }
  18 | });
  19 | 
```