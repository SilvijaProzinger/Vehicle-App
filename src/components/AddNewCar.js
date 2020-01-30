import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

const AddNewCar = ({CarStore}) => {

	const add = (e) => {
		e.preventDefault()
		CarStore.addCar(CarStore.newMake.current.value)	
	}

	return (
	<>
		<Link to="/"><button className="button closeNewButton">X</button></Link>
		<div className="addForm">
		<h3 className="title">Add a new car</h3>
		<form>
			<input className="addInput"
				type="text"
				placeholder="Enter a vehicle make"
				ref={CarStore.newMake}
			/>
			<input className="addInput"
				type="text"
				placeholder="Enter a vehicle model"
				ref={CarStore.newModel}
			/>
			<input className="addInput"
				type="text"
				placeholder="Enter an url for vehicle image"
				ref={CarStore.newImage}
			/>
		</form>
		<button className="button saveNewButton" onClick={add}><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Save new car</Link></button>
		</div>
	</>
	)
}

export default inject ('CarStore') (observer(AddNewCar))