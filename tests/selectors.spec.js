import { test, expect } from '@playwright/test';

test('Selectors Demo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  await page.pause();

  // using any object property
  await page.click('id=user-name'); // await page.locator('id=user-name').click();

  await page.locator('id=user-name').fill('standard_user'); //   await page.locator('[id="user-name"]').fill('standard_user');

  // using CSS Selector
  // Right click in inspection panel > Copy > Copy selector => #login-button
  await page.locator('#login-button').click();

  // using XPath
  await page.locator('//input[@name="password"]').fill('secret_sauce'); // await page.locator('xpath=//input[@name="password"]').fill('secret_sauce');

  // using Text
  await page.locator('text=LOGIN').click(); // await page.locator('input:has-text("LOGIN")').click();
});
