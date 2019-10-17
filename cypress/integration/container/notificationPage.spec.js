describe('Notification page', () => {
    beforeEach(() => {
        cy.visit('/profiles/notification');
    });

    it('should have a header text', () => {
        cy.get('h2').eq(0).
        should('contain', 'Notifications')
        .and("have.class", 'notification-header');
    });
})
