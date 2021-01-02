import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

const VehicleModelEditView = ({ vehicleModelModuleStore, vehicleModelEditViewStore, match, location, props }) => {
    const {
    	params: { modelId }
  	} = match

	const [ model, setModel ] = useState(vehicleModelModuleStore.models[modelId].VehicleModel)
	const [ image, setImage ] = useState(vehicleModelModuleStore.models[modelId].image)
	const [ id ] = useState(vehicleModelModuleStore.models[modelId].id)
	const [ isInEditMode, setEdit ] = useState(true)

	const updateModel = () => {	
		vehicleModelEditViewStore.editModel(id, model, image)	
		setEdit(false)
	}

	return (
	<>
		<div className="closeButtonDiv"><Link to="/models"><button className="button closeButton">X</button></Link></div>
		<div className="editDiv">
			<h3>Enter a new Vehicle Model</h3>
			  	<input 
			  	className="editInput"
			  		type='text' 
			  		defaultValue={model}
			  		onChange={(event) => setModel(event.target.value)}
			  		/>
			  	<h3>Enter a new logo</h3>
			  		<input 
			  		className="editInput"
			  		type='text' 
			  		defaultValue={image}
			  		ref={vehicleModelEditViewStore.imageInput}
			  		onChange={(event) => setImage(event.target.value)}
			  		/>
			  		<button className="button saveButton" onClick={updateModel}>Save</button>
			{isInEditMode ? null : <h3 style={{'marginTop': '20px'}}>Changes saved!</h3>}
			</div>
		</>
	)		
}

export default inject ('vehicleModelModuleStore', 'vehicleModelEditViewStore') (observer(VehicleModelEditView))