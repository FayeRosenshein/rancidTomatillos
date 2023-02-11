describe('Home page', () => {
  beforeEach(() => {
		cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/979924', {fixture: 'single-movie'})
		cy.visit('http://localhost:3000/979924')
	});

	it('should follow the path route', () => {
		cy.url()
			.should('include', '/979924')
	});
	
	it('should display a move poster', () => {
		cy.get('.movie-info-img')
			.should('be.visible')
	});
	
	it('should see additional details about one movie', () => {
		cy.get('.single-movie-section')
	});
	
	it('should have a home button to return to the main view of all movies', () => {
		cy.get('.movie-details > button')
			.should('have.text', 'Home')
	});


})