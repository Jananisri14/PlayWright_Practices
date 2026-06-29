# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: parameters.test.ts >> Search Data >> search flow-Selenium
- Location: tests\parameters.test.ts:8:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('h3').first()
    - waiting for navigation to finish...
    - navigated to "https://www.google.com/search?q=Selenium&sca_esv=2ab59e100257b972&source=hp&ei=GR9Cat7bEIHg2roP4pqF8A0&iflsig=ABILxe8AAAAAakItKRvXLECdkO9UcqBso0TZkvpvEr_w&ved=0ahUKEwiezJ349quVAxUBsFYBHWJNAd4Q4dUDCC4…"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - separator [ref=e3]
  - iframe [ref=e8]:
    - generic [ref=f2e2]:
      - generic [ref=f2e3]:
        - checkbox "I'm not a robot" [ref=f2e7]
        - generic [ref=f2e11]: I'm not a robot
      - generic [ref=f2e15]: reCAPTCHA
  - separator [ref=e9]
  - generic [ref=e10]:
    - text: About this page
    - text: Our systems have detected unusual traffic from your computer network. This page checks to see if it's really you sending the requests, and not a robot.
    - link "Why did this happen?" [ref=e11] [cursor=pointer]:
      - /url: "#"
    - generic [ref=e12]:
      - text: "IP address: 49.206.117.252"
      - text: "Time: 2026-06-29T07:30:43Z"
      - text: "URL: https://www.google.com/search?q=Selenium&sca_esv=2ab59e100257b972&source=hp&ei=GR9Cat7bEIHg2roP4pqF8A0&iflsig=ABILxe8AAAAAakItKRvXLECdkO9UcqBso0TZkvpvEr_w&ved=0ahUKEwiezJ349quVAxUBsFYBHWJNAd4Q4dUDCC4&uact=5&oq=Selenium&gs_lp=Egdnd3Mtd2l6IghTZWxlbml1bUgdUABYAHAAeACQAQCYAQCgAQCqAQC4AQPIAQD4AQGYAgCgAgCYAwCSBwCgBwCyBwC4BwDCBwDIBwCACAE&sclient=gws-wiz&sei=Ih9Cav6WCJj8p84Pj5uI4As"
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
     |                               ^ Error: locator.click: Test timeout of 30000ms exceeded.
  14 |             await expect(page).toHaveTitle(new RegExp(data.expectedresult,"i"));
  15 | 
  16 |         })
  17 |     }
  18 | });
  19 | 
```