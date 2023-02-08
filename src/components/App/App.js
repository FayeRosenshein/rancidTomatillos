import React from "react"
import Header from "../Header/Header";
import Top5 from "../Top5/Top5";
import AllMovies from "../AllMovies/AllMovies";
import MovieInfo from "../MovieInfo/MovieInfo";
import { fetchAllMovies, fetchSingleMovie } from "../../ApiCalls";
import './App.css';
import { Route, Routes } from "react-router-dom"
import ErrorPage from "../ErrorPage/ErrorPage";

export default function App() {
	const [allMovies, setAllMovies] = React.useState([])
	const [isLoading, setIsLoading] = React.useState(false)
	const [error, setError] = React.useState()

	React.useEffect(() => {
		setIsLoading(true)
		fetchAllMovies()
			.then(data => setAllMovies(data.movies))
			.catch(error => {
				setError(error)
			})
			.finally(() => setIsLoading(false))
	}, [])

	return (
		<main className="App">
			<Header />
			<Routes>
				<Route exact path="/" element={<>
				<Top5 allMovieInfo={allMovies} />
				<AllMovies allMovieInfo={allMovies} />
				{error && <ErrorPage />}
				</>} />
				<Route path="/:id" element={<>
				<MovieInfo setIsLoading={setIsLoading} setError={setError}/>
				{error && <ErrorPage />}
				</>} />
				<Route path="*" element={<ErrorPage/>} />
			</Routes>
		</main>
	);
}


