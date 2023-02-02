import React from "react"
import Header from "../Header/Header";
import Top5 from "../Top5/Top5";
import AllMovies from "../AllMovies/AllMovies";
import movies from "../../movieData";
import './App.css';

function App() {
  // const [movies, setMovies] = React.useState(movies)
  // console.log(movies)
  // const [allMovies, setAllMovies] = React.useState()

  // React.useEffect(() => {
  //   fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  //   .then(response => response.json())
  //   .then(data => setAllMovies(data.movies))
  //   .catch(err => console.log(err))
  // }, [])
  // console.log(allMovies)
  return (
    <main>
      <Header />
      <Top5 />
      <AllMovies allMovieInfo= {movies}/>
    </main>
  );
}

export default App;
