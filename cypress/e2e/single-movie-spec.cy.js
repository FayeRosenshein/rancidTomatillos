describe('Home page', () => {
  beforeEach(() => {
		cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {fixture: 'all_movies'})
		cy.visit('http://localhost:3000/')
	})
	it('should see additional details about one movie', () => {
		cy.get('.movie-card').first().click()
		cy.get('.single-movie-info')
	})
})