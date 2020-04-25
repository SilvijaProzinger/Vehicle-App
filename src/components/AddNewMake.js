import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

const AddNewMake = ({rootStore, vehicleMakeListViewStore}) => {

	const add = (e) => {
		e.preventDefault()
		rootStore.vehicleMakeListViewStore.addCar(rootStore.vehicleMakeListViewStore.newMake.current.value)	
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
				ref={rootStore.vehicleMakeListViewStore.newMake}
			/>
			<input className="addInput"
				type="text"
				placeholder="Enter url for vehicle logo image"
				ref={rootStore.vehicleMakeListViewStore.newLogo}
			/>
		</form>
		<button className="button saveNewButton" onClick={add}><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Save new car</Link></button>
		</div>
	</>
	)
}

export default inject ('rootStore', 'vehicleMakeListViewStore') (observer(AddNewMake))