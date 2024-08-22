class showcasePage {

  elements = { 
    projetListDemo : () => cy.get('.lqd-fb-content'),
    projetDemoText : () => cy.get('span[data-text="Play 3D Demo"]'),
    projetDemoButton : () => cy.get('a.elementor-button>span[data-text="Play 3D Demo"]'),
    projetDemoImage : () => cy.get('div.lqd-fb-img'),
    projetDemoImage : () => cy.get('div.lqd-fb-img'),
  } 
}
export default showcasePage;

