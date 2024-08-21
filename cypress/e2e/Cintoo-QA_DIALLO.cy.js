describe('Cintoo Showcase page', () => {

   const numberDemoProject = 4
   const textDemoProjet = 'Play 3D Demo'

  beforeEach(() => {
    cy.visit(Cypress.env('showcase_url')) 
  })

  it('Check the number of demo projects on the showcase page', () => { 
    cy.get('.lqd-fb-content')
    .should('have.length', numberDemoProject)
    .find('span[data-text="Play 3D Demo"]')
      .should(($span) => {
         expect($span).to.contain(textDemoProjet)
      })  
  })

  it('Check that each project demo contains an image and a button', () => {
    cy.get('.lqd-fb-content')
    .each(($li, index, $lis) => {
      // Check  each project demo a button  with the text: "Play 3D Demo"
      cy.get('a.elementor-button>span[data-text="Play 3D Demo"]').eq(index).contains(textDemoProjet)
      // Check that each project demo contains an image and a button
      cy.get('div.lqd-fb-img').eq(index).find('img').should('be.visible')
    })
  })

  it('Check Buy URL contains /buy', () => {
    cy.get('a[href="/buy"]').contains('span','buy now').click()
    cy.wait(8000)
    cy.url().should('include', '/buy/')  
  })
})