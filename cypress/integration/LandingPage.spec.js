describe('Test for Landing page', () => {
  beforeEach(() => {
      cy.visit('/');
  });
  it('Div should have classname landing-page', () => {
    cy.get('.landing-page')
    .should('have.class', 'landing-page')
  });
  it('Div should have classname backdrop', () => {
    cy.get('.backdrop')
    .should('have.class', 'backdrop')
  });
  it('Signin button should be present on landing page', () => {
    cy.get('ul').find('button').contains('Sign in').click( { force: true })
  });
  it('Signup button should be present on landing page', () => {
    cy.get('ul').find('button').contains('Sign up').click( { force: true })
  });
  it('Logo text should be present on landing page', () => {
    cy.get('h1').eq(0).should('have.class', 'header-logo-text').contains('Authors Haven')
  });
  
  it('Ariticle cards should be on the landing page', () => {
    cy.get('.ArticleList');
  });
  it('Article card should have created at span tag that has class of created', () => {
    cy.get('.ArticleList:first-child')
      .find('span:first-child')
      .should('have.class', 'created')
      .and('have.class', 'font-weight-bold')
      .and('have.css', 'color', 'rgb(98, 149, 188)');
  });

  it('Ariticle card should have title h3 tag that has class of title', () => {
    cy.get('.ArticleList:first-child .list')
      .find('h3:first-child')
      .should('have.class', 'title')
      .and('have.class', 'text-uppercase')
      .and('have.class', 'font-weight-bold');
  });
  it('Article card should have description p tags that has class of description', () => {
    cy.get('.ArticleList:first-child .list')
      .find('p:first-child')
      .should('have.class', 'description');
  });
});
