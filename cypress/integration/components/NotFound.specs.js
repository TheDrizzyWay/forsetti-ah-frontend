describe('Test for Not Found component', () => {
    beforeEach(() => {
        cy.visit('/notfoundpage');
    });
    it('Header should be in the DOM', () => {
        cy.get('h1').eq(1)
        .should('have.text', '404');
    });
});
