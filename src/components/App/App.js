import React from "react"
import Header from "../Header/Header";
import Top5 from "../Top5/Top5";
import AllMovies from "../AllMovies/AllMovies";
import MovieInfo from "../MovieInfo/MovieInfo";
import { fetchAllMovies, fetchSingleMovie } from "../../ApiCalls";
import './App.css';

export default function App() {
  const [allMovies, setAllMovies] = React.useState([])
  const [singleMovie, setSingleMovie] = React.useState({})

  React.useEffect(() => {
    fetchAllMovies()
    .then(data => setAllMovies(data.movies))
    .catch(error => console.log("error1", error))
  }, [])

  React.useEffect(() => {
    fetchSingleMovie(924482)
    .then(data => setSingleMovie(data.movie))
    .catch(error => console.log("error2", error))
  }, [])

  return (
    <main className="App">
      <Header />
      <Top5 allMovieInfo={allMovies}/>
      <AllMovies allMovieInfo= {allMovies}/>
      <MovieInfo singleMovie={singleMovie}/>
    </main>
  );
}


