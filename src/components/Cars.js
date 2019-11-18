import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

@inject('CarStore')
@observer

class Cars extends Component {
	//filter the cars by Vehicle Make
	filter = (e) => {
	    e.preventDefault()
	    this.props.CarStore.filter = e.target.value
	}
	render() {
		const { filter, filteredCars } = this.props.CarStore 
		return (
			<>
			<div className="filterSort">
		      	<form onSubmit={e => this.filter(e)}>
			        <input className="filter"
			        type="text" 
			        placeholder="Filter by vehicle make" 
			        value={filter}
			        onChange={this.filter.bind(this)}
			        />
		     	</form>
      		</div>
			<div className="carsDiv">
      			{filteredCars.map((car, index) => (
			        <div key={index} className="car">
			        <Link to={`/car/${index + 1}`} style={{ textDecoration: 'none' }}><h3 className="carTitle">{car.VehicleMake}</h3></Link>
			        <h4>{car.VehicleModel}</h4>
			        <img src={car.image} alt="" className="listImage"/>
			        </div>
        		))}
      		</div>
      		</>
		)
	}

}

export default Cars;