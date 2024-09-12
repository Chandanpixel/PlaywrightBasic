import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await page.getByLabel('Username:').fill('rahulshettyacademy');
  await page.getByLabel('Password:').fill('learning');
  await page.locator('label:nth-child(2) > .checkmark').click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.getByRole('combobox').selectOption('consult');
  await page.getByLabel('I Agree to the terms and').check();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Home', exact: true }).click();
  await page.locator('form input[name="name"]').click();
  await page.locator('form input[name="name"]').fill('Chandan Sahu');
  await page.locator('input[name="email"]').fill('coolchandan038@gmail.com');
  await page.getByPlaceholder('Password').fill('Chandan123');
  await page.getByLabel('Check me out if you Love').check();
  await page.getByLabel('Student').check();
  await page.locator('input[name="bday"]').fill('1999-01-05');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByText('× Success! The Form has been').click();
});