import React from "react"
import Header from "../Header/Header";
import Top5 from "../Top5/Top5";
import AllMovies from "../AllMovies/AllMovies";
import MovieInfo from "../MovieInfo/MovieInfo";
import { fetchSingleMovie } from '../../ApiCalls';
import { fetchAllMovies } from '../../ApiCalls';
import './App.css';

function App() {
  const [allMovies, setAllMovies] = React.useState([])
  const [singleMovie, setSingleMovie] = React.useState({})
  const [singleMovieId, setSingleMovieId] = React.useState('')

  React.useEffect(() => {
    fetchSingleMovie(singleMovieId)
    .then(data => setSingleMovie(data))
    .catch(error => console.log(error))
  }, [])

  React.useEffect(() => {
    fetchAllMovies()
    .then(data => setAllMovies(data.movies))
    .catch(err => console.log(err))
  }, [])

  return (
    <main>
      <Header />
      <Top5 />
      <AllMovies allMovies={allMovies} setSingleMovieId={setSingleMovieId}/>
      <MovieInfo singleMovie={singleMovie}/>
    </main>
  );
}

export default App;
