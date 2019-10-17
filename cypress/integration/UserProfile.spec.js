describe('Test for user profile page', () => {
    beforeEach(() => {
        cy.visit('/profile/1');
    });
    it('should have a container div', () => {
      cy.get('div').should('be.visible')
      .should('have.class', 'Profile py-5');
    });
    it('should contain a button', () => {
      cy.get('div').find('button');
    });
    it('should contain a Read count', () => {
        cy.get('.list:nth-child(1)').contains('READ');
    });
    it('should contain a Written count', () => {
    cy.get('.list:nth-child(1)').contains('WRITTEN');
    });
    it('should contain a Follower count', () => {
        cy.get('.list:nth-child(1)').contains('FOLLOWERS');
    });
    it('should contain a Following count', () => {
        cy.get('.list:nth-child(1)').contains('FOLLOWING');
    });

  })