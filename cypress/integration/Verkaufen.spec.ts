/// <reference types="Cypress" />

describe('Verkaufen', () => {
    beforeEach(() => {
        cy.visit("https://beckschulte.20cnx.xyz/verkaufen/")
        cy.get('button').contains('Akzeptieren und Fortfahren').should('be.visible').click().wait(2000)
    })

    it('TC_23', () => {
        cy.get('.my-8').find('a').should('have.length', 7)
      })

    it('TC_24', () => {
        cy.contains("Wohnungen").click()
        cy.contains("Schön geschnittene ETW mit Loggia in Bönen")
    })

    it('TC_25', () => {
        cy.contains("Mehrfamilienhäuser").click()
        cy.contains("Gepflegtes Familiendomizil in Kamen - Heeren")
    })

    it('TC_26', () => {
        cy.get('[href="/verkaufen/all/446"]').click()
        cy.get('.slick-next').eq(1).click({force: true})
        cy.get('.slick-dots > ul').find('li').eq(1).should("have.class", "slick-active")
    })

    it('TC_27', () => {
        cy.contains("Häuser").click()
        cy.contains("1 - 2 Familienhaus in bevorzugter Wohnlage von Menden")
    })

    it('TC_28', () => {
        cy.contains("Wohnungen").click()
        cy.contains("Schön geschnittene ETW mit Loggia in Bönen").click()
        cy.kontaktAufnehmen()
    })

    it('TC_29', () => {
        cy.contains("Wohnungen").click()
        cy.contains("Schön geschnittene ETW mit Loggia in Bönen").click()
        cy.contains("Kurzexpose als PDF").click()
    })

    it('TC_30', () => {
        cy.kontaktAufnehmen()
    })

})