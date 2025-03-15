//Exemplo geral de teste com Cypress e2e em uma API genérica.
/// <reference types="cypress" />

describe('Alterar booking', () => {

    var token = ''
    var bookingId = ''

    before('Login', () => {
        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/auth',
            failOnStatusCode: false,
            body: {
                "username": "admin",
                "password": "password123"
            }
        }).then((response) => {
            token = response.body.token
        })
    })

    beforeEach('Create booking', () => {
        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/booking',
            failOnStatusCode: false,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: {
                "firstname": "John",
                "lastname": "Smith",
                "totalprice": 111,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2018-01-01",
                    "checkout": "2019-01-01"
                },
                "additionalneeds": "Breakfast"
            }
        }).then((response) => {
            expect(response.status).equal(200)
            //console.log(response.body)
            expect(response.body.bookingid).to.be.a('number')
            expect(response.body.booking.totalprice).to.eql(111)
            bookingId = response.body.bookingid
        })
    })


    it('PUT - Update booking', () => {
        cy.request({
            method: 'PUT',
            url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
            failOnStatusCode: false,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Cookie": `token=${token}`
            },
            body: {
                "firstname": "Will",
                "lastname": "Smith",
                "totalprice": 33,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2018-01-01",
                    "checkout": "2019-01-01"
                },
                "additionalneeds": "Breakfast"
            }
        })
            .then((response) => {
                expect(response.status).equal(200)
                //console.log(response.body)
                expect(response.body.totalprice).to.equal(33)
            })
    })
})

