import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

@inject('CarStore')
@observer

class Cars extends Component {
	state = {
		cars: this.props.CarStore.filteredCars
	}

	//filter the cars by Vehicle Make
	filter = (e) => {
	    e.preventDefault()
	    this.props.CarStore.filter = e.target.value
	}

	//sort cars by Vehicle Make
	sort = (e) => {
		this.setState({
			cars: this.props.CarStore.sortedCars
		})
	}

	render() {
		const { filter, filteredCars, sort, sortedCars } = this.props.CarStore 
		return (
			<>
			<div className="filterSort">
			<button className="button sortButton" onClick={this.sort}>A-Z</button>
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
      			{this.state.cars.map((car, index) => (
			        <div key={index} className="car">
			        <img src={car.image} alt="" className="listImage"/>
			        <Link to={`/car/${index + 1}`} style={{ textDecoration: 'none' }}><h3 className="carTitle">{car.VehicleMake}</h3></Link>
			        <h4>{car.VehicleModel}</h4>
			        </div>
        		))}
      		</div>
      		</>
		)
	}

}

export default Cars;