import React, { useState} from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

const AddNewMake = ({rootStore, vehicleMakeModuleStore}) => {

	const [ newMake, setNewMake ] = useState(rootStore.vehicleMakeModuleStore.newMake)
	const [ newLogo, setNewLogo ] = useState(rootStore.vehicleMakeModuleStore.newLogo)

	const add = (e) => {
		console.log(newMake, newLogo)
		e.preventDefault()
		rootStore.vehicleMakeModuleStore.addCar(newMake, newLogo)	
	}

	return (
	<>
		<Link to="/"><button className="button closeNewButton">X</button></Link>
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
		<button className="button saveNewButton" onClick={add}><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Save new make</Link></button>
		</div>
	</>
	)
}

export default inject ('rootStore', 'vehicleMakeListViewStore') (observer(AddNewMake))