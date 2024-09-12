import { test, expect } from '@playwright/test';

test('Browser context Playwright Test', async ({ browser }) => {
    //By using newcontext BROWSER

  const context= await browser.newContext()
  const page = await context.newPage()

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
  //Get the title of the page
   console.log(await page.title());

   //asssertion of get title
   await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
   await page.locator('#username').fill('rahulshettyacademy')
   await page.locator("[type='password']").fill('learnings')
   await page.locator('#signInBtn').click()
   //Extract the message
  const message=  await page.locator("[style*='block']").textContent();
  console.log(message);

  await expect(page.locator("[style*='block']")).toContainText('Incorrect');


    
})

test('Page Playwright Test', async ({ page }) => {
    //BY USING DIRECT PAGE
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
   console.log(await page.title());
  const UserName=  await page.locator('#username')
  const password=  await page.locator("[type='password']")
  const SignBtn= await page.locator('#signInBtn')

 await UserName.fill('rahulshettyacademy')
 await password.fill('learning')
 await SignBtn.click()

  //To get the nth 1 text element present in the page
 console.log(await page.locator('.card-body a ').nth(1).textContent())

  //To get the  first text element present in the page
 console.log(await page.locator('.card-body a ').first().textContent())
  
 //To get the last text element present in the page
 console.log(await page.locator('.card-body a ').last().textContent())

 //To get all the text element present in the page
 console.log(await page.locator('.card-body a ').allTextContents())


})


   