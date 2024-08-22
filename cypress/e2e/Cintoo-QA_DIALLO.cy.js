import showcasePage from  '../support/PageObjects/showcasePage.js';

describe('Cintoo Showcase page', () => {

   const numberDemoProj = 4
   const textDemoProj = 'Play 3D Demo'
   const showcasePageObj = new showcasePage()

  beforeEach(() => {
    cy.visit(Cypress.env('showcase_url')) 
  })

  it('Check the number of demo projects on the showcase page', () => { 
    showcasePageObj.elements.projectListDemo()
    .should('have.length', numberDemoProj)
      })  


  it('Check that each project demo contains an image and a button', () => {
    showcasePageObj.elements.projectListDemo()
    .each(($li, index, $lis) => {
      // Check  each project demo a button  with the text: "Play 3D Demo"
      showcasePageObj.elements.projectDemoButton().eq(index).contains(textDemoProj)
      // Check that each project demo contains an image and a button
      showcasePageObj.elements.projectDemoImage().eq(index).find('img').should('be.visible')
    })
  })

  it('Check Buy URL contains /buy', () => {
    showcasePageObj.elements.buyButton().click()
    cy.url({ timeout: 30000 }).should('include', '/buy/')  
  })
})