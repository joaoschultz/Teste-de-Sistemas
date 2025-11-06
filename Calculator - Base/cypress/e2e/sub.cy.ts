describe('template spec', () => {
  it('Subtração', () => {
    cy.visit('http://localhost:5173/')

    cy.get('button[id=1]').click()
    cy.contains("-").click();
    cy.get('button').contains("1").click();
    cy.contains("=").click();
    cy.get(".display-container").should('have.text', '0');
  })
})

it('Subtração Float', () => {
  cy.visit('http://localhost:5173/')

  cy.get('button[id=1]').click()
  cy.get('button[id=0]').click()
  cy.get('button').contains(".").click();
  cy.get('button[id=0]').click()
  cy.get('button[id=6]').click()
  cy.contains("-").click();
  cy.get('button[id=0]').click()
  cy.get('button').contains(".").click();
  cy.get('button[id=6]').click()
  cy.contains("=").click();
  cy.get(".display-container").should('have.text', '9.46');
})


it('Subtração Zero', () => {
  cy.visit('http://localhost:5173/')

  cy.get('button[id=1]').click()
  cy.get('button[id=0]').click()
  cy.contains("-").click();
  cy.get('button[id=0]').click()
  cy.contains("=").click();
  cy.get(".display-container").should('have.text', '10');
})