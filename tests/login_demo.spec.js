import { test, expect } from '@playwright/test';

test('Demo Login Test 1', async ({ page }) => {
  await page.goto('https://demo.applitools.com/');

  // await page.pause();

  await page.locator('[placeholder="Enter your username"]').fill('Patarapong');
  await page.locator('[placeholder="Enter your password"]').fill('123456');

  await page.waitForSelector('text=Sign in', { timeout: 5000 });
  await page.locator('text=Sign in').click();
});

test('Demo Login Test 2', async ({ page }) => {
  await page.goto(
    'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  );

  // await page.pause();

  await page.locator('[name="username"]').fill('Admin');
  await page.locator('[name="password"]').fill('admin123');

  await page.locator('[type="submit"]').click();
});

test.only('Demo Login Test 3', async ({ page }) => {
  await page.goto('https://admin-demo.nopcommerce.com/login');

  // await page.pause();

  await page.locator('id=Email').fill('admin@yourstore.com');
  await page.locator('id=Password').fill('admin123');

  await page.locator('text=LOG IN').click();
});
