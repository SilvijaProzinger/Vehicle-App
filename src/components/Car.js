import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('CarStore')
@observer
class Car extends Component {
	render(){
		return(
			<div>
			<h1>About car model</h1>
			</div>
		)
	}
}

export default Car;