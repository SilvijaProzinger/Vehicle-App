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

	const updateMake = () => {	
		vehicleMakeEditViewStore.editMake(id)	
	}

	return (
		<div style={{textAlign: 'center'}}>
		<Link to="/makes"><button className="button closeButton">X</button></Link>
			<h3>Enter a new Vehicle Make</h3>
		  		<input 
		  		className="editInput"
		  		type='text' 
		  		defaultValue={make}
		  		ref={vehicleMakeEditViewStore.makeInput}
		  		onChange={(event) => setMake(vehicleMakeEditViewStore.makeInput.current.value)}
		  		/>
		  	<h3>Enter a new logo</h3>
		  		<input 
		  		className="editInput"
		  		type='text' 
		  		defaultValue={logo}
		  		ref={vehicleMakeEditViewStore.logoInput}
		  		onChange={(event) => setLogo(vehicleMakeEditViewStore.logoInput.current.value)}
		  		/>
		  		<button className="button saveButton" onClick={updateMake}>Save</button>
		</div>
	)		
}

export default inject ('vehicleMakeModuleStore', 'vehicleMakeEditViewStore') (observer(VehicleMakeEditView))