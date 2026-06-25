import { test, expect } from '@playwright/test';
import { url } from 'node:inspector';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('admin');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('admin');
  await page.getByRole('button', { name: 'Log in' }).click();
  const title=await page.title();
  console.log("Title:",title);
  const url=await page.url();
  console.log("URL:",url);
  const html=await page.content();
  console.log("HTML:",html);
  await page.waitForTimeout(5000);
  await page.close();
});
