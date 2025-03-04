import React from 'react';
import './Header.css'
import logo from './logo.svg';

const Header = () => {
	return (
			<div  className='tc white vh-25  thisHeader'>
				<img width={200} height={150} className='fl' src={logo} alt='logo' />
				<h1 className="pa5 f-6-l f3-m "> Rhoda's Kitchen Robots </h1>
			</div>
			);
}

export default Header;