/// <reference types = "cypress"/>

import { When , Then, Before, After} from "@badeball/cypress-cucumber-preprocessor";

Before (() => {
    cy.log("Execute before each scenario/test")
    cy.clearLocalStorage()
})

Before ({ tags : "@smoke"}, () => {
    cy.log("Executing smoke pack")

})

After(() =>{
    cy.log("Execute after each scenario/test")

})