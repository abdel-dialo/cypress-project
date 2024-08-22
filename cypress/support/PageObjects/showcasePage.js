class showcasePage {

  elements = { 
    projectListDemo : () => cy.get('.lqd-fb-content'),
    projectDemoButton : () => cy.get('a.elementor-button>span[data-text="Play 3D Demo"]'),
    projectDemoImage : () => cy.get('div.lqd-fb-img'),
    buyButton : () => cy.get('a[href="/buy"').contains('span','buy now'),
  } 
}
export default showcasePage;

