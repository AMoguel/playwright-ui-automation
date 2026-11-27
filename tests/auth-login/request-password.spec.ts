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

    test('')




})