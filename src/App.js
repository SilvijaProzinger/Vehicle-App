import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header.js';
//import Car from './components/Car.js';
import './App.css';

@inject('CarStore')
@observer
class App extends Component {

//filter the cars by Vehicle Make
  filter = (e) => {
    e.preventDefault();
    this.props.CarStore.filter = e.target.value;
  }

  render(){
    const { filter, filteredCars } = this.props.CarStore;   

    const carsList = filteredCars.map((car, index) => (
          <div key={index}>
          <Link to={`/car/${index + 1}`}><h3 className="carTitle">{car.VehicleMake}</h3></Link>
          <h3>{car.VehicleModel}</h3>
          <img src={car.image} alt="" width="300px" height="200px"/>
          </div>
        ))

    const carDetails = ({ match, location }) => {
      const {
        params: { carId }
      } = match;

      return (
      <>
      <p>
        <strong>Car ID: </strong>
        {carId}
      </p>
      <p>
        <strong>Vehicle Make: </strong>
        {filteredCars[carId - 1].VehicleMake}
      </p>
      </>
      );
    };

  return (
    <div className="App">
      <Router>
      <Header text="Vehicle App"/>
      <form onSubmit={e => this.filter(e)}>
        <input className="filter"
        type="text" 
        placeholder="Search by Vehicle Make" 
        value={filter}
        onChange={this.filter.bind(this)}
        />
        <button className="searchButton">Search</button>
      </form>

      <button className="sortButton">Sort Alphabetically</button>
      <div className="carsDiv">
        {carsList}
      </div>
      <Route exact path="/car/:carId" component={carDetails} />
      </Router>
    </div>

  );
}
}

export default App;
