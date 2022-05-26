declare namespace Cypress {
    interface Chainable {
      kontakt(): Chainable<Element>;
      kontaktAufnehmen(): Chainable<Element>;
      info(): Chainable<Element>;
    }
  }