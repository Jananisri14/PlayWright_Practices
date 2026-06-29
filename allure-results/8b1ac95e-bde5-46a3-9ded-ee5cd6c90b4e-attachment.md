# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demoqaclicks.test.ts >> Different Clicks
- Location: tests\demoqaclicks.test.ts:2:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('#dynamicClickMessage')
Expected substring: "You have done a dynamic click"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('#dynamicClickMessage')

```

```yaml
- banner:
  - link:
    - /url: https://demoqa.com
    - img
- img
- text: Elements
- img
- list:
  - listitem:
    - link "Text Box":
      - /url: /text-box
      - img
      - text: Text Box
  - listitem:
    - link "Check Box":
      - /url: /checkbox
      - img
      - text: Check Box
  - listitem:
    - link "Radio Button":
      - /url: /radio-button
      - img
      - text: Radio Button
  - listitem:
    - link "Web Tables":
      - /url: /webtables
      - img
      - text: Web Tables
  - listitem:
    - link "Buttons":
      - /url: /buttons
      - img
      - text: Buttons
  - listitem:
    - link "Links":
      - /url: /links
      - img
      - text: Links
  - listitem:
    - link "Broken Links - Images":
      - /url: /broken
      - img
      - text: Broken Links - Images
  - listitem:
    - link "Upload and Download":
      - /url: /upload-download
      - img
      - text: Upload and Download
  - listitem:
    - link "Dynamic Properties":
      - /url: /dynamic-properties
      - img
      - text: Dynamic Properties
- img
- text: Forms
- img
- img
- text: Alerts, Frame & Windows
- img
- img
- text: Widgets
- img
- img
- text: Interactions
- img
- img
- text: Book Store Application
- img
- heading "Buttons" [level=1]
- button "Double Click Me"
- button "Right Click Me"
- button "Click Me"
- paragraph: You have done a double click
- contentinfo: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1 | import { expect,test } from "@playwright/test";
  2 | test("Different Clicks",async({page})=>{
  3 |     await page.goto("https://demoqa.com/buttons");
  4 |     await page.locator("#doubleClickBtn").dblclick()
> 5 |     await expect(page.locator("#dynamicClickMessage")).toContainText("You have done a dynamic click")
    |                                                        ^ Error: expect(locator).toContainText(expected) failed
  6 | 
  7 | })
```