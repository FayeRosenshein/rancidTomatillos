import React from 'react'



export default function SearchBar({ searchInput, setSearchInput }) {
	
	const handleChange = (e) => setSearchInput(e.target.value)


	return (
		<div className='search-bar'>
			<input
				type='text'
				placeholder='Search Here'
				onChange={handleChange}
				value={searchInput} />
		</div>
	)
}