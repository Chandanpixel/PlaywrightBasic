import { test, expect } from '@playwright/test';


test('Page Playwright Test', async ({ page }) => {
    //BY USING DIRECT PAGE
  await page.goto("https://letcode.in/")
   console.log(await page.title());
   //verify the title

   await expect(page).toHaveTitle('LetCode with Koushik');
   await page.click("text=Log in");
   await page.fill("input[name='email']",'sahuchandan587@gmail.com');
   await page.fill("input[placeholder='Enter password']",'Chandan123');
   await page.click('button:text("LOGIN")');
   await page.locator("//a[normalize-space()='Sign out']").click();

   
  
})


   