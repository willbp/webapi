/// <reference types="cypress" />

Cypress.Commands.add('adicionarDeviceEspecifico', (body) => {
    cy.request({
        method: 'POST',
        url: '/objects',
        failOnStatusCode: false,
        body: body
    }).then((response) => {
        return response
    })
})

Cypress.Commands.add('alterarDeviceEspecifico', (bodyUpdate, id) => {
    cy.request({
        method: 'PUT',
        url: `/objects/${id}`,
        failOnStatusCode: false,
        body: bodyUpdate
    }).then((response) => {
        return response
    })
})

