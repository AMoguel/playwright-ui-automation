import { expect, Locator, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('https://playground.bondaracademy.com/auth/register')
})



test.describe('registration flow', () => {
    let regForm: Locator
    let nameInput: Locator
    let emailInput: Locator
    let pwinput: Locator
    let pw2input: Locator
    let termscheckbox: Locator
    let regbutton: Locator

    test.beforeEach(async ({ page }) => {
        regForm = page.locator('nb-register')
        nameInput = page.getByRole('textbox', { name: 'Full name:' })
        emailInput = page.getByRole('textbox', { name: 'Email address:' })
        pwinput = page.getByRole('textbox', { name: 'Password:', exact: true })
        pw2input = page.getByRole('textbox', { name: 'Repeat password:' })
        termscheckbox = regForm.getByRole('checkbox')
        regbutton = page.getByRole('button', { name: ' Register ' })
    })

    test('Submitting sign up', async ({ page }) => {
        await nameInput.fill('John Doe')
        await emailInput.fill('test@test.com')
        await pwinput.fill('Password')
        await pw2input.fill('Password')
        await termscheckbox.check({ force: true })
        await regbutton.click()



    })

    test('Fields validation errors', async ({ page }) => {

        // Asserting that validation shows how many characters is required in the name field 
        await nameInput.fill('as')
        await nameInput.blur()
        await expect(regForm.getByText('Full name should contains from 4 to 50 characters ')).toBeVisible()


        //asserting that clicking outside triggers validation error
        await emailInput.click()
        await emailInput.blur()
        await expect(regForm.locator('.caption.status-danger', {hasText: ' Email is required! '})).toBeVisible()


        //asserting that incorrect email format triggers validation error
        await emailInput.fill('asdfasdf')
        await expect(regForm.locator('.caption.status-danger', {hasText: ' Email should be the real one! '})).toBeVisible()

        //asserting that clicking outside password field triggers validation errors
        await pwinput.click()
        await pwinput.blur()
        await expect(regForm.locator('.caption.status-danger', {hasText: ' Password is required! '})).toBeVisible()

        //Asserting validation error is triggered if password doesnt meet criteria
        await pwinput.fill('asd')
        await expect(regForm.locator('.caption.status-dange', {hasText: ' Password should contain from 4 to 50 characters '}))


        //asserting password confirmation field triggers validation error if clicked outside and left emppty
        await pw2input.click()
        await pw2input.blur()
        await expect(regForm.locator('.caption.status-danger', {hasText: ' Password confirmation is required!  '})).toBeVisible()


    })



})
