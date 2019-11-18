import React, { useState, useRef, useEffect } from 'react';
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


  	/*useEffect(() => {
    console.log(textInput.current);
  	}, [textInput]);
	*/

  	const openDefaultView = () => {
  		return (
	  		<>
			    <Link to="/"><button className="button closeButton">X</button></Link>
			    <button className="button editButton"onClick={() => setEdit(!isInEditMode)}>Edit</button>
			    <div className="carInfo">
			        <h3 className="carInfoTitle">Vehicle Make: </h3>
			        {value}
			        <h3 className="carInfoTitle">Vehicle Model:</h3>
			        {CarStore.filteredCars[carId - 1].VehicleModel}
			        <div>
			        	<img src={CarStore.filteredCars[carId - 1].image} alt="" className="detailsImage"/>
			        </div>
			  	</div>
		    </>
  		)
  	}
	
	{/* if edit view is active open edit view if not open the default car details page */}
	return isInEditMode ? openEditView() : openDefaultView()
}
export default inject ('CarStore') (observer(CarDetails))