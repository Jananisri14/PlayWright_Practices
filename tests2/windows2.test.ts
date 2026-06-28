import {expect,test} from "@playwright/test";
test("test2",async({page,context})=>{
    await page.goto("https://demoqa.com/browser-windows");
    //Open new Tab
    const [tab]=await Promise.all([
        context.waitForEvent("page"),
        page.locator("#tabButton").click()
    ])
    await tab.waitForLoadState();
    //Open new window
    const [window]=await Promise.all([
        context.waitForEvent("page"),
        page.locator("#windowButton").click()
    ])
    await window.waitForLoadState();
    const pages=context.pages();
    console.log("Number of pages:",pages.length);
    for(const p of pages){
        console.log("----------------");
        console.log("URL:",p.url());
        console.log("Title:",await p.title());
    }
});
test("Iterate window",async({page,context})=>{
    await page.goto("https://demoqa.com/browser-windows");
    const [newtab]=await Promise.all([
        context.waitForEvent("page"),
        page.locator("#windowButton").click()
    ]);
    await newtab.waitForLoadState();
    
    const [newWindow]=await Promise.all([
        context.waitForEvent("page"),
        page.locator("#windowButton").click()
    ]);
    await newWindow.waitForLoadState();
    const pages=context.pages();
    console.log(`Total Pages Opened:,${pages.length}`);
    for(const p of pages){
        if(p.url().includes('sample')){
            const text=await p.locator("#sampleHeading").textContent();
            console.log("sample page heading:",text);

        }
    }

})