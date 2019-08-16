import { address } from '@fixtures/identity/accounts';

Cypress.Commands.add('shouldLoggedIn', () => {
  cy.get('[data-test=endpass-app-loader]').should('not.exist');
  cy.authFrameWrapperHidden().should('exist');
  cy.get('[data-test=endpass-form-basic-active-account]').contains(address);
});

Cypress.Commands.add('shouldLogout', () => {
  cy.wait('@routeAuthLogout');
  cy.get('@e2eLogout').should('be.called');
});