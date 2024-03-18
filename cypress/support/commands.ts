declare namespace Cypress {
  interface Chainable {
    searchByQuery(query: string): Chainable<void>
  }
}

Cypress.Commands.add('searchByQuery', (query: string) => {
  cy.wait(3000)
  cy.visit('/')
  cy.wait(3000)
  cy.get('input[name=q]').type(query).parent('form').submit()
})
