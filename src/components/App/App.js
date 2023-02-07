import React from "react"
import Header from "../Header/Header";
import Top5 from "../Top5/Top5";
import AllMovies from "../AllMovies/AllMovies";
import MovieInfo from "../MovieInfo/MovieInfo";
import { fetchAllMovies, fetchSingleMovie } from "../../ApiCalls";
import './App.css';
import { Route, Routes } from "react-router-dom"

export default function App() {
	const [allMovies, setAllMovies] = React.useState([])
	const [movieId, setMovieId] = React.useState('')
	const [singleMovie, setSingleMovie] = React.useState({})

	React.useEffect(() => {
		fetchAllMovies()
			.then(data => setAllMovies(data.movies))
			.catch(error => console.log("error1", error))
	}, [])

	React.useEffect(() => {
		fetchSingleMovie(movieId)
			.then(data => setSingleMovie(data.movie))
			.catch(error => console.log("error2", error))
	}, [movieId])

	return (
		<main className="App">
			<Header />
			<Routes>
				{/* <Route path='/' element={!singleMovie && <Top5 allMovieInfo={allMovies} setMovieId={setMovieId} />} /> */}
				<Route path='/' element={<><Top5 allMovieInfo={allMovies} setMovieId={setMovieId} /><AllMovies allMovieInfo={allMovies} setMovieId={setMovieId} /></>} />
				<Route path='/:Id' element={<MovieInfo singleMovie={singleMovie} setSingleMovie={setSingleMovie} />} />
				{/* <Route path="*" element={<NotFound/>}/> */}
			</Routes>
			{/* {singleMovie && <MovieInfo singleMovie={singleMovie} setSingleMovie={setSingleMovie}/>} */}
			{/* {!singleMovie && <Top5 allMovieInfo={allMovies} setMovieId={setMovieId} />} */}
			{/* {!singleMovie && <AllMovies allMovieInfo= {allMovies} setMovieId={setMovieId} />} */}
		</main>
	);
}


