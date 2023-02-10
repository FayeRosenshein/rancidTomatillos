describe('Error page', () => {

  beforeEach(() => {
		cy.visit('http://localhost:3000/error')
	});

  it('should display message to user', () => {
    cy.get('h2')
      .should('have.text', 'Something went wrong...')
  });

  it('should have a button to return to the main view of all movies', () => {
    cy.get('button')
      .should('have.text', 'Home')
  });
})