/// <reference types = "cypress"/>

class Base_PO {
  //baseUrl ="https://webdriveruniversity.com/"

  navigate(path) {
    //cy.visit(this.baseUrl + path)
    cy.fixture("config.json").then((data) => {
        cy.visit(data.baseUrl + path);
      })
  }
  getPageTitle(){
    return cy.title()
  }
}
export default Base_PO;
