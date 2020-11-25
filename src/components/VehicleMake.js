import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import VehicleMakeList from './VehicleMakeList.js';
import AddNewMake from './AddNewMake.js';

@inject('rootStore', 'vehicleMakeListViewStore')
@observer 

class VehicleMake extends Component {

	render(){
		return (
			<div>
			<Router>
				<Route exact path="/addMake" component={AddNewMake} />
				<VehicleMakeList />
			</Router>
			</div>
		)
	}
}

export default VehicleMake