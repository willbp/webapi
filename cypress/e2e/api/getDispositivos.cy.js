//Exemplo geral de teste com Cypress e2e em uma API genérica.
/// <reference types="cypress" />

describe('API - Listar Dispositivo', () => {
    it('GET - Listar um dispositivos', () => {
        cy.request({
            method: 'GET',
            url: '/objects/7',
            failOnStatusCode: false
        }).as('getDeviceResult')

        cy.get('@getDeviceResult').then((response) => {
            expect(response.status).to.eq(200)

            expect(response.body).not.empty
            expect(response.body).to.have.property('id', "7")
            expect(response.body).to.have.property('name', 'Apple MacBook Pro 16')

            expect(response.body['data']).not.empty

            expect(response.body['data']).to.have.property('year', 2019)
            expect(response.body.data.year).not.string

            expect(response.body['data']).to.have.property('price', 1849.99)

            expect(response.body['data']).to.have.property('CPU model', 'Intel Core i9')
            expect(response.body.data['CPU model']).to.equal('Intel Core i9')

            expect(response.body.data['Hard disk size']).to.equal('1 TB')
        })
    });
});
