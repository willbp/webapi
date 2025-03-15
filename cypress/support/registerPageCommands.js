/// <reference types="cypress" />
//ELEMENTOS DA PÁGINA DE REGISTRO
const elements = {
    buttons: {
        register: '#btnRegister'
    },
    fields: {
        email: '#email',
        name: '#user'
    }
}
Cypress.Commands.add('fillName', (name) => {
    cy.get('#user')
        .should('be.visible')
        .type(name)
})

Cypress.Commands.add('fillEmail', (email) => {
    cy.get('#email')
        .should('be.visible')
        .type(email)
})