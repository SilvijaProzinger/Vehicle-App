import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
//import { Link } from 'react-router-dom';
import VehicleMakeList from './VehicleMakeList.js';

@inject('rootStore', 'vehicleMakeListViewStore')
@observer 

class VehicleMake extends Component {

	render(){
		return (
			<VehicleMakeList />
		)
	}
}

export default VehicleMake