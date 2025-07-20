import { test, expect, chromium } from '@playwright/test';

test('Slow motion and video recording demo', async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 1000,
  });

  const context = await browser.newContext({
    recordVideo: {
      dir: 'videos/',
      size: { width: 800, height: 600 },
    },
  });

  const page = await context.newPage();

  await page.goto('https://admin-demo.nopcommerce.com/login');

  await page.locator('id=Email').fill('admin@yourstore.com');
  await page.locator('id=Password').fill('admin123');

  await page.locator('text=LOG IN').click();

  await context.close();
});
