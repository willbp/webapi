//Exemplo geral de teste com Cypress e2e em uma tela de cadastro genérica.
/// <reference types="cypress" />

import { faker } from '@faker-js/faker'
import home_page from '../../support/pages/homePage'
import register_page from '../../support/pages/registerPage'

const user_data = require('../../fixtures/userData.json')

describe('Cadastro de usuário', () => {

    beforeEach('Acessando página de cadastro', () => {
        cy.visit('https://automationpratice.com.br/')
        cy.accessRegisterPage()
        home_page.accessRegisterPage()
    });

    it('Cadastro realizado com sucesso', () => {

        const fullNameFaker = faker.person.fullName()

        cy.fillName(fullNameFaker)

        cy.fillEmail(user_data.user_emailv)

        register_page.fillPassword(user_data.user_passwordv)

        cy.get('#btnRegister')
            .click()

        cy.get('#swal2-html-container')
            .then((element) => {
                element.text()
                console.log(element.text())

                expect(element.text()).eq(`Bem-vindo ${fullNameFaker}`)
            })
            .should('have.text', `Bem-vindo ${fullNameFaker}`)
    });
});