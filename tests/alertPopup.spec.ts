import { test, expect } from '@playwright/test';
test('Popup alert & MouseHover', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    await expect( await page.locator('#displayed-text')).toBeVisible()
    await page.locator('#hide-textbox').click()
    await expect( await page.locator('#displayed-text')).toBeHidden()
    
    //Popup handle 
    page.on('dialog',dialog => dialog.accept())
    await page.locator('#confirmbtn').click()

    //Mouse Hover
    await page.locator('#mousehover').hover()


    // Iframe 
   const framepage = await page.frameLocator('#courses-iframe');
    await framepage.locator("li a[href*='lifetime-access']:visible").click()
 const textcheck=  await framepage.locator('.text h2').textContent();
 console.log(textcheck?.split(" ")[1])
})    





