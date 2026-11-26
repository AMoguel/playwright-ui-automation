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


})
