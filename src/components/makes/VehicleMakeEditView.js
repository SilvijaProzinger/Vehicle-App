import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

const VehicleMakeEditView = ({ vehicleMakeModuleStore, vehicleMakeEditViewStore, match, location, props }) => {
    const {
    	params: { makeId }
  	} = match

	const [ make, setMake ] = useState(vehicleMakeModuleStore.makes[makeId].VehicleMake)
	const [ logo, setLogo ] = useState(vehicleMakeModuleStore.makes[makeId].logo)
	const [ id ] = useState(vehicleMakeModuleStore.makes[makeId].id)
	const [ isInEditMode, setEdit ] = useState(true)

	const updateMake = () => {	
		vehicleMakeEditViewStore.editMake(id, make, logo)	
		setEdit(false)
	}

	return (
	<>
		<div className="closeButtonDiv"><Link to="/makes"><button className="button closeButton">X</button></Link></div>
		<div className="editDiv">
			<h3>Enter a new Vehicle Make</h3>
			  	<input 
			  	className="editInput"
			  		type='text' 
			  		defaultValue={make}
			  		onChange={(event) => setMake(event.target.value)}
			  		/>
			  	<h3>Enter a new logo</h3>
			  		<input 
			  		className="editInput"
			  		type='text' 
			  		defaultValue={logo}
			  		ref={vehicleMakeEditViewStore.logoInput}
			  		onChange={(event) => setLogo(event.target.value)}
			  		/>
			  		<button className="button saveButton" onClick={updateMake}>Save</button>
			{isInEditMode ? null : <h3 style={{'marginTop': '20px'}}>Changes saved!</h3>}
			</div>
		</>
	)		
}

export default inject ('vehicleMakeModuleStore', 'vehicleMakeEditViewStore') (observer(VehicleMakeEditView))