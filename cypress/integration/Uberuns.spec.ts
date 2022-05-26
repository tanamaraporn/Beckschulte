/// <reference types="Cypress" />

describe('über uns', () => {
    beforeEach(() => {
        cy.visit("https://beckschulte.20cnx.xyz/uber-uns/")
        cy.get('button').contains('Akzeptieren und Fortfahren').should('be.visible').click()
    })

    it('TC_31', () => {
        cy.get(':nth-child(1) > .css-ewhplk').click()
        cy.get('.slick-dots').find('li').eq(1).should("have.class", "slick-active").wait(1000)
        cy.get(':nth-child(6) > .css-ewhplk').click()
        cy.get('.slick-dots').find('li').eq(-1).should("have.class", "slick-active").wait(1000)
        cy.get(':nth-child(3) > .css-ewhplk').click()
        cy.get('.slick-dots').find('li').eq(3).should("have.class", "slick-active").wait(1000)
    })
})