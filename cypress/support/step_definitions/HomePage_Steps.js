//const { Given } = require("@badeball/cypress-cucumber-preprocessor");
/// <reference types = "cypress"/>

import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import Base_PO from "../page_Objects/Base_PO";
import HomePage_PO from "../page_Objects/HomePage_PO";

//const url = "https://webdriveruniversity.com/";

//const basePage = new Base_PO();
const homePage = new HomePage_PO();

Given('I navigate to the webdriveruniversity homepage', ()=>
{
//cy.visit(url)
//basePage.navigate("");
homePage.navigate("")
})
When('I click on the contact us button', ()=>
{
    //cy.get('#contact-us').invoke("removeAttr", "target").click()
    //cy.clickAndOpenLink_InSameTab('#contact-us')
    homePage.clickOn_ContactUs_Button()
})

When('I click on the login button', ()=>
{
    //cy.get('#login-portal').invoke("removeAttr", "target").click()
    //cy.clickAndOpenLink_InSameTab('#login-portal')
    homePage.clickOn_Login_Button();

})