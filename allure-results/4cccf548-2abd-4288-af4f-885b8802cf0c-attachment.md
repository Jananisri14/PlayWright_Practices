# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testcase1.test.ts >> testcase1
- Location: tests\testcase1.test.ts:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Continue' })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Automation Exercise website" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Automation Exercise website" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e40]:
    - heading "Account Created!" [level=2] [ref=e41]
    - paragraph [ref=e42]: Congratulations! Your new account has been successfully created!
    - paragraph [ref=e43]: You can now take advantage of member privileges to enhance your online shopping experience with us.
    - link "Continue" [ref=e45] [cursor=pointer]:
      - /url: /
  - contentinfo [ref=e46]:
    - generic [ref=e51]:
      - heading "Subscription" [level=2] [ref=e52]
      - generic [ref=e53]:
        - textbox "Your email address" [ref=e54]
        - button "" [ref=e55] [cursor=pointer]:
          - generic [ref=e56]: 
        - paragraph [ref=e57]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e61]: Copyright © 2021 All rights reserved
  - text: 
  - generic:
    - insertion:
      - generic:
        - iframe
  - insertion [ref=e62]:
    - iframe [ref=e65]:
      - iframe [ref=f30e1]:
        - generic [active]:
          - generic [ref=f31e1]:
            - generic [ref=f31e2]:
              - generic:
                - img [ref=f31e6] [cursor=pointer]
                - button [ref=f31e8] [cursor=pointer]:
                  - img [ref=f31e9]
            - insertion [ref=f31e16]:
              - generic [ref=f31e17]:
                - link "Click Here" [ref=f31e18] [cursor=pointer]:
                  - /url: https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=CTGOvYxM9aqWSJtm29fwPiqmI0Arx-_bqhQGn-bT3ohXKuozxvgEQASD9tJ6VAWDlmuiD2A6gAYviiqAByAEJqAMByAObBKoEnQJP0BlY9Sc_HO7ydYpWQx9lMg30NColFAL6YfJaR2LvRuMSu5GaCBHu_jWq5tpedHH8i_rI0kXgq8Lhmf6mbRT34Z94tWYANoXC-PrTuOf07_9ptNuC57r94GBPe6bNcH1DjWrX3YNzqm_j6onRst-I0eUtN2Ds0xfTK3g_w2Q-4HaAsAqT1DwoDLvKsqYUm_5fQyD3nrJPVEwYJWP0i_Ep_gqr1GCZTwoM-Y64z9lFb1hsSSIMZNL3DEEAhkRm1u3ANi_YHuwgZKGLlnGvS58alovfF1z1PM4uMNEGmoMKcF4nfaE6VrcQ6Dv322icdxaM30A_p9JF8HyZ1EAUNNGfp7KW9x906bezrFei0fRWgqSD2eAqjkuIL7fKarXABO6c2ILBBOAEA4gFmceP_U2QBgGgBk2AB92d9d8CqAenzLECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrECqAfn17EC2AcA0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOliNpOuIp6KVA2ABgAoBmAsByAsBgAwBqg0CSU7qDRMIrNjriKeilQMVWVudCR2KFAKq8A0BiA4JsBP-7Oci0BMA2BMNiBQB2BQB0BUByhYCCgD4FgGAFwGyFwQYAlAGshgJEgLoWBhNIgEA0BkB2BkB&ae=1&num=1&cid=CAQS9AEAEQoqgcdvieD3V6Dj8UESlKHPZk2qJrge5-sSzEp_4qLMBqi5gV-D9F3LisHZWnRO5RGWXWuDVR88u3AD8rji0waX-B0NW-sWCJ_m1UZJLNwcpiuJtOLz6ga2N_-zq79f7m8BBqiWXi1AHXRUj5wXufVm_sU9awJ-EclSv5ezNrHpJIx1Ep44FjWLtXLk-jFk85N3M7AVyaUSOWu5drJMTzAF2xG6bTKiWdbAWcGlkVja8OkEK8sBd4AGGJHx4Q-XrcJDcmibaxr4qmWtUCshSiDM02j_bzluaspfp9u3CNA-BVvQZdgoEvRBxKiXT5AujzR5GAE&sig=AOD64_1GYFI5Trip9MJCW2Rj_DrgnlVm4g&client=ca-pub-1677597403311019&dbm_c=AKAmf-CyIOfTZdwhISclzDRpp1GDqfTKeYWsa5QgNp_n7Wvh_mnh_9TePrBihXk6MSq5hjDLogkXve9AgfIpYWukhEue0MbXSBxanlfLRFOkQHaScbTtiB7zGlia5YJYU_sa2BrKBcFbd0KBYbsc_phwv8I57x9iHxzT5TR2wErmUuN6Y6hSOHTe-8nKRnrBO5C_fYIa7QTO9oyvWPUHoBBQ9gtUIfbNdnt3NE5fxAVYhphVN4TcmrI5TrzgqWJu-lpvhSXv-tEW90KrQjakABOxYPxO3LWUcqf5Q6VTHOe4sCdHCFVaArw&cry=1&dbm_d=AKAmf-BxtDAWQo2z4ISe0F1NlON2wJMgguQtGaVJ5OTRMom-NPW6RSDQ-_U8i24c7U8YYLPiySW61v-GiDeSVw2lJrzrpw5pWBY_7iYsKCvXH1KICxCndpU-9GXOArT2vPRfdZ5u9exRIFl214kIOGapcb7HVhNxfXJC_gGj-FR4dW18L-z00-Vp1ukIZLhC3PmuBPpcZwsjekv8LzdX9gwjrKGYq3NB4ZAe4txotX2fWnFD01I95km2afnyNBKwcf1gEX8XsHABoykN4ufoIlckdtKtHTjfR9dzxfEi1twADpPxkQYzIbkdoC761uJ6a-cI4cEBqhllIz1pDlo14i-uC299wvlJWA88S5IQvJD9BKaPq226aj74F4CeXGLDCMmozJ5csur1ooKnqwtEA2KgiPN4Zcrvgt-lSNh7zIqJJylX4JSIexpPXuYGhhzYQcUrSqbacZxyiRKcf9F_8TEqunewLiDKXXUKYOtxhAOA7_Ji0baGs11tl8H91dy-FeoePdz2EXSPpw9X4bIEYljXsLtJFUO8XvKmRUHoHlPK8t4_a1IE5jgJD22WtDxA_iRuSrJ9q8FkrzNefCgRtdNrN3cWj_M7UFIHxu1t3FC-N_SwIlz0YajIVxPD7j-7wIVe83UXxo2o93-kPZ9lFkyQtU-4RU9na_X8iXVyHFnENdRQSuqaZFomt0Sczjt-YTADouS_bSzGmvEBRZu5LRhoJgmEOWIpUQ&adurl=https://servedby.flashtalking.com/click/7/296969;10262952;6106266;210;0/?us_privacy=!!US_PRIVACY!&ft_partnerimpid=ABAjH0iZaAqS4NervZoZ4LftEvma&ft_impID=A732463F-2E9C-C84B-1725-2C7FB3DE8934&ft_section=20931928985&g=6750A2373A9FD3&random=963579.6238712467&ft_width=728&ft_height=90&url=https://www.adobe.com/in/creativecloud.html?sdid=PC1PQ9XF&mv=display&mv2=display
                  - img "Click Here" [ref=f31e19]
                - link "AdChoices arrow" [ref=f31e21] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img "AdChoices arrow" [ref=f31e22]
                - link "Privacy Notification" [ref=f31e24] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f31e25]
                - link "Privacy Notification" [ref=f31e27] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f31e28]
          - iframe
