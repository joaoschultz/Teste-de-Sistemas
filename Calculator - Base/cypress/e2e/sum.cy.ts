describe('template spec', () => {
  it('Adição', () => {
    cy.visit('http://localhost:5173/')

    cy.get('button[id=1]').click()
    cy.contains("+").click();
    cy.get('button').contains("1").click();
    cy.contains("=").click();
    cy.get(".display-container").should('have.text','2');
    
  })
})
it('Adição Float', () => {
  cy.visit('http://localhost:5173/')

  cy.get('button[id=1]').click()
  cy.get('button[id=8]').click()
  cy.get('button').contains(".").click();
  cy.get('button[id=8]').click()
  cy.contains("+").click();
  cy.get('button').contains("1").click();
  cy.contains("=").click();
  cy.get(".display-container").should('have.text','19.8');

})

it('Adição Float Negativo', () => {
  cy.visit('http://localhost:5173/')

  cy.get('button[id=1]').click()
  cy.get('button[id=8]').click()
  cy.get('button').contains(".").click();
  cy.get('button[id=8]').click()
  cy.contains("+").click();
  cy.get('button').contains("1").click();
  cy.contains("=").click();
  cy.get(".display-container").should('have.text','19.8');
  cy.contains("-").click();
  cy.get('button[id=2]').click()
  cy.get('button[id=0]').click()
  cy.contains("=").click();
  cy.get(".display-container").should('have.text','0.1999999999999993');
})