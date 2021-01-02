import React, { useState} from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

const AddNewModel = ({vehicleModelAddStore}) => {

	const [ newModel, setNewModel ] = useState(vehicleModelAddStore.newModel)
	const [ newImage, setNewImage ] = useState(vehicleModelAddStore.newImage)

	const add = (e) => {
		console.log(newModel, newImage)
		e.preventDefault()
		vehicleModelAddStore.addCar(newModel, newImage)	
	}

	return (
	<>
		<Link to="/models"><button className="button closeNewButton">X</button></Link>
		<div className="addForm">
		<h3 className="title">Add a new model</h3>
		<form>
			<input className="addInput"
				type="text"
				placeholder="Enter a vehicle model"
				value={newModel}
				onChange={e => setNewModel(e.target.value)}
			/>
			<input className="addInput"
				type="text"
				placeholder="Enter url for vehicle image"
				value={newImage}
				onChange={e => setNewImage(e.target.value)}
			/>
		</form>
		<button className="button saveNewButton" onClick={add}><Link to="/models" style={{ textDecoration: 'none', color: 'white' }}>Save new model</Link></button>
		</div>
	</>
	)
}

export default inject ('vehicleModelAddStore') (observer(AddNewModel))