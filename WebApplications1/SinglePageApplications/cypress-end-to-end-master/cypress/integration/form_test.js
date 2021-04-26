describe('Testing form inputs', () => { // you can use context instead of describe
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it('adding text to inputs and submits the form', () => {
    cy.get('[data-cy="name"]')
    .type("David")
    .should("have.value", "David");

    cy.get('[data-cy="email"]')
    .type("test@email.com")
    .should("have.value", "test@email.com");

    cy
    .get('[data-cy="motivation"]')
    .type("community service")
    .should("have.value", "community service");

    cy
    .get('[data-cy="positions"]')
    .select("Yard Work")
    .should("have.value", "Yard Work")

    cy
    .get('[data-cy="terms"]')
    .check()
    .should("be.checked")

    cy
    .get('[data-cy="submit"]')
    .click()
  });
})
