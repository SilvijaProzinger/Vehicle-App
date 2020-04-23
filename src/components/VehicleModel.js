import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
//import { Link } from 'react-router-dom';
import VehicleModelList from './VehicleModelList.js';

@inject('rootStore', 'vehicleModelListViewStore')
@observer 

class VehicleModel extends Component {

	render(){
		return (
			<VehicleModelList />
		)
	}
}

export default VehicleModel