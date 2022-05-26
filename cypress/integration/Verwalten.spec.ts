/// <reference types="Cypress" />

describe('Verwalten', () => {
    beforeEach(() => {
        cy.visit("https://beckschulte.20cnx.xyz/verwalten")
        cy.get('button').contains('Akzeptieren und Fortfahren').should('be.visible').click()
    })

    it('TC_11', () => {
        cy.contains('span[class="leading-[19px] md:text-lg md:leading-[22px]"]', 'Immobilien - Verwaltung').click()
        cy.contains("Die Verwaltung von Immobilien")
    })

    it('TC_12', () => {
        cy.contains('span[class="leading-[19px] md:text-lg md:leading-[22px]"]', 'WEG - Verwaltung').click()
        cy.contains("Die Verwaltung gemeinschaftlichen")
    })

    it('TC_13', () => {
        cy.contains('span[class="leading-[19px] md:text-lg md:leading-[22px]"]', 'Miet - Verwaltung').click()
        cy.contains("Auf Eigentümer")
    })

    it('TC_14', () => {
        cy.get(':nth-child(1) > .css-ewhplk').click()
        cy.get('.slick-dots').find('li').eq(0).should("have.class", "slick-active").wait(1000)
        cy.get(':nth-child(2) > .css-ewhplk').click()
        cy.get('.slick-dots').find('li').eq(1).should("have.class", "slick-active").wait(1000)
        cy.get(':nth-child(7) > .css-ewhplk').click()
        cy.get('.slick-dots').find('li').eq(6).should("have.class", "slick-active").wait(1000)
        cy.get(':nth-child(15) > .css-ewhplk').click()  
        cy.get('.slick-dots').find('li').eq(-1).should("have.class", "slick-active").wait(1000)   
    })

    it('TC_15', () => {
        cy.kontaktAufnehmen()
    })
})