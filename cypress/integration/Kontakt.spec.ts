/// <reference types="Cypress" />

describe('Kontakt', () => {
    beforeEach(() => {
        cy.visit("https://beckschulte.20cnx.xyz/kontakt/")
        cy.get('button').contains('Akzeptieren und Fortfahren').should('be.visible').click()
    })

    it('TC_32', () => {
        cy.get('button').contains('abschicken').should('be.disabled')
    })

    it('TC_33', () => {
        cy.get('input[name="first_name"]').type('Amaraporn')
        cy.get('input[name="last_name"]').type('Kalajak')
        cy.get('button').contains('zurücksetzen').should('be.visible').click()
        cy.get(':nth-child(2) > :nth-child(2) > .border-neutral-300').should('have.value', '');
        cy.get(':nth-child(3) > :nth-child(2) > .border-neutral-300').should('have.value', '');
    })

    it('TC_34', () => {
        cy.info()
        cy.get('button').contains('abschicken').should('be.disabled')
    })

    it('TC_35', () => {
        cy.info()
        cy.get('input[name="email"]').type('tanamaraporn26@gmail.com')
        cy.get('.my-6 > .flex > .custom-checkbox-container > .css-1l1fg67 > .checkmark').click()
        cy.get('button').contains('abschicken').click()
        cy.contains("Erfolgreich")
      })

})