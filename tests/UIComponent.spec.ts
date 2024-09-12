import { test, expect } from '@playwright/test';


test('Page Playwright Test', async ({ page }) => {
    //BY USING DIRECT PAGE
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
   console.log(await page.title());
  const UserName=  await page.locator('#username')
  const password=  await page.locator("[type='password']")
  const SignBtn= await page.locator('#signInBtn')
 const blinkTextLink = await page.locator("[href*='documents-request']")
 await UserName.fill('rahulshettyacademy')
 await password.fill('learning')

 //Dropdown
 const dropdown = await page.locator('select.form-control')
 dropdown.selectOption('teach')
//Radio button
 await page.locator('.radiotextsty').last().click()

 //Web Popup
await page.locator('#okayBtn').click()

//ToPrint
console.log(await page.locator('.radiotextsty').last().isChecked())

//Assertion
await expect(page.locator('.radiotextsty').last()).toBeChecked()

//CheckBox
await page.locator('#terms').click()

await expect(await page.locator('#terms')).toBeChecked

//uncheck the checkbox
await page.locator('#terms').uncheck()
await expect(await page.locator('#terms').isChecked).toBeFalsy
expect(await blinkTextLink).toHaveAttribute('class','blinkingText')
await SignBtn.click()

})

test('Child Window Handling', async ({ browser }) => {
    const context= await browser.newContext()
  const page = await context.newPage()

  await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
  const blinkTextLink = await page.locator("[href*='documents-request']")
  const [newPage] =await Promise.all([context.waitForEvent('page'),
  blinkTextLink.click()])

const text = await newPage.locator('.red').textContent();
const ArrayText = text.split("@")
const emailText = ArrayText[1].split(" ")[0]
await page.pause()
console.log(emailText)
await page.locator('#username').fill(emailText)

console.log(await page.locator('#username').textContent());

})
