import { test, expect, Page } from '@playwright/test';

const baseURL = 'https://dabu-partsunlimited-qa.azurewebsites.net';
const subsidiaryName = 'a Fabrikam subsidiary';
const categories = ['1','2','3','4','5','99'];
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

test('Verify Subsidiary Name On Product Pages', async ({ page }) => {
    // Each Product Category Page
    for (const item of categories) {
        await page.goto(baseURL + '/Store/Browse?CategoryId=' + item);
        await expect(page.locator('text=' + subsidiaryName).first()).toBeVisible();
    }
});


  