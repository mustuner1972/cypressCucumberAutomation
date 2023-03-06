/// <reference types = "cypress"/>

import Base_PO from "./Base_PO";

class HomePage_PO extends Base_PO{
    navigateToHomePage(){
        //calling navigate method from Base_PO by super
super.navigate("")
    }
    clickOn_ContactUs_Button(){
        cy.clickAndOpenLink_InSameTab('#contact-us')
    }
    clickOn_Login_Button(){
        cy.clickAndOpenLink_InSameTab('#login-portal')
}
}
export default HomePage_PO