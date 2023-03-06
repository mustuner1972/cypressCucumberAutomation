/// <reference types = "cypress"/>

import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Contact_Us_PO from "../page_Objects/Contact_Us_PO";

const contact_Page = new Contact_Us_PO

    When('I type a first name', ()=>
    {
        //cy.get("input[name='first_name']").type("John")
        contact_Page.type_FirstName("Jack")
    })
    When('I type a last name', ()=>
    {
        //cy.get("input[name='last_name']").type("Doe")
        contact_Page.type_LastName("Armstrong")
    })
    When('I enter an email address', ()=>
    {
        //cy.get("input[name='email']").type("johndoe@test.com")
        contact_Page.type_EmailAddress("johndoe@test.com")
    })
    When('I type a comment', ()=>
    {
        //cy.get("textarea[name='message']").type("Hello, thank you")
        contact_Page.type_Comment("Hello, thank you")
    })

    When('I click submit button', ()=>
    {
        //cy.get('input[value="SUBMIT"]').click()
        contact_Page.clickOn_SubmitBtn()
    })

    Then('I should be presented with a successful contact us submission message', ()=>
    {
        //cy.get('div[id="contact_reply"]').contains('Thank You')
        contact_Page.validate_Submission('Thank You')
    })

    Then('I should be presented with an unsuccessful contact us submission message', ()=>
    {
        //cy.get('body').contains("Error: Invalid email address") 
        contact_Page.validate_Submission("Error: Invalid email address")
        
    })
    
    When('I type a specific first name {string}', (firstName) =>
    {
        //cy.get("input[name='first_name']").type(firstName)
        contact_Page.type_FirstName(firstName)
    })

    When('I type a specific last name {string}', (lastName) =>
    {
        //cy.get("input[name='last_name']").type(lastName)
        contact_Page.type_LastName(lastName)
    })

    Then('I enter an specific email address {string}' ,(email) =>
    {
        //cy.get("input[name='email']").type(email)
        contact_Page.type_EmailAddress(email)
    })

    Then('I type a specific comment {string} and number {int} within the comment input field', (word,number) =>
    {
        //cy.get("textarea[name='message']").type(word + "    " +number)
        contact_Page.type_Comment(word + "    " +number)
    })

    When('I type a first name {word} and a last name {string}', (firstName , lastName) =>
    {
        //cy.get("input[name='first_name']").type(firstName)
        //cy.get("input[name='last_name']").type(lastName)
        contact_Page.type_FirstName(firstName)
        contact_Page.type_LastName(lastName)
    })
    
    When('I type a {string} and a comment {string}', (email , comment) =>
    {
        //cy.get("input[name='email']").type(email)
        //cy.get("textarea[name='message']").type(comment)
        contact_Page.type_EmailAddress(email)
        contact_Page.type_Comment(comment)
    })

    Then ('I should be presented with header text {string}', (message) =>
{
    // checking 2 different messages from 2 different dom elements
    // cy.get('body').then((body) => {
    //     if (body.find('div[id="contact_reply"]').length > 0) {
    //         cy.get('div[id="contact_reply"]').contains(message)
    //     }
    //     else {
    //         cy.get('body').contains(message)
      //  }
   // })
   //  OR use xpath

   //cy.xpath('//h1 | //body').contains(message) 
   contact_Page.validate_Submission(message)

})

 
