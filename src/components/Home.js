import React, { useState} from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="selector">
			<div className="makes">
				<img className="listImage" src="https://seeklogo.net/wp-content/uploads/2014/07/ford-logo.png" />
				<Link to="/makes"><button className="selectorButton addButton">Makes</button></Link>
			</div>
			<div className="models">
				<img className="listImage" src="https://auto.ndtvimg.com/car-images/large/bmw/i8/bmw-i8.webp?v=7"/>
				<button className="selectorButton addButton">Models</button>
			</div>
		</div>
	)
}

export default Home