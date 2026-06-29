# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: parameters.test.ts >> Search Data >> search flow-playwright
- Location: tests\parameters.test.ts:8:9

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for locator('h3').first()
    - waiting for navigation to finish...
    - navigated to "https://www.google.com/search?q=playwright&sca_esv=2ab59e100257b972&source=hp&ei=Nh9CarG3LcaRseMP1Ku50Ao&iflsig=ABILxe8AAAAAakItRufmTSGFGWYfvqCSMaNiTpLxUzCo&ved=0ahUKEwixqqSG96uVAxXGSGwGHdRVDqoQ4dUDC…"
    - waiting for" https://www.google.com/search?q=playwright&sca_esv=2ab59e100257b972&source=hp&ei=Nh9CarG3LcaRseMP1Ku50Ao&iflsig=ABILxe8AAAAAakItRufmTSGFGWYfvqCSMaNiTpLxUzCo&ved=0ahUKEwixqqSG96uVAxXGSGwGHdRVDqoQ4dUDC…" navigation to finish...
    - navigated to "https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dplaywright%26sca_esv%3D2ab59e100257b972%26source%3Dhp%26ei%3DNh9CarG3LcaRseMP1Ku50Ao%26iflsig%3DABILxe8AAAAAakItRufmTSG…"

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