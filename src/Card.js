import React from 'react';

const Card = (props) => {
	const {name, email, id} = props;
	return (
			<div className='bg-light-green tc dib pa3 br3 ma2 grow bw2 shadow'>
				<img src={`https://robohash.org/${id}?200x200`} alt="robot"/>
				<div>
					<h2> {name} </h2>
					<p> {email} </p>
				</div>
			</div>
		);
}


export default Card;