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
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByPlaceholder('EmailAddress')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
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
  - generic [ref=e39]:
    - generic [ref=e41]:
      - heading "Login to your account" [level=2] [ref=e42]
      - generic [ref=e43]:
        - textbox "Email Address" [ref=e44]
        - textbox "Password" [ref=e45]
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - textbox "Name" [ref=e53]: Praveen
        - textbox "Email Address" [active] [ref=e54]
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
  - insertion [ref=e73]:
    - generic [ref=e76]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e78]: Discover more
      - link "Automation consulting services" [ref=e79] [cursor=pointer]:
        - generic "Automation consulting services" [ref=e80]
        - img [ref=e82]
      - link "Automation practice website" [ref=e84] [cursor=pointer]:
        - generic "Automation practice website" [ref=e85]
        - img [ref=e87]
      - link "Quality assurance training" [ref=e89] [cursor=pointer]:
        - generic "Quality assurance training" [ref=e90]
        - img [ref=e92]
  - insertion [ref=e94]:
    - iframe [ref=e97]:
      - iframe [ref=f17e1]:
        - generic [active]:
          - generic [ref=f18e1]:
            - generic [ref=f18e2]:
              - generic:
                - img [ref=f18e6] [cursor=pointer]
                - button [ref=f18e8] [cursor=pointer]:
                  - img [ref=f18e9]
            - insertion [ref=f18e16]:
              - generic [ref=f18e17]:
                - link "Click Here" [ref=f18e18] [cursor=pointer]:
                  - /url: https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=CxrnN8_48auDOI8fes8IP4Mr2yArd_cvuhQHqrpDioxWv5Z25wEYQASD9tJ6VAWDlmuiD2A6gAYviiqAByAEJqAMByAObBKoEgAJP0DmuJ7xFBF1L3NHYhMhSx75uFOncUd7bDuKdQPoCfW_EeJ6fXd43pUMYO-P1xEk4uJ6G37OY4Vc3ypD7Y01o0X0q05itESDV-SBLjVWelxm24Nj1aOA6P8sjFnrMC3r9PmBgp5dGhRgjiEVyf1BUrVPs2U2p0hoT2--fpF4VdS9ESlhl8Eg3skS-OdZTRXE-XzZKS1tz5E4RpW9GNhjX3NWHWkwTSy-VRQ1pACMBtIEUGWYAHYZAUhUEO469QKazBJklmXNmK63do7fxedmpkjQKY9UdCJaeODCq68AI06qRrmgKnt3MJvMrunS4kWuPg3_sUnFWd884EY7ZYjp2wATz3IzutAXgBAOIBY-elaNUkAYBoAZNgAfdnfXfAqgHp8yxAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAqgH59exAtgHANIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYyNb_yZOilQNgAYAKAZgLAcgLAYAMAaoNAklO6g0TCMGbgcqTopUDFUfvTAIdYKUdqfANAYgOCbAT7aHwItATANgTDYgUAdgUAdAVAcoWAgoA-BYBgBcBshcEGAJQBrIYCRICnWMYTSIBANAZAdgZAQ&ae=1&num=1&cid=CAQS9QEAEQoqgdQR5I5G7S7Q2ZusAS_cwvLpgXDRkQqWo4ISWWwy8cGS1UEQSlPF_zT2lgEfiGWnev4sCUm1iJvxMlhdNHKdYRkzZOqnmTtU6YUL9-fEHH0UJPrQqbhqYEcSbKf1FMLdSCt5XuPwQtPnK60PTq-70SIixVk5vTdyM5ToWsVd0_SxrW9ecAOiDwJqqeDmiKCEhGjPljOVCrcQ_93m-4K56jSHXY-AoB3Qqev4W1-DE7IQw_z7pQiYLdME7sm5_NGRDTQJAcSI-bdx2u8R4kd_KgRkozPTZmuI7NsXBhCoFKspPCVRqHPy28h2IzXMlhORdBgB&sig=AOD64_2JxH376BgaY_33jyH4nE84x_NbYA&client=ca-pub-1677597403311019&dbm_c=AKAmf-DwX0rP2KUhckJJTaXgWi70QLPeuVcKQp16fhMEK1Nl14TfvzI-pvPM9sqBAOL6X-BG-0uPhuZI73XpxLDb3ruEYUoLDcfwLVLXuEn3AmpkjNYE1Dv6Gu5nt9UDb9hVc9cEJaqjy7Jl5tpkk-u4ujdjAMsT8jY0qj8u_5HT5r-VHzE0klxLi6MtG9HZVDu_0Ez3bcIW-pfNrSa1sAjS_ee-s6EGwfoEih0h_DCylKOM-fKp4TTBvDsLAJ-drtEPqv7Kol2yYDBnac1qFHACr39zk32qJckshsk6Oq7e3tSnI4cEhUI&cry=1&dbm_d=AKAmf-DaVxit1IZ1l54dWVuXWeIODl8p3Gnyp72wpTJtvQnrI-wYyBO6whhIcZIMg89EQqg6fCdHvBMx7gJjQKH8PI9U7riR6zrw9sktzfqHxIOrFhyQgBwzAM0GcLBMgIfhHJkMR4eIT11swrjnbyyif2qNKyuDpSBIOMQh9mg4kfb5mVfRdFnSWt8Ybis614DA1fjyBgjpGdfdF9KIwiZHqNcJ2b8bgN4WQPv6VHPjB5sqajVVOochMDYTllq9u-jkHhE_9GE3MpJSASRsJ97FDAK6PbzjVLc9Hed1Ri1T-qGlguSxE13rt1cI50-TeweoqwX9VpmDcy8-h9jawBRvMRgyXUsz3ZpIS0u9lC00Uq6VNDLZKMUvr868Lc4yTtd179wCHu16a6V8Wpl6PR9Ze0PxyPzd4G5I3C4oONnBty9RlMukGUbcYPEFuCq9jMXXq4QhJgkGGV7ERCxIIiPI8T62RbrQPp6dfQav5aRy3JfKfyZTLPaQBLWeW0lPloFp5eFwVYIwQGbq2SZOnfkJGYYSn-mixumQ65cAvccS_uwZhOwjm3Q1SEKyM_ikZCvJv1DNqEEmJJ8FkiacJGfXiC7az7hrsLynEVD-UA1cOiKPN3rkoj5xYTWFfPkzdlPhbpGLWH0_pqDSkHECo0iQIwsCJHfpj-1aybvsXWbZNVXBZnGS3QLYYp_AqM0bxOjcLv3D7voQ&adurl=https://servedby.flashtalking.com/click/7/296653;10338317;6146791;210;0/?us_privacy=!!US_PRIVACY!&ft_partnerimpid=ABAjH0jq1JKM_AU5VCMsgldNaD4O&ft_impID=F45DB554-9479-D183-64A3-9BADB3EDFB1A&ft_section=22622326543&g=67503642DC20D2&random=849652.5048321005&ft_width=728&ft_height=90&url=https://www.adobe.com/in/education/students/creativecloud.html?&sdid=PQ7SPXQB&mv=display&mv2=display
                  - img "Click Here" [ref=f18e19]
                - link "AdChoices arrow" [ref=f18e21] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img "AdChoices arrow" [ref=f18e22]
                - link "Privacy Notification" [ref=f18e24] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f18e25]
                - link "Privacy Notification" [ref=f18e27] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f18e28]
          - iframe
  - generic [ref=e98]:
    - generic [ref=e99] [cursor=pointer]:
      - img [ref=e101]
      - link "Go to shopping options for Website analytics tools" [ref=e103]: Website analytics tools
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
> 8  |     await page.getByPlaceholder("EmailAddress").fill("praveen33@gmail.com");
     |                                                 ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  9  |     await page.getByRole("button",{name:"submit"});
  10 | 
  11 | 
  12 | })
```