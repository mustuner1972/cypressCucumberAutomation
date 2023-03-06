/// <reference types = "cypress"/>

import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
Given('I login API site', ()=>
{
cy.visit('https://www.browserstack.com/guide/how-to-start-with-cypress-debugging')
cy.log('asaas')
    
cy.request('GET', 'https://reqres.in/api/users?page=2')
.then((response) =>{
    expect(response.status).to.eq(200)
    expect(response).to.have.property('status')
    expect(response.body.data[0].first_name).equal('Michael')
    cy.log('merhaba')
})
})
Then('I verify the body', ()=>{
    cy.request('GET','https://randomuser.me/api/')
    .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('info')
        expect(response.body.info).to.have.property('version', '1.4')
        //expect(response.body.results[0].gender).equals('male')  
        expect(response.body.results[0].gender.name).contains('Miss')  

        expect(response.body.results[1].location.street.number).equals('7102')    
        
        // to write the response body to console like pretify 
        cy.log(JSON.stringify(response.body))
    })
})



/*cy.request({
            method: 'GET',
            url: 'https://randomuser.me/api/',
            qs: 'results=1'
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('info')
            expect(response.body.info).to.have.property('version', '1.3')*/
