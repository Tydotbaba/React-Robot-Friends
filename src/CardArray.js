import React from 'react';
import Card from './Card'


const CardArray = ({robots}) => {
	const CardArray= robots.map((user, i) => {
		return (
			<Card 
				key ={i}
				id = {robots[i].id} 
				name = {robots[i].name} 
				email = {robots[i].email} 
			/>
		);
	});
	return (
		<div>
			{ CardArray }
		</div>
	);
}


export default CardArray;