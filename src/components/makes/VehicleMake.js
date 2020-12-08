import React, { Component } from 'react';
import VehicleMakeList from './VehicleMakeList.js';
import Pagination from '../Pagination.js';

class VehicleMake extends Component {

	render(){
		return (
			<>
				<VehicleMakeList />
				<Pagination />
			</>
		)
	}
}

export default VehicleMake