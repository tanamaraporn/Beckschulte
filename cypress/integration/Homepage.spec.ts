/// <reference types="Cypress" />

describe('Homepage', () => {
    beforeEach(() => {
        cy.visit("https://beckschulte.20cnx.xyz")
        cy.get('button').contains('Akzeptieren und Fortfahren').should('be.visible').click()
    })

    it('TC_01', () => {
        cy.get('.sc-jRQBWg > a').should('be.visible').click()
        cy.kontakt()
    })

    it('TC_02', () => {
        cy.contains('span[class="text-primary-500 mr-3 text-lg font-semibold"]', 'weitere Infos').should('be.visible').click()
        cy.url().should("eq", "https://beckschulte.20cnx.xyz/verwalten")
        cy.contains("Immobilien - Verwaltung")
    })

    it('TC_03', () => {
        cy.get('a[href="/vermieten"]').should('be.visible').click()
        cy.url().should("eq", "https://beckschulte.20cnx.xyz/vermieten")
        cy.contains("Objekte")
    })

    it('TC_04', () => {
        cy.get('a[href="/verkaufen"]').should('be.visible').click()
        cy.url().should("eq", "https://beckschulte.20cnx.xyz/verkaufen")
        cy.contains("Objekte")
    })

    it('TC_05', () => {
        cy.get('.w-fit').should('be.visible').click()
        cy.url().should("eq", "https://beckschulte.20cnx.xyz/uber-uns")
        cy.contains("über uns")
    })

    it('TC_06', () => {
        cy.get('.flex > :nth-child(1) > .mx-auto').click()
        cy.get('.flex > :nth-child(2) > .mx-auto').click({ force: true })
        cy.get('.flex > :nth-child(3) > .mx-auto').click({ force: true })
    })

    it('TC_07', () => {
        cy.get('.grid > div > .null').should('be.visible').click()
        cy.kontakt()
    })

    it('TC_08', () => {
        cy.get('#data-privacy > :nth-child(1) > a').should('be.visible').click()
        cy.url().should("eq", "https://beckschulte.20cnx.xyz/impressum")
        cy.contains("Impressum.")
    })


    it('TC_09', () => {
        cy.get('#data-privacy > :nth-child(3) > a').should('be.visible').click()
        cy.url().should("eq", "https://beckschulte.20cnx.xyz/datenchutz")
        cy.contains("Datenschutzerklärung")
    })   

    it('TC_10', () => {
        cy.get('#data-privacy > :nth-child(3) > a').should('be.visible').click()
        cy.url().should("eq", "https://beckschulte.20cnx.xyz/datenchutz")
        cy.contains("Datenschutzerklärung")
    })   

    // it('TC_10', () => {
    //     //cy.get('#contact-telephone').click()
    //     const stub = cy.stub()
    //     cy.on('window:alert', stub)
    //     cy
    //         .get('button').contains('02303 942370').click()
    //         .then(() => {
    //             expect(stub.getCall(1)).to.be.calledWith('Open Facetime?')
    //         })
    // })

    // it('TC_10', () => {
    //     cy.get('#contact-email > a')
    // })

})






