describe('Home page', () => {
  beforeEach(() => {
		cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {fixture: 'all_movies'})
		cy.visit('http://localhost:3000/')
	})
	it('should see additional details about one movie', () => {
		cy.get('.movie-card').first().click()
		cy.get('.single-movie-info')
	})
	it('should follow the path route', () => {
		cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/1013860', {
				movie: {
				id: 1013860,
				title: "R.I.P.D. 2: Rise of the Damned",
				poster_path: "https://image.tmdb.org/t/p/original//g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg",
				backdrop_path: "https://image.tmdb.org/t/p/original//kmzppWh7ljL6K9fXW72bPN3gKwu.jpg",
				release_date: "2022-11-15",
				overview: "When Sheriff Roy Pulsipher finds himself in the afterlife, he joins a special police force and returns to Earth to save humanity from the undead.",
				genres: [
				"Fantasy",
				"Action",
				"Comedy",
				"Crime"
				],
				budget: 130,
				revenue: 78324220,
				runtime: 102,
				tagline: "Meet the new law of the Afterlife.",
				average_rating: 7
				}
				})
		cy.get('.movie-card').first().click()
		cy.get('.single-movie-info').should('be.visible')
		cy.url().should('include', '/1013860')
		
	})
})