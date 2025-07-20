import { test, expect } from '@playwright/test';

test.describe('All my tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com');

    await page.locator('id=user-name').click();
    await page.locator('id=user-name').fill('standard_user');

    await page.locator('id=password').click();
    await page.locator('id=password').fill('secret_sauce');

    await page.locator('id=login-button').click();
    await page.waitForURL('https://www.saucedemo.com/inventory.html');
  });

  test.afterEach(async ({ page }) => await page.close());

  test('homepage', async ({ page }) => {
    await page.locator('id=add-to-cart-sauce-labs-backpack').click();
    await page.locator('id=add-to-cart-sauce-labs-bike-light').click();

    await page
      .locator('#item_1_title_link >> text=Sauce Labs Bolt T-Shirt')
      .click();
    await page.locator('id=add-to-cart').click();
  });

  test('logout', async ({ page }) => {
    await page.locator('id=react-burger-menu-btn').click();
    await page.locator('id=logout_sidebar_link').click();
  });
});
