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


  test('Submitting form without labels', async ({page}) => {
    
    const usingNoLabels = page.locator('nb-card', {hasText: 'Form without labels'})

    await usingNoLabels.getByPlaceholder('Recipients').fill('John Doe')
    await usingNoLabels.getByPlaceholder('Subject').fill('monthly bill')
    await usingNoLabels.getByPlaceholder('Message').fill('Please pay on time')
    await usingNoLabels.getByRole('button', {name: 'Send'}).click()
  })

})
