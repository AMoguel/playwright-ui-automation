import {expect, test} from '@playwright/test'

test.beforeEach(async ({page}) => {
    await page.goto('https://playground.bondaracademy.com/auth/register')
})



test.describe('registration flow', () => {


test('Submitting sign up', async ({page}) => {
    const regForm = page.locator('nb-register')
    const nameInput = page.getByRole('textbox', { name: 'Full name:' })
    const emailInput = page.getByRole('textbox', { name: 'Email address:' })
    const pwinput = page.getByRole('textbox', { name: 'Password:', exact: true })
    const pw2input = page.getByRole('textbox', { name: 'Repeat password:' })
    const termscheckbox = regForm.getByRole('checkbox')
    const regbutton = page.getByRole('button', {name: ' Register ' })



    await nameInput.fill('John Doe')
    await emailInput.fill('test@test.com')
    await pwinput.fill('Password')
    await pw2input.fill('Password')
    await termscheckbox.check({force: true})
    await regbutton.click()
    


})


})
