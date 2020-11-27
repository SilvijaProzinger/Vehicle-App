import React, { useState} from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

const AddNewMake = ({vehicleMakeAddStore}) => {

	const [ newMake, setNewMake ] = useState(vehicleMakeAddStore.newMake)
	const [ newLogo, setNewLogo ] = useState(vehicleMakeAddStore.newLogo)

	const add = (e) => {
		console.log(newMake, newLogo)
		e.preventDefault()
		vehicleMakeAddStore.addCar(newMake, newLogo)	
	}

	return (
	<>
		<Link to="/makes"><button className="button closeNewButton">X</button></Link>
		<div className="addForm">
		<h3 className="title">Add a new make</h3>
		<form>
			<input className="addInput"
				type="text"
				placeholder="Enter a vehicle make"
				value={newMake}
				onChange={e => setNewMake(e.target.value)}
			/>
			<input className="addInput"
				type="text"
				placeholder="Enter url for vehicle logo image"
				value={newLogo}
				onChange={e => setNewLogo(e.target.value)}
			/>
		</form>
		<button className="button saveNewButton" onClick={add}><Link to="/makes" style={{ textDecoration: 'none', color: 'white' }}>Save new make</Link></button>
		</div>
	</>
	)
}

export default inject ('vehicleMakeAddStore') (observer(AddNewMake))