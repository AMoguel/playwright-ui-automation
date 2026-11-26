import {expect, test} from '@playwright/test'


test.beforeEach(async ({page}) => {
        await page.goto('https://playground.bondaracademy.com')
        await page.getByText('Auth').click()

})

test.describe('log in page', () => {
        test.beforeEach(async ({page}) => {
                await page.getByText('Login').click()
                
        })



        test('Positive log in', async ({page}) => {
                //Picking the log in modal
                const logInCard = page.locator('nb-login')
                const emailInput = logInCard.locator('#input-email')
                const paswordInput = logInCard.locator('#input-password')
                const loginButton = logInCard.getByRole('button', {hasText: ' Log In '})


        // Ensuring button is disabel

        await expect(loginButton).toBeDisabled()

        //asserting that button is still diabled after filling email field
        await emailInput.fill('test@example.com')
        await expect(loginButton).toBeDisabled()


        //asserting that button is enabled afer filling password field
        await paswordInput.fill('Password122!')
        await expect(loginButton).toBeEnabled()


        await loginButton.click()



        })



        test('Email and password field validation errors', async ({page}) => {
                const logInCard = page.locator('nb-login')
                const emailInput = logInCard.locator('#input-email')
                const paswordInput = logInCard.locator('#input-password')
                



                //Asserting not entering email triggers error

                await emailInput.click()
                await emailInput.blur()
                await expect(logInCard.locator('.caption.status-danger', {hasText: 'Email is required!'})).toBeVisible()


                //Asserting wrong email format triggers error
                await emailInput.fill('Invalid email')
                await expect(logInCard.locator('.caption.status-danger', {hasText: ' Email should be the real one! '})).toBeVisible()
               


                //Asserting not entering password triggers error
                await paswordInput.click()
                await paswordInput.blur()
                await expect(logInCard.locator('.caption.status-danger', {hasText: ' Password is required! ' })).toBeVisible()
                

        })



})