import React from 'react'
import './SearchBar.css';


export default function SearchBar({ searchInput, setSearchInput }) {
	
	const handleChange = (e) => setSearchInput(e.target.value)


	return (
		<div className='search-bar'>
			<input
				type='text'
				placeholder='Search Movies'
				onChange={handleChange}
				value={searchInput} />
		</div>
	)
}