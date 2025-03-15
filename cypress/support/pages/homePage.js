/// <reference types="cypress" />

export default {
    accessRegisterPage() {
        cy.visit('https://automationpratice.com.br/')
            .get('.header-logo img')

        //click normal
        cy.get('.fa-lock')
            .should('be.visible')
            .click()
            .get('#user')
            .should('be.visible')
    }
}