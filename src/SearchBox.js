import React from 'react';


const SearchBox = ({searchChange}) => {
	return (
		<div className='pa2'>
			<input 
			className = 'pa3 ba b-solid-green bg-lightest-blue br4'
			type='search' 
			placeholder='Search robots'
			onChange= {searchChange} />
			
		</div>
	);
}

export default SearchBox;