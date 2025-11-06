describe('template spec', () => {
  it('Mulitpliação', () => {
    cy.visit('http://localhost:5173/')

    cy.get('button[id=1]').click()
    cy.contains("x").click();
    cy.get('button').contains("1").click();
    cy.contains("=").click();
    cy.get(".display-container").should('have.text','1');
  })
})
it('Mulitpliação Float', () => {
  cy.visit('http://localhost:5173/')

  cy.get('button[id=1]').click()
  cy.contains("x").click();
  cy.get('button').contains("1").click();
  cy.get('button').contains("0").click();
  cy.get('button').contains(".").click();
  cy.get('button').contains("1").click();
  cy.get('button').contains("1").click();

  cy.contains("=").click();
  cy.get(".display-container").should('have.text','10.11');
})
