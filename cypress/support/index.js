// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
/// <reference types="Cypress" />

Cypress.Commands.add('kontakt', ( ) => { 
    cy.url().should("eq","https://beckschulte.20cnx.xyz/kontakt/")
    cy.contains("Kontakt")
})

Cypress.Commands.add('kontaktAufnehmen', ( ) => { 
    cy.contains("Kontakt aufnehmen").click()
    cy.url().should("eq","https://beckschulte.20cnx.xyz/kontakt/")
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

// Alternatively you can use CommonJS syntax:
// require('./commands')
