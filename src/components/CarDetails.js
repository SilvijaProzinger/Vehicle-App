import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

const CarDetails = ({ CarStore, match, location, props}) => {
    const {
    	params: { carId }
  	} = match

  	//need to fix the sorting so that when sorted, the car details are in right order
	const [ value, setValue ] = useState(CarStore.filteredCars[carId].VehicleModel)
	const [ id ] = useState(CarStore.filteredCars[carId].id)
	const [ isInEditMode, setEdit ] = useState(false)

	const openEditView = () => {
		return (
			<div style={{textAlign: 'center'}}>
		  		<input 
		  		className="editInput"
		  		type='text' 
		  		defaultValue={value}
		  		ref={CarStore.textInput}
		  		onChange={(event) => setValue(CarStore.textInput.current.value)}
		  		/>
		  		<button className="button saveButton" onClick={updateCar}>Save</button>
		  	</div>
		)
	}

	const updateCar = () => {	
		CarStore.editCar(id)	
		setEdit(false)	
	}		

	const openDefaultView = () => {
		return (
		<>
			<div className="editAndCloseBtns">
				    <Link to="/"><button className="button closeButton">X</button></Link>
				    <button className="button editButton"onClick={() => setEdit(!isInEditMode)}>Edit</button>
			</div>
			<div className="carInfo">
			        <h2 className="carInfoTitle">{CarStore.filteredCars[carId].VehicleMake}</h2>
			        <h3 className="carInfoTitle">{value}</h3>
				    <div>
				        <img src={CarStore.filteredCars[carId].image} alt="" className="detailsImage"/>
				    </div>
			</div>
		</>
		)
	}

	{/* if edit view is active open edit view, if not open the default car details page */}
	return isInEditMode ? openEditView() : openDefaultView()
}

export default inject ('CarStore') (observer(CarDetails))