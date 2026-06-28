import { expect, test } from "@playwright/test";

test("test2", async ({ page }) => {
    await page.goto("https://www.testmuai.com/selenium-playground/select-dropdown-demo/");

    // Single select dropdown
    await page.selectOption("#select-demo", {
        //value:"Friday" 
        //label:"Monday"
        index: 3
    });

    await page.waitForTimeout(2000);

    // Multiple select dropdown
    await page.selectOption("#multi-select", [
        { value: "California" },
        { value: "Florida" },
        { value: "New Jersey" }
    ]);

    await page.waitForTimeout(5000);
});