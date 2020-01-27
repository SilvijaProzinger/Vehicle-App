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

	//sort cars by Vehicle Make
	sort = (e) => {
		this.props.CarStore.isSorted = true
	}

	render() {
		const { filter } = this.props.CarStore

		const filterAndSort = () => {
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
	      		</>
      		)
		}

		const openDefaultView = () => {
			return (
			<>
			{filterAndSort()}
				<div className="carsDiv">
	      			{this.props.CarStore.filteredCars.map((car) => (
				        <div key={car.id} className="car">
				        <img src={car.image} alt="" className="listImage"/>
				        <Link to={`/makes/${car.VehicleMake}`} style={{ textDecoration: 'none' }}><h3 className="carTitle">{car.VehicleMake}</h3></Link>
				        <Link to={`/models/${car.VehicleModel}`} style={{ textDecoration: 'none' }}><h4 className="carSubtitle">{car.VehicleModel}</h4></Link>
				        <Link to={`/car/${car.id}`} style={{ textDecoration: 'none' }}><h4 className="carTitle">+</h4></Link>
				        </div>
	        		))}
	      		</div>
	      	</>
			)
		}

		const openSortedView = () => {
			return (
			<>
			{filterAndSort()}
				<div className="carsDiv">
	      			{this.props.CarStore.sortedCars.map((car) => (
				        <div key={car.id} className="car">
				        <img src={car.image} alt="" className="listImage"/>
				        <Link to={`/makes/${car.VehicleMake}`} style={{ textDecoration: 'none' }}><h3 className="carTitle">{car.VehicleMake}</h3></Link>
				        <Link to={`/models/${car.VehicleModel}`} style={{ textDecoration: 'none' }}><h4 className="carSubtitle">{car.VehicleModel}</h4></Link>
				        <Link to={`/car/${car.id}`} style={{ textDecoration: 'none' }}><h4 className="carTitle">+</h4></Link>
				        </div>
	        		))}
		      	</div>
		    </>
			)
		}

		return this.props.CarStore.isSorted ? openSortedView() : openDefaultView()
	}

}

export default Cars;