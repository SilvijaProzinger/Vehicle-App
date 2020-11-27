import React, { Component } from 'react';
//import { inject, observer } from 'mobx-react';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import VehicleMakeList from './VehicleMakeList.js';

//@inject('rootStore', 'vehicleMakeListViewStore')
//@observer 

class VehicleMake extends Component {

	render(){
		return (
			<div>
			<VehicleMakeList />
			</div>
		)
	}
}

export default VehicleMake