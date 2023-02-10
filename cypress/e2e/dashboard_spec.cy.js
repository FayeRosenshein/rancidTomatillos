describe('Main page', () => {
  beforeEach(() => {
		cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {fixture: 'all_movies'})
		cy.visit('http://localhost:3000/')
	});

	it('should see the title of the application', () => {
		cy.get('h1')
			.contains('Rancid Tomatillos')
	});

	it('should see a collection of movies', () => {
		cy.get('.movie-container')
			.should('be.visible')
	});

	it('should have a search bar for movies', () => {
    cy.get('.search-bar')
			.should('be.visible')
  });

	it('should be able to search for movies', () => {
      cy.get('.search-bar')
				.type('the woman king')
				.get('.movie-container')
				.should('have.text', 'The Woman King')
  });

})