/// <reference types = "cypress"/>

import { When , Then} from "@badeball/cypress-cucumber-preprocessor";
import Login_PO from "../page_Objects/Login_PO";

const loginPage = new Login_PO

Then('I click on the username box and type valid userName', ()=>
{
//cy.get("input[type='text']").type("webdriver") 
loginPage.type_UserName ("webdriver")
})
Then('I click on the password box and type valid password', () =>
{
    //cy.get("input[type='password']").type('webdriver123')
    loginPage.type_Password('webdriver123')
})
Then('I click on the login button and should be presented with an popup message', ()=>
{
    //cy.get("#login-button").click()
    loginPage.clickOn_LoginBtn()
    
    cy.on('window:alert',function(AlertText) // for alert type
    {expect(AlertText).eql('validation succeeded')
})
})

Then ('I click on the password box and type invalid password', ()=>
{
    cy.get("input[type='password']").type('webdriver1')
 
})
Then ('I click on the login button and should be presented with a fail message', ()=>
{
    //cy.get("#login-button").click()
    loginPage.clickOn_LoginBtn()
    cy.on('window:alert',function(AlertText) // for alert type
    {expect(AlertText).eql('validation failed') 
})
})
Then ('I click on the username box and type {string}', (userName)=>
{
    //cy.get("input[type='text']").type(userName) 
    loginPage.type_UserName (userName)

})
Then ('I click on the password box and type {word}', (password)=>
{
    //cy.get("input[type='password']").type(password)
    loginPage.type_Password(password)
})
Then ('I click on the login button and should be presented with a {string}', (message)=>
{
    //cy.get("#login-button").click()
    loginPage.clickOn_LoginBtn()
    
    cy.on('window:alert',function(AlertText) // for alert type
    {expect(AlertText).eql(message) 
})
})
