import { expect, Locator, test } from '@playwright/test'


test.beforeEach(async ({page}) => {
    await page.goto('https://playground.bondaracademy.com/auth/request-password')
})


test.describe('Request password flow', () => {
    let requestPasswordForm: Locator
    let emailInput: Locator
    let requestPasswordButton: Locator


    test.beforeEach(async ({page}) => {
        requestPasswordForm = page.locator('nb-request-password-page')
        emailInput = page.getByRole('textbox', { name: 'Email address:' })
        requestPasswordButton = page.getByRole('button', { name: ' Request Password ' })

    })

    test('Request password form submission ', async ({page}) => {

         //Assertion that button is disabled until email is entered 
        await expect(requestPasswordButton).toBeDisabled()

        //possitive form submission
        await emailInput.fill('test@test.com')
        //asserting that button is enabled after email field is filled
        await expect(requestPasswordButton).toBeEnabled()
        await requestPasswordButton.click()
        
    })

    test('Error validation', async ({page}) => {

        //Assertion to validate error when leaving field empty
        await emailInput.click()
        await emailInput.blur()
        await expect(requestPasswordForm.getByText(' Email is required! '))

        //Assertion to validate error when incorrect email format entered 
        await emailInput.fill('asdfad')
        await expect(requestPasswordForm.getByText(' Email should be the real one! '))
    })




})