# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testcase1.test.ts >> testcase1
- Location: tests\testcase1.test.ts:2:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'submit' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e39]:
    - generic [ref=e41]:
      - heading "Login to your account" [level=2] [ref=e42]
      - generic [ref=e43]:
        - generic: 31POjeauPjgfL4eI4bAAtVQfQoKxdStk2onmy1pSPSDFs9YsDLIhmAfcTyNA0y6j
        - textbox "Email Address" [ref=e44]
        - textbox "Password" [ref=e45]
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - generic: 31POjeauPjgfL4eI4bAAtVQfQoKxdStk2onmy1pSPSDFs9YsDLIhmAfcTyNA0y6j
        - textbox "Name" [ref=e53]: Praveen
        - textbox "Email Address" [active] [ref=e54]: praveen33@gmail.com
        - generic: signup
        - button "Signup" [ref=e55] [cursor=pointer]
  - contentinfo [ref=e56]:
    - generic [ref=e61]:
      - heading "Subscription" [level=2] [ref=e62]
      - generic [ref=e63]:
        - textbox "Your email address" [ref=e64]
        - button "" [ref=e65] [cursor=pointer]:
          - generic [ref=e66]: 
        - paragraph [ref=e67]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e71]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e72]:
    - iframe [ref=e75]:
      - iframe [ref=f20e1]:
        - generic [active]:
          - generic [ref=f24e1]:
            - generic [ref=f24e2]:
              - generic:
                - img [ref=f24e6] [cursor=pointer]
                - button [ref=f24e8] [cursor=pointer]:
                  - img [ref=f24e9]
            - insertion [ref=f24e17]:
              - generic [ref=f24e18]:
                - link "Click Here" [ref=f24e19]:
                  - /url: https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=ClOh0iP88auHVJaL40PEP88eToQz5zOD_hwG0usSI9RShpvjz0B0QASD9tJ6VAWDlmuiD2A6gAYviiqAByAEJqAMByAObBKoEgwJP0IoTjhVyUEGSaEb380TfqGQhuNcqL1FztKi4N237iH1dCAGrGHT9v2XvCZLHM-NSjKsIVRFziLibGtrpl1JG1pUgywjqvOYskNE77ZDhsfShgTaybIKetynDbFJMUOp22zU3Ml19iGg_h_Oobsr438Sx16B98IbHgE0yM3HG7uxdOqEjjM6kVeTDQsgD8D7-4nHqDZ01O7fep5xVDgomKRMZXQhv6uT5RMObOZMOIQ30t05LMHYhojTiiQz0BaIZgnooe7CN7r6hYvTsJcQYjUc5Is5ESkaFTTIQthe8dbE3wFBFVBapo4JVkdIE7IaJ9a8ZgAPDbF5i4NuXXFwyC2nSwASaxOuykwXgBAOIBe2K3IBTkAYBoAZNgAfdnfXfAqgHp8yxAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAqgH59exAtgHANIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYruuDkZSilQNgAYAKAZgLAcgLAYAMAaoNAklO6g0TCPrBiZGUopUDFSI8NAgd8-MkxPANAYgOCbATkNj4ItATANgTDYgUAdgUAdAVAcoWAgoA-BYBgBcBshcEGAJQBrIYCRICnWMYTSIBANAZAQ&ae=1&num=1&cid=CAQSiAIAEQoqgekahnDOqctkvlwMTjFucp75L26He04-HtZ__DWylwUU6M9sUTdKIzLSAYe7PX_-3j3MMKIy1aOZc4DW20C7irrNbO-L3ZdHp1ty3Ck0GaidMQjkBObUy5Z75gvo_blH5asq59AkhvBkaO7IM-9MR8rrvNlE1XtUWfdBC0M2nsRvLwYnHfri1z5zT-78yYGvq1JhO5gmpQn53XzHnojs-Sf0jF4m48FCwqiJIx9xL-lnN9Q5KRM7vLfDxURciBivwEH1lB0ile9d_9W72DnqqM2jtacNr5PlSU6_HWSaYdPgFk7lzK768fMuHLK7veI1sNVUVXTA2-GS3v9WOnFA80LeLJ4YAQ&sig=AOD64_3IMsLd9ytXCPhrd0yi1xsIcrt9Kg&client=ca-pub-1677597403311019&dbm_c=AKAmf-Bj37YG6DqOSm_fZb7CN4yYSAiGxHhF3lqrD7GgQuuIwlpgic635MEEGYfet5-0dOKeWJwvi4YOz6aZEQ9QGuhoaO2j75boeEsX8Qb-BxOJZeaHuC4ZMiZGhfB4VbmDiwbqx42ycZ17NLzLuXabWafBq3Q4Ege6YXOWVlNV7KA3a2ewVFIfkPQLdA4eCmehwGiM_LtY2RqxplSUkvPx5GLhC4ErmilnckXmOQglxQf704NaqJyWqmU3d-D2mKbigfWAsfVj1jo__i3ba7Kl1bLsN45eFTiiIyVd50F24w8kqHS4veA&cry=1&dbm_d=AKAmf-DXmcCgrEBHZRvWhHffjyV0X14b3jQrhBiAHGlIsxICiG9eDiTyfRuolTJgBr9jm9ZxdpzO-zEoeqKic9Z9AIsflWI7cT5XVfdkj0YKwc3wPN-X0UuNJbI9UkJigNQfR92KdkjibfvFgn2IOhO_AGVzbh8ljZAPn92-STbzlB1vRbdsZH-fkOzavHiJdAv256A6m0nTUISKnbZFrWrZNZZfP2vfoelHG_vZOkhrAzYBK18MRF4hq5_OJ9ddgklN6vcfFvOme1vHpsH_2nFAVE2AaYdpfm46JD9wuP8AF1i88SssiFZ0t4EyIYWuusSdXlPPO2TH_cDncUgBu9SWkFeSfB4NU48Ul1KAZGi4b3yTEtLmtA8EgLnNtFK60Jh6qNatnjHczKLeeY0sAEipfIE5_C3N_iS2JE2PZux5Pm0HBBEt8cwcQPRPgOnWfOoGELZhx56u7CoCJJF6EC79RBY0htEfU-xvGG6f4SjVwet1ngooJrG0lvcMLA-pe1t6bP_h_92f7C87bMwFubv3dQVnPjgc3KC69kREfVsz7fwei3WpVnkzEuEPVFQdbOkgPmk9FnoyeFtsX8NG47EFs5vL0JoyGnSQH3BRyU22NAbkYX35jj2WQx-AqJWT-vWjokS3XKLHgsJGAtW1XOUEmZ-bAi6sZ1K_enzlxsbOheGVp6ZvygoOepaWiwhFOwYMtJd8_N4L&adurl=https://servedby.flashtalking.com/click/7/296969;10263352;5404140;210;0/?us_privacy=!!US_PRIVACY!&ft_partnerimpid=ABAjH0hHK07HR96FnZHwyjbgbEdS&ft_impID=3CC1C1E6-A77D-D046-3E6B-E42555D63A4F&ft_section=22281651565&g=67500EF9670860&random=664835.4896751281&ft_width=728&ft_height=90&url=https://www.adobe.com/in/creativecloud.html?sdid=PC1PQ9XF&mv=display&mv2=display
                  - img "Click Here" [ref=f24e20]
                - link "AdChoices arrow" [ref=f24e22]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img "AdChoices arrow" [ref=f24e23]
                - link "Privacy Notification" [ref=f24e25]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f24e26]
                - link "Privacy Notification" [ref=f24e28]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f24e29]
          - iframe
  - insertion [ref=e77]:
    - generic [ref=e80]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e82]: Discover more
      - link "Video tutorials subscription" [ref=e83] [cursor=pointer]:
        - generic "Video tutorials subscription" [ref=e84]
        - img [ref=e86]
      - link "Software testing tools" [ref=e88] [cursor=pointer]:
        - generic "Software testing tools" [ref=e89]
        - img [ref=e91]
      - link "Automation practice website" [ref=e93] [cursor=pointer]:
        - generic "Automation practice website" [ref=e94]
        - img [ref=e96]
  - generic [ref=e98]:
    - generic [ref=e99] [cursor=pointer]:
      - img [ref=e101]
      - link "Go to shopping options for Video tutorials subscription" [ref=e103]: Video tutorials subscription
    - button "Close shopping anchor" [ref=e104]
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
     |                                                    ^ Error: locator.click: Test timeout of 30000ms exceeded.
  10 | 
  11 | 
  12 | })
```