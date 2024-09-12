import { test, expect } from '@playwright/test';
import path from 'path';

test.skip('Registraion', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/');
  await page.getByRole('link', { name: 'Register' }).click();
  await page.getByPlaceholder('First Name').fill('Chandan');
  await page.getByPlaceholder('Last Name').fill('Sahu');
  await page.getByPlaceholder('email@example.com').fill('chandansahu456@gmail.com');
  await page.getByPlaceholder('enter your number').fill('7787905935');
  await page.getByRole('combobox').selectOption('3: Engineer');
  await page.getByLabel('Male', { exact: true }).check();
  await page.getByPlaceholder('Passsword', { exact: true }).fill('Chandan@123');
  await page.getByPlaceholder('Confirm Passsword').fill('Chandan@123');
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Register' }).click();
  const message =await page.locator('h1.headcolor').textContent()
  console.log(message)

});

test.beforeEach('login', async ({ page }) => {
 await page.goto('https://rahulshettyacademy.com/client/');
  await page.getByPlaceholder('email@example.com').fill('chandansahu456@gmail.com');
  await page.getByPlaceholder('enter your passsword').fill('Chandan@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('#sidebar').getByText('Home | Search').click();
});

test('checkout', async ({ page }) => {
 await page.getByRole('button', { name: ' Add To Cart' }).first().click();
  await page.getByRole('button', { name: ' Cart' }).click();
  await page.getByRole('heading', { name: 'ZARA COAT' }).click();
  await page.getByRole('button', { name: 'Checkout❯' }).click();
  await page.getByText('ZARA COAT 3')
  //screenshot
  await page.screenshot({path:'screenshot2.png'})

})

    
