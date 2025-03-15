//Exemplo geral de teste com Cypress e2e em uma API genérica.
/// <reference types="cypress" />

describe('Deletar dispositivo', () => {
    it('DELETE - Deletar um dispositivos', () => {
        const body = {
            "name": "Apple MacBook Pro 16",
            "data": {
                "year": 2019,
                "price": 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"
            }
        }
        cy.request({
            method: 'POST',
            url: '/objects',
            failOnStatusCode: false,
            body: body
        }).as('postDeviceResult')

        cy.get('@postDeviceResult').then((responsePost) => {
            expect(responsePost.status).equal(200)

            cy.request({
                method: 'DELETE',
                url: `/objects/${responsePost.body.id}`,
                failOnStatusCode: false
            }).as('deleteDeviceResult')

            cy.get('@deleteDeviceResult').then((responseDel) => {
                expect(responseDel.status).equal(200)
                expect(responseDel.body.message).equal(`Object with id = ${responsePost.body.id} has been deleted.`)

            })
        })



    });

    it('DELETE - Deletar um dispositivos inexistente', () => {

        const idInvalid = "will";

        cy.request({
            method: 'DELETE',
            url: `/objects/${idInvalid}`,
            failOnStatusCode: false
        }).as('deleteDeviceResult')

        cy.get('@deleteDeviceResult').then((responseDel) => {
            expect(responseDel.status).equal(404)
            expect(responseDel.body.error).equal(`Object with id = ${idInvalid} doesn't exist.`)

        })
    })
});
