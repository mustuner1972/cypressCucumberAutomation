/// <reference types = "cypress"/>

import Base_PO from "./Base_PO";

class Login_PO extends Base_PO {
    type_UserName (username) {
        cy.get("input[type='text']").type(username)    
}
type_Password(password){
    cy.get("input[type='password']").type(password)

}
clickOn_LoginBtn(){
    cy.get("#login-button").click()

}
}
export default Login_PO