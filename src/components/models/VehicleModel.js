import React, { Component } from 'react';
import VehicleModelList from './VehicleModelList.js';
import Pagination from '../Pagination.js';

class VehicleModel extends Component {

	render(){
		return (
			<>
				<VehicleModelList />
				<Pagination />
			</>
		)
	}
}

export default VehicleModel