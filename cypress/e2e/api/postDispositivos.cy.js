//Exemplo geral de teste com Cypress e2e em uma API genérica.
/// <reference types="cypress" />

describe('Criação de dispositivos', () => {
    it('POST - Criar um dispositivos', () => {
        const dataAtual = new Date().toISOString().slice(0, 10)
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

        cy.get('@postDeviceResult').then((response) => {
            expect(response.status).to.eq(200)

            expect(response.body).not.empty
            expect(response.body.id).not.empty
            expect(response.body).to.have.property('name', 'Apple MacBook Pro 16')

            expect(response.body['data']).not.empty

            expect(response.body['data']).to.have.property('year', 2019)
            expect(response.body.data.year).not.string

            expect(response.body['data']).to.have.property('price', 1849.99)

            expect(response.body['data']).to.have.property('CPU model', 'Intel Core i9')
            expect(response.body.data['CPU model']).to.equal('Intel Core i9')

            expect(response.body.data['Hard disk size']).to.equal('1 TB')

            expect(response.body.createdAt.slice(0, 10)).equal(dataAtual)
        })
    });

    it('POST - Criar um dispositivos sem dados', () => {
        const dataAtual = new Date().toISOString().slice(0, 10)

        cy.request({
            method: 'POST',
            url: '/objects',
            failOnStatusCode: false,
            body: ''
        }).as('postDeviceResult')
        cy.get('@postDeviceResult').then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body.error).to.equal('400 Bad Request. If you are trying to create or update the data, potential issue is that you are sending incorrect body json or it is missing at all.')
        })
    });
});
