import React from 'react';


const SearchBox = ({searchChange}) => {
	return (
		<div className='ml-auto  mr-auto pa5 tc'>
			<input 
			className = 'pa3 ba b-solid-green bg-lightest-blue br4'
			type='search' 
			placeholder='Search robots'
			onChange= {searchChange} />
			
		</div>
	);
}

export default SearchBox;