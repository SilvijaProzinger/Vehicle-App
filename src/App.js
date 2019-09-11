import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header.js';
import Car from './components/Car.js';
import './App.css';

@inject('CarStore')
@observer
class App extends Component {
  //after clicking the add button this function adds the value of inserted car name
  /*handleSubmit = (e) => {
    e.preventDefault();
    this.props.CarStore.addCar(this.carInput.value);
    e.target.reset(); //reset value of input bar
  }
  */

//filter the cars by Vehicle Make
  filter = (e) => {
    e.preventDefault();
    this.props.CarStore.filter = e.target.value;
  }

  render(){
    const { filter, filteredCars} = this.props.CarStore;

    const carsList = filteredCars.map(car => (
      <div key={car}>
      <h2 className="carTitle">{car.VehicleMake}</h2>
      <h3>{car.VehicleModel}</h3>
      <img src={car.image} alt="" width="300px" height="200px"/>
      </div>
    ))

  return (
  <Router>
    <div className="App">
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
        <Route path="/car" component={Car}/>
        {carsList}
      </div>
    </div>
    </Router>
  );
}
}

export default App;
