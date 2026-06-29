# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: skip.test.ts >> Login test3
- Location: tests\skip.test.ts:23:6

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Welcome admin"
Received: ""
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - dialog "Log in" [ref=e2]:
    - document [ref=e3]:
      - generic [ref=e4]:
        - generic [ref=e5]:
          - heading "Log in" [level=5] [ref=e6]
          - button "Close" [ref=e7] [cursor=pointer]: ×
        - generic [ref=e9]:
          - generic [ref=e10]:
            - generic [ref=e11]: "Username:"
            - textbox [ref=e12]: admin
          - generic [ref=e13]:
            - generic [ref=e14]: "Password:"
            - textbox [active] [ref=e15]: admin
        - generic [ref=e17]:
          - button "Close" [ref=e18]
          - button "Log in" [ref=e19]
  - text:             
  - navigation [ref=e20]:
    - link "PRODUCT STORE" [ref=e21] [cursor=pointer]:
      - /url: index.html
      - img [ref=e22]
      - text: PRODUCT STORE
    - list [ref=e24]:
      - listitem [ref=e25]:
        - link "Home (current)" [ref=e26] [cursor=pointer]:
          - /url: index.html
          - text: Home
          - generic [ref=e27]: (current)
      - listitem [ref=e28]:
        - link "Contact" [ref=e29] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e30]:
        - link "About us" [ref=e31] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=e32]:
        - link "Cart" [ref=e33] [cursor=pointer]:
          - /url: cart.html
      - listitem [ref=e34]:
        - link "Log in" [ref=e35] [cursor=pointer]:
          - /url: "#"
      - listitem
      - listitem
      - listitem [ref=e36]:
        - link "Sign up" [ref=e37] [cursor=pointer]:
          - /url: "#"
    - generic [ref=e39]:
      - list [ref=e40]:
        - listitem [ref=e41] [cursor=pointer]
        - listitem [ref=e42] [cursor=pointer]
        - listitem [ref=e43] [cursor=pointer]
      - img "First slide" [ref=e46]
      - button "Previous" [ref=e47] [cursor=pointer]:
        - generic [ref=e49]: Previous
      - button "Next" [ref=e50] [cursor=pointer]:
        - generic [ref=e52]: Next
  - generic [ref=e54]:
    - generic [ref=e56]:
      - link "CATEGORIES" [ref=e57] [cursor=pointer]:
        - /url: ""
      - link "Phones" [ref=e58] [cursor=pointer]:
        - /url: "#"
      - link "Laptops" [ref=e59] [cursor=pointer]:
        - /url: "#"
      - link "Monitors" [ref=e60] [cursor=pointer]:
        - /url: "#"
    - list [ref=e63]:
      - listitem [ref=e64]:
        - button "Previous" [ref=e65]
      - listitem [ref=e66]:
        - button "Next" [ref=e67] [cursor=pointer]
  - generic [ref=e69]:
    - generic [ref=e72]:
      - heading "About Us" [level=4] [ref=e73]
      - paragraph [ref=e74]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e77]:
      - heading "Get in Touch" [level=4] [ref=e78]
      - paragraph [ref=e79]: "Address: 2390 El Camino Real"
      - paragraph [ref=e80]: "Phone: +440 123456"
      - paragraph [ref=e81]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e85]:
      - img [ref=e86]
      - text: PRODUCT STORE
  - contentinfo [ref=e87]:
    - paragraph [ref=e88]: Copyright © Product Store
```

# Test source

```ts
  1  | import { Page } from 'playwright';
  2  | import { expect,test } from '@playwright/test';
  3  | test("Login test1",async({page})=>{
  4  |     await page.goto("https://www.demoblaze.com/");
  5  |     await page.getByRole("link",{name:"Log in"}).click()
  6  |     await page.fill("#loginusername","admin");
  7  |     await page.fill("#loginpassword","admin");
  8  |     // await expect(page.getByRole("link",{name:"Log out"})).toBeVisible()
  9  |     // await expect(page.getByRole("link",{name:"Log out"})).toHaveText("Log out");
  10 |     const expected=await page.locator("#nameofuser").textContent();
  11 |     expect(expected).toContain("Welcome admin")
  12 | })
  13 | test.skip("Login test2",async({page})=>{
  14 |     await page.goto("https://www.demoblaze.com/");
  15 |     await page.getByRole("link",{name:"Log in"}).click()
  16 |     await page.fill("#loginusername","admin");
  17 |     await page.fill("#loginpassword","admin");
  18 |     // await expect(page.getByRole("link",{name:"Log out"})).toBeVisible()
  19 |     // await expect(page.getByRole("link",{name:"Log out"})).toHaveText("Log out");
  20 |     const expected=await page.locator("#nameofuser").textContent();
  21 |     expect(expected).toBe("Welcome admin")
  22 | })
  23 | test.only("Login test3",async({page})=>{
  24 |     await page.goto("https://www.demoblaze.com/");
  25 |     await page.getByRole("link",{name:"Log in"}).click()
  26 |     await page.fill("#loginusername","admin");
  27 |     await page.fill("#loginpassword","admin");
  28 |     // await expect(page.getByRole("link",{name:"Log out"})).toBeVisible()
  29 |     // await expect(page.getByRole("link",{name:"Log out"})).toHaveText("Log out");
  30 |     const expected=await page.locator("#nameofuser").textContent();
> 31 |     expect(expected).toBe("Welcome admin")
     |                      ^ Error: expect(received).toBe(expected) // Object.is equality
  32 | })
```