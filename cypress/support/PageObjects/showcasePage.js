class showcasePage {

  elements = { 
    projetListDemo : () => cy.get('.lqd-fb-content'),
    projetDemoText : () => cy.get('span[data-text="Play 3D Demo"]'),
    projetDemoButton : () => cy.get('a.elementor-button>span[data-text="Play 3D Demo"]'),
    projetDemoImage : () => cy.get('div.lqd-fb-img'),
    buyButton : () => cy.get('a[href="/buy"]').contains('span','buy now'),


    
  } 
}
export default showcasePage;