```

# Test source

```ts
  1  | import { expect,test } from '@playwright/test';
  2  | 
  3  | test("testcase1",async({page}) => {
  4  |     await page.goto('http://automationexercise.com');
  5  |     await expect(page.getByText("Home")).toBeVisible();
  6  |     await page.getByRole('link',{name:'login'}).click();
  7  |     await page.locator("//h2[normalize-space()='New User Signup!']").isVisible();
  8  |     await page.getByPlaceholder("Name").fill("Dhanush");
  9  |     await page.locator("//input[@data-qa='signup-email']").fill("dhanush20@gmail.com")
  10 |     await page.getByRole("button",{name:"Signup"}).click();
  11 |     await expect(page.getByText("Enter Account Information")).toBeVisible();
  12 |     await page.fill("#password","dhanush@123")
  13 |     await page.locator("#newsletter").check()
  14 |     await page.locator("#optin").check()
  15 |     await page.getByRole('textbox', { name: 'First name *' }).fill("Dhanush");
  16 |     await page.locator("//input[@id='last_name']").fill("Kumar");
  17 |     await page.fill("#address1","KKR Street");
  18 |     await page.getByLabel("Country *").selectOption({label:"India"});
  19 |     await page.locator("#state").fill("Tamil Nadu");
  20 |     await page.fill("#city","Erode")
  21 |     await page.fill("#zipcode","606615");
  22 |     await page.fill("#mobile_number","6785456789");
  23 |     await page.getByRole("button",{name:'Create Account'}).click();
  24 |     await expect(page.getByText("Account Created!")).toBeVisible();
> 25 |     await page.getByRole("button",{name:"Continue"}).click();
     |                                                      ^ Error: locator.click: Test timeout of 30000ms exceeded.
  26 |     await expect(page.getByText('Logged in as Dhanush')).toBeVisible();
  27 |     await page.getByRole("link",{name:"delete_account"}).click();
  28 |     await expect(page.getByText("Account Deleted!")).toBeVisible();
  29 |     await page.getByRole("button",{name:"Continue"}).click();
  30 | 
  31 | 
  32 | 
  33 | 
  34 | })
```