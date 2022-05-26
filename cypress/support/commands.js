// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('kontakt', () => {
    cy.url().should("eq", "https://beckschulte.20cnx.xyz/kontakt/")
    cy.contains("Kontakt")
})

Cypress.Commands.add('kontaktAufnehmen', () => {
    cy.contains("Kontakt aufnehmen").click()
    cy.url().should("eq", "https://beckschulte.20cnx.xyz/kontakt/")
    cy.contains("Kontakt")
})

Cypress.Commands.add('info', function () {
    cy.get('.absolute').click()
    cy.get('#headlessui-menu-item-5').click()
    cy.get('input[name="first_name"]').type('Amaraporn')
    cy.get('input[name="last_name"]').type('Kalajak')
    cy.get('input[name="address"]').type('CNX')
    cy.get('input[name="zip_code"]').type('20095')
})


