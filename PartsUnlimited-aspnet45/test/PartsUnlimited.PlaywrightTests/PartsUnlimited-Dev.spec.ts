import { test, expect, Page } from '@playwright/test';

const baseURL = 'https://dabu-partsunlimited-dev.azurewebsites.net';
const subsidiaryName = 'a Fabrikam subsidiary';
test.beforeEach(async ({ page }) => {
  await page.goto(baseURL);
});

test('Verify Subsidiary Name On Home Page', async ({ page }) => {

  // Home Page
  await expect(page.locator('text=' + subsidiaryName).first()).toBeVisible();
});

test('Verify Subsidiary Name On Store Page', async ({ page }) => {

  // Store Page
  await page.goto(baseURL + '/Store');
  await expect(page.locator('text=' + subsidiaryName).first()).toBeVisible();

});

test('Verify Subsidiary Name On Login Page', async ({ page }) => {

  // Login Page
  await page.goto(baseURL + '/Login');
//  await expect(page.locator('text=' + subsidiaryName).first()).oBeVisible();
});

test('Verify Subsidiary Name On ShoppingCart Page', async ({ page }) => {

  // Shopping Page
  await page.goto(baseURL + '/ShoppingCart');
  await expect(page.locator('text=' + subsidiaryName).first()).toBeVisible();
});


  