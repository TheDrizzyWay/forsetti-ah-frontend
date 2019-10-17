describe('Test for Single Article page', () => {
    beforeEach(() => {
        cy.visit('/article/react-state-in-2019-and-beyond-1557840530503');
    });
    it('should have a div with classname container', () => {
      cy.get('div').eq(1).
      should('have.class', 'container');
    });
    it('should have a text area with class form control', () => {
      cy.get('textarea')
      .should('have.class', 'form-control');
    });
  });
  
  