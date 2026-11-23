import {test} from '@playwright/test'


test.beforeEach(async ({page}) => {
        await page.goto('https://playground.bondaracademy.com')

})


test.describe('Submitting forms', () => {
    test.beforeEach(async ({page}) => {
        await page.getByText('Forms').click()
        await page.getByText('Form Layouts').click()
    })




    test('Submitting Using the grid form', async ({page}) => {

        
// Saving parent card
        const usingTheGridForm =  page.locator('nb-card', {hasText: 'Using the Grid'})

// Each action being performed     
        await usingTheGridForm.locator('#inputEmail1').fill('test@example.com')
        await usingTheGridForm.locator('#inputPassword2').fill('Kazama122!')
        await usingTheGridForm.getByRole('button', {name:'Sign in'}).click()
    })


  test('Submitting Basic Form', async ({page}) => {

    // Saving parent card to the left 
    const usingBasicForm = page.locator('nb-card', {hasText: 'Basic form'})


    // action to be performed only on that card

    await usingBasicForm.locator('#exampleInputEmail1').fill('test@example.com')
    await usingBasicForm.locator('#exampleInputPassword1').fill('Kazama122!')
    await usingBasicForm.locator('.custom-checkbox').click()
    await usingBasicForm.getByRole('button', {name: 'Submit'}).click()
  })

})
