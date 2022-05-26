/// <reference types="Cypress" />

describe('Vermieten', () => {
    beforeEach(() => {
        cy.visit("https://beckschulte.20cnx.xyz/vermieten/")
        cy.get('button').contains('Akzeptieren und Fortfahren').should('be.visible').click().wait(2000)
    })

    it('TC_16', () => {
        cy.get('.my-8').find('a').should('have.length',12).wait(2000)
    })

    it('TC_17', () => {
        cy.contains('span[class="leading-[19px] md:text-lg md:leading-[22px]"]', 'Gewerbe-Objekte').click()
        cy.contains("Kleines Ladenlokal in Fröndenberg auf dem Mühlenberg")
    }) 

    it('TC_18', () => {
        cy.contains('span[class="leading-[19px] md:text-lg md:leading-[22px]"]', 'Wohn-Objekte').click()
        cy.contains("Schöne 2-Zi - Singlewohnung mit Wohnküche in Dortmund - City")
    })

    it('TC_19', () => {
        cy.get('[href="/vermieten/Wohn-Objekte/79"]').click().wait(2000)
        cy.get('.slick-next').eq(1).click({ force: true })
        cy.get('.slick-dots > ul').find('li').eq(1).should("have.class", "slick-active")
        cy.get('.slick-prev').eq(1).click({ force: true })
        cy.get('.slick-prev').eq(1).click({ force: true })   
        cy.get('.slick-dots > ul').find('li').eq(0).should("have.class", "slick-active")
    })

    it('TC_20', () => {
        cy.contains("Wohn-Objekte").click()
        cy.contains("Schöne 2-Zi - Singlewohnung mit Wohnküche in Dortmund - City").click()
        cy.kontaktAufnehmen()
    })
    
    it('TC_21', () => {
        cy.contains("Schöne 2-Zi - Singlewohnung mit Wohnküche in Dortmund - City").click()
        cy.contains("Kurzexpose als PDF").click()
        //cy.contains("Vielen Dank für Ihr Interesse an unserem Immobilienangebot!")
    })

    it('TC_22', () => {
        cy.kontaktAufnehmen()
    })
    
})