import {test} from '@playwright/test'


test.beforeEach(async ({page}) => {
        await page.goto('https://playground.bondaracademy.com')

})


test.describe('Submitting forms', () => {
    test.beforeEach(async ({page}) => {
        await page.getByText('Forms').click()
    })




    test('Submitting Using the grid form', async ({page}) => {
        await page.getByText('Form Layouts').click()
        
// Saving parent card
        const usingTheGridForm =  page.locator('nb-card', {hasText: 'Using the Grid'})

// Each action being performed     
        await usingTheGridForm.locator('#inputEmail1').fill('test@example.com')
        await usingTheGridForm.locator('#inputPassword2').fill('Kazama122!')
        await usingTheGridForm.getByRole('button', {name:'Sign in'}).click()
    })


  

})
