import { expect, test } from '@playwright/test';

// Annotations

test.skip('Test One', async ({ page }) => {});

test.fail('Not Yest Ready', async ({ page }) => {
  await page.goto('https://google.com');
  await expect(page).toHaveURL('https://google.co.th');
});

test.fixme('Test To Be Fixed', async ({ page }) => {});

test.slow('Slow Test', async ({ page }) => {});

test.only('Run Only This Test', async ({ page }) => {});

test('Skip This Test', async ({ page, browserName }) => {
  test.skip(browserName === 'firefox', 'Still working on it');
});

// Tags

test('Test login page @smoke', async ({ page }) => {});
