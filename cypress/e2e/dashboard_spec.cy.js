describe('Home page', () => {
  beforeEach(() => {
		cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {fixture: 'all_movies'})
		cy.visit('http://localhost:3000/')
	})
	it('should have a title', () => {
		cy.get('h1').contains('Rancid Tomatillos')
	})
	it('should have multiple movies displayed', () => {
		cy.get('.movie-container').should('be.visible')
	})
	it('should have one card per movie', () => {
		cy.get('.movie-card').should('be.visible')
	})
})