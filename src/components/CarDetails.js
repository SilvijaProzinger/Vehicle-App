import React, { useState, useRef } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

const CarDetails = ({ CarStore, match, location }) => {
    const {
    	params: { carId }
  	} = match

  	//using Hooks to update the state of functional component 
	const [ value, setValue ] = useState(CarStore.filteredCars[carId - 1].VehicleMake)
	const [ isInEditMode, setEdit ] = useState(false)
	const textInput = useRef(null) 

	const openEditView = () => {
  		return <div>
  		<input 
  		type='text' 
  		defaultValue={value}
  		ref={textInput}
  		/>
  		<button className="button saveButton" 
  		onClick={updateCar}>Save</button>
  		</div>
  	}

  	const updateCar = () => {
		setValue(textInput.current.value)	
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
			        <h2 className="carInfoTitle">{value}</h2>
			        <h3 className="carInfoTitle">{CarStore.filteredCars[carId - 1].VehicleModel}</h3>
			        <div>
			        	<img src={CarStore.filteredCars[carId - 1].image} alt="" className="detailsImage"/>
			        </div>
			  	</div>
		    </>
  		)
  	}
	
	{/* if edit view is active open edit view, if not open the default car details page */}
	return isInEditMode ? openEditView() : openDefaultView()
}
export default inject ('CarStore') (observer(CarDetails))