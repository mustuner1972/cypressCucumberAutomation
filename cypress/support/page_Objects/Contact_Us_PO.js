/// <reference types = "cypress"/>

import Base_PO from "./Base_PO";

class Contact_Us_PO extends Base_PO {

    elements = {
        comment_TextField : () => cy.get("textarea[name='message']") , 
        submit_Btn : () => cy.get('input[value="SUBMIT"]'),
        submission_Text : () => cy.xpath('//h1 | //body'),
        first_Name : () => cy.get("input[name='first_name']"),
        last_Name : () => cy.get("input[name='last_name']"),
        email_Address : () => cy.get("input[name='email']")

    }
type_FirstName(firstName){
    //cy.get("input[name='first_name']").type(firstName)
    this.elements.first_Name().type(firstName)

}
type_LastName(lastName){
    //cy.get("input[name='last_name']").type(lastName)
    this.elements.last_Name().type(lastName)

}
type_EmailAddress(email){
    //cy.get("input[name='email']").type(email)
    this.elements.email_Address().type(email)
}

type_Comment(comment){
    //cy.get("textarea[name='message']").type(comment)
    this.elements.comment_TextField().type(comment)

}

clickOn_SubmitBtn(){
    this.elements.submit_Btn().click()
}

validate_Submission (expectedText){
    this.elements.submission_Text().contains(expectedText)
}
}

export default Contact_Us_PO