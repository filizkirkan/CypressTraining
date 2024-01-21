require('cypress-xpath');

describe('template spec', () => {
  it('passes', () => {
    cy.visit('')
    cy.wait(5000)
    cy.reload()
    cy.reload(true)
  })
  it('reload', () => {
    cy.visit('')
    cy.wait(5000)
    cy.reload()
    cy.reload(true)
  })
 /* it('go back and go forward', () => {
    cy.visit('')
    cy.wait(5000)
    cy.reload()
    cy.reload(true)
    cy.go('back')
    cy.go('forward')
  }) */

  //querying
  /*it('get using css selector', () => {
    cy.visit('/')
    cy.get("[aria-label='Open cart']")
  })
  it('get using xpath selector', () => {
    cy.visit('/')
    cy.xpath("//button[@aria-label='Open cart']")
  })*/
  /*it('get for attribute', () => {
    cy.visit('/')
    cy.get("[type='Text']")
    .invoke('attr','name')
    .should('equal','search')
  })
  /*it('contains', () => {
    cy.visit('/')
    cy.contains('Stickers').click()
    cy.wait(3000)
  
  })
  it('click', () => {
    cy.visit('/')
    cy.xpath("//span[text()='USD']").eq(1).click()
    cy.wait(3000)
  
  })
  it.only('type', () => {
    cy.visit('/')
    cy.wait(1000)
    cy.xpath("//input[@placeholder='Search for products...'] ").type('Acme Circles T-shirt').type('{enter}')
    cy.wait(3000)
  
  })*/

   it('login', () => {
    cy.visit('/')
    cy.get('#email').type("admin@example.com")
    cy.get('#password').type("secret")
    cy.get('[type="submit"]').click();
    //cy.xpath("//span[@class='user-name']").contains('Super Admin')
    cy.xpath("//span[@class='user-name']").contains('Super Admin').should((element)=>{
      expect(element.text()).to.equal('Super Admin')
    })

  
  })
  it('URL Control', () => {
    cy.visit('/')
    cy.xpath("//a[text()='Shirts']").click()
    cy.url().should('eq','https://demo.vercel.store/search/shirts')
    cy.location().should((location)=>{
      expect(location.href).to.eq('https://demo.vercel.store/search/shirts')
      expect(location.pathname).to.eq('/search/shirts')
      expect(location.protocol).to.eq('https:')
    })

  
  })

  it('URL Control', () => {
    cy.visit('/')
    cy.xpath("//a[@href='/search/stickers']").click()
    cy.url().should('eq','https://demo.vercel.store/search/stickers')
    cy.location().should((location)=>{
      expect(location.href).to.eq('https://demo.vercel.store/search/stickers')
      expect(location.pathname).to.eq('/search/stickers')
      expect(location.protocol).to.eq('https:')
    })
  })

  
})