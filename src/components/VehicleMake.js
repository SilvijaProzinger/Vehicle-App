import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

const VehicleMake = ({ CarStore, match, location, props}) => {
    const {
    	params: { carMake }
  	} = match

  	return (
  		<>
  		<h3 className="title">Vehicle Makes</h3>
  		<Link to="/"><button className="button backButton">Back</button></Link>
  		<div className="carsDiv">
      		{CarStore.filteredCars.filter(car => car.VehicleMake === carMake).map((car) => (
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

export default inject ('CarStore') (observer(VehicleMake))