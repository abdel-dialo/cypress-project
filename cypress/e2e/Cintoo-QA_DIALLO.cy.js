import showcasePage from  '../support/PageObjects/showcasePage.js';

describe('Cintoo Showcase page', () => {

   const numberDemoProject = 4
   const textDemoProjet = 'Play 3D Demo'
   const showcasePageObjet = new showcasePage()


  beforeEach(() => {
    cy.visit(Cypress.env('showcase_url')) 
  })

  it('Check the number of demo projects on the showcase page', () => { 
    showcasePageObjet.elements.projetListDemo()
    .should('have.length', numberDemoProject)
      })  


  it('Check that each project demo contains an image and a button', () => {
    showcasePageObjet.elements.projetListDemo()
    .each(($li, index, $lis) => {
      // Check  each project demo a button  with the text: "Play 3D Demo"
      showcasePageObjet.elements.projetDemoButton().eq(index).contains(textDemoProjet)
      // Check that each project demo contains an image and a button
      showcasePageObjet.elements.projetDemoImage().eq(index).find('img').should('be.visible')
    })
  })

  it('Check Buy URL contains /buy', () => {
    showcasePageObjet.elements.buyButton().click()
    cy.url({ timeout: 30000 }).should('include', '/buy/')  
  })
})