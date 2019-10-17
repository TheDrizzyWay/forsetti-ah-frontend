describe('Test for login modal', () => {
  it('User should be able to login', () => {
    cy.visit('/');

    cy.get('.header-nav-menu .navbar-button-item:first').click();

    cy
      .get('#email')
      .type('d.mark@example.com')
      .should('have.value', 'd.mark@example.com');

    cy
      .get('#password')
      .type('soldier123')
      .should('have.value', 'soldier123')
      .blur();

    cy.get('.login-form-btn').click();
  });
  it('Image should have alt as Google', () => {
    cy.get('img').eq(1)
    .should('have.attr', 'alt', 'Google');
  });
  it('Image should have alt as Facebook', () => {
    cy.get('img').eq(2)
    .should('have.attr', 'alt', 'Facebook');
  });
  it('Image should have alt as Twitter', () => {
    cy.get('img').eq(3)
    .should('have.attr', 'alt', 'Twitter');
  });
});
