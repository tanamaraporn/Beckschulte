/// <reference types="Cypress" />

describe('Try', () => {
    beforeEach(() => {
        cy.visit("https://beckschulte.20cnx.xyz/vermieten/")
        cy.get('button').contains('Akzeptieren und Fortfahren').should('be.visible').click().wait(1500)
    })

    it('TC_06', () => {
        // cy.get('[href="/vermieten/all/79"]').click().wait(1500)
        // cy.get('.slick-next').eq(1).click({ force: true })
        // cy.get('.slick-dots > ul').find('li').eq(1).should("have.class", "slick-active")
        // //cy.get('.slick-next').eq(1).click({ force: true })
        // cy.get('.slick-prev').eq(1).click({ force: true })
        // cy.get('.slick-prev').eq(1).click({ force: true })   
        // cy.get('.slick-dots > ul').find('li').eq(0).should("have.class", "slick-active")
    })

})

