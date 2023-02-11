const fetchAllMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.text)
      }
    })
}

const fetchSingleMovie = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        window.location.assign('http://localhost:3000/error')
      }
    })
}

export { fetchAllMovies, fetchSingleMovie };