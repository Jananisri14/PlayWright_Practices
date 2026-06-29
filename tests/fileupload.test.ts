//leafGround
// import { expect,test } from '@playwright/test';
// import path from 'node:path';
// test("File Uploading",async({page})=>{
//     await page.goto("https://www.leafground.com/file.xhtml");
//     await page.waitForTimeout(5000);
//     await page.locator("//input[@id='j_idt88:j_idt89_input']").setInputFiles("C:/Users/janan/Downloads/API_DOCS_DETAILED.pdf");
//     await page.waitForTimeout(5000);
//     await expect(page.locator("//span[@class='ui-fileupload-filename']")).toContainText("API_DOCS_DETAILED.pdf");

// });
//DemoQa
import { expect,test } from '@playwright/test';
import path from 'node:path';
test("File Uploading",async({page})=>{
    await page.goto("https://demoqa.com/upload-download");
    await page.waitForTimeout(5000);
    await page.locator("#uploadFile").setInputFiles("C:/Users/janan/Downloads/API_DOCS_DETAILED.pdf");
    await page.waitForTimeout(5000);
    await expect(page.locator("#uploadedFilePath")).toContainText("API_DOCS_DETAILED.pdf");

});