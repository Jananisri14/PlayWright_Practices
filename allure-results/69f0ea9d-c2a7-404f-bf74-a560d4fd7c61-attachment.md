# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Alerts2.test.ts >> test2
- Location: tests\Alerts2.test.ts:2:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "You pressed OK!"
Received: {"_apiName": "Locator", "_frame": {"_guid": "frame@c569649ec16a2ced4ca441b291e12587", "_type": "Frame"}, "_selector": "//p[@id='confirm-demo']", Symbol(nodejs.util.inspect.custom): [Function anonymous]}
```

# Test source

```ts
  1  | import {expect,test} from "@playwright/test";
  2  | test("test2",async({page})=>{
  3  |     await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/");
  4  |     page.on("dialog",async(alert)=>{
  5  |         const text=alert.message();
  6  |         console.log(text);
  7  |         await alert.dismiss();
  8  | 
  9  | 
  10 |     })
  11 |     await page.getByText('Click Me').nth(1).click();
  12 |     await page.waitForTimeout(5000);
> 13 |     await expect(page.locator("//p[@id='confirm-demo']")).toBe("You pressed OK!")
     |                                                           ^ Error: expect(received).toBe(expected) // Object.is equality
  14 | });
  15 | 
```