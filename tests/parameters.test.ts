import { expect,test } from '@playwright/test';
const searchdata=[{keyword:"playwright",expectedresult:"playwright"},
    {keyword:"Selenium",expectedresult:"Selenium"},
    {keyword:"Cypress",expectedresult:"Cypress"}
]
test.describe("Search Data",()=>{
    for(const data of searchdata){
        test(`search flow-${data.keyword}`,async({page})=>{
            await page.goto("https://www.google.com/");
            await page.locator("textarea[name='q']").fill(data.keyword);
            await page.keyboard.press("Enter");
            const firstresult=page.locator("h3").first()
            await firstresult.click();
            await expect(page).toHaveTitle(new RegExp(data.expectedresult,"i"));

        })
    }
});
