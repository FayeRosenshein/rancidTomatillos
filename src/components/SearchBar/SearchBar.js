import React from 'react'

export default function SearchBar({ searchInput, setSearchInput }) {
	

	const handleChange = (e) => {
		// e.preventDefault()
		setSearchInput(e.target.value)
	}
	return (
		<div>
			<input
				type='text'
				placeholder='Search Here'
				onChange={handleChange}
				value={searchInput} />
		</div>
	)
}