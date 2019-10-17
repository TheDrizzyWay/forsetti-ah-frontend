describe('Test for create article page', () => {
  beforeEach(() => {
      cy.visit('/article/new');
  });
  it('should have a container div', () => {
    cy.get('div').should('be.visible')
    .should('have.class', 'mb-5 mt-5');
  });
  it('should contain title input', () => {
    cy.get('div').find('input');
  })
})
