import React from "react"
import { Route, Routes } from "react-router-dom"
import { fetchAllMovies } from "../../ApiCalls";
import Header from "../Header/Header";
import Top5 from "../Top5/Top5";
import AllMovies from "../AllMovies/AllMovies";
import MovieInfo from "../MovieInfo/MovieInfo";
import ErrorPage from "../ErrorPage/ErrorPage";
import './App.css';

export default function App() {
	const [allMovies, setAllMovies] = React.useState([])
	const [isLoading, setIsLoading] = React.useState(false)
	const [error, setError] = React.useState('')

	React.useEffect(() => {
		setError('')
		setIsLoading(true)
		fetchAllMovies()
			.then(data => setAllMovies(data.movies))
			.catch(error => setError(error))
			.finally(() => setIsLoading(false))
	}, [])

	return (
		<main className="App">
			<Header />
			<Routes>
				<Route path="/" element={<>
					<Top5 allMovieInfo={allMovies} />
					<AllMovies allMovieInfo={allMovies} />
					{isLoading && <h1>loading...</h1>}
					{error && <ErrorPage/>}
				</>} />
				<Route path="/:id" element={<>
					<MovieInfo setIsLoading={setIsLoading}/>
					{isLoading && <h1>loading...</h1>}
					{error && <ErrorPage/>}
				</>} />
				<Route path="/error" element={<ErrorPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</main>
	);
}
