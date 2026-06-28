import { test, expect } from "@playwright/test";

test("test2", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");

    await page.locator("#sum1").fill("5");
    await page.locator("#sum2").fill("5");

    await page.locator("//button[text()='Get Sum']").click();

    //await expect(page.locator("#addmessage")).toContainText("10");
});