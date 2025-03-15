/// <reference types="cypress" />
//ELEMENTOS DA PÁGINA DE REGISTRO
const elements = {
    buttons: {
        register: '#btnRegister'
    },
    fields: {
        email: '#email',
        name: '#user',
        password: '#password'
    }
}

//AÇÕES DA PÁGINA DE REGISTRO
export default {
    saveRegister() {
        cy.get(elements.buttons.register)
            .click()
    },
    fillPassword(password) {
        cy.get('#password')
            .should('be.visible')
            .type(password)
    },
    clearFieldName() {
        cy.get('#user')
            .clear()
    }
}