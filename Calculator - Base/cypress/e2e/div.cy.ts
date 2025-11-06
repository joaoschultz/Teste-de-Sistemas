describe('template spec', () => {
  it('Divisão Float', () => {
    cy.visit('http://localhost:5173/')

    cy.get('button[id=7]').click()
    cy.contains("/").click();
    cy.get('button').contains("6").click();
    cy.contains("=").click();
    cy.get(".display-container").should('have.text', '1.1666666666666667');
  })
})

it('Divisão', () => {
  cy.visit('http://localhost:5173/')

  cy.get('button[id=1]').click()
  cy.get('button[id=4]').click()
  cy.contains("/").click();
  cy.get('button').contains("2").click();
  cy.contains("=").click();
  cy.get(".display-container").should('have.text', '7');
})

it('Divisão Com zero', () => {
  cy.visit('http://localhost:5173/')

  cy.get('button[id=1]').click()
  cy.get('button[id=4]').click()
  cy.contains("/").click();
  cy.get('button').contains("0").click();
  cy.contains("=").click();
  cy.get(".display-container").should('have.text', 'Não é possível dividir por zero');
})