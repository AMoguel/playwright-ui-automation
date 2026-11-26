import {expect, test} from '@playwright/test'

test.beforeEach(async ({page}) => {
    await page.goto('https://playground.bondaracademy.com/auth/register')
})



test.describe('registration flow', () => {


test('Submitting sign up', async ({page}) => {
    const regForm = page.getByRole('heading', { name: 'Register' })
    const nameInput = page.getByRole('textbox', { name: 'Full name:' })
    const emailInput = page.getByRole('textbox', { name: 'Email address:' })
    const pwinput = page.getByRole('textbox', { name: 'Password:', exact: true })
    const pw2input = page.getByRole('textbox', { name: 'Repeat password:' })


    
})


})
