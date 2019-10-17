describe('Test for the forgot password modal', () => {
  it('User should be able to submit email', () => {
    cy.visit('/forgotpassword');
    cy
      .get('#email')
      .type('d.mark@example.com')
      .should('have.value', 'd.mark@example.com');

    cy.get('.reset-form-btn').click();
  });

  it('h4 should be 1 in length', () => {
    cy.get('h4')
    .should((h4) => {
      expect(h4).to.have.length(1)
      })
  });
});
