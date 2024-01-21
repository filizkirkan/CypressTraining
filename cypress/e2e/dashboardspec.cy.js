require('cypress-xpath');
import dashboardlocators from '../fixtures/dashboardlocators';
import methods from '../pages/methods';
describe ('dashboard test scenarios') , () => {

    cypress.on('uncaught:exception', ()=>{return false})

it('redirect to shirts category',() => {
methods.visit('https://demo.vercel.store/')
cy.xpath("//a[text()='Shirts']").click()
methods.clickButton(dashboardlocators.shirtsLinkText)
})

it('redirect to stickers category', () => {
    methods.visit('https://demo.vercel.store/')
    //methods.clickButton('[href="/search//stickers"]',5000)
   // cy.visit('/')
    //cy.xpath("//a[text()='Stickers']").click()
    methods.clickButton(dashboardlocators.stickersLinkText, 5000)

})

it('verify dashboard page', () => {
    cy.visit('/')
    cy.contains('Stickers')
    cy.contains('Shirts')
    cy.contains('All')


})

it.only('search product',() => {
    methods.visit('https://demo.vercel.store/')
    //methods.clickButton('//input{@name="search"]')
    methods.fillInput(dashboardlocators.searchProductInputText, "Acme Drawstring Bag").type('{enter}')
    cy.xpath("//button[@title()='Color White']").click()
    cy.xpath("//button[@title()='Size 7 x 9 inch']").click()
    cy.xpath("//button[@aria-label()='Add to cart']").click()
    cy.xpath("//button[@aria-label='Open cart']").click()
    cy.xpath("//button[@class='h-4 w-4 dark:text-neutral-500']").click()
    


    
    })
}