//Exemplo geral de teste com Cypress e2e em uma API genérica.
/// <reference types="cypress" />

describe('Alterar dispositivo', () => {

    const bodyCadastro = require('../../fixtures/api/devicesData.json')

    it('PUT - Alterar um dispositivos', () => {

        const bodyUpdate = {
            "name": "Will",
            "data": {
                "year": 2019,
                "price": 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"
            }
        }

        cy.adicionarDeviceEspecifico(bodyCadastro)
            .then((responsePost) => {
                expect(responsePost.status).equal(200)
                expect(responsePost.body.name).equal(bodyCadastro.name)

                cy.alterarDeviceEspecifico(bodyUpdate, responsePost.body.id).as('putDeviceResult')

                cy.get('@putDeviceResult').then((responsePut) => {
                    expect(responsePut.status).equal(200)
                    expect(responsePut.body.name).equal(bodyUpdate.name)

                })
            })
    });
});
