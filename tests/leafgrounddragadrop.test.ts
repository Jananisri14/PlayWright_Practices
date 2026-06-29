import { expect,test } from '@playwright/test';
test("Drag and Drop",async({page})=>{
    await page.goto("https://www.leafground.com/drag.xhtml")
    const draggable=await page.locator("//div[@id='form:drag_content']")
    const dropingzone=await page.locator("//div[@id='form:drop_content']")
    await draggable.dragTo(dropingzone);
    await expect(page.locator("//div[@id='form:drop_content']")).toHaveText("Dropped!");
    
    

});
