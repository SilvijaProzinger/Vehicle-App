import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header.js';
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

    const Home = () => {
    return ( 
      <>
      <div className="carsDiv">
      {filteredCars.map((car, index) => (
          <div key={index}>
          <Link to={`/car/${index + 1}`} style={{ textDecoration: 'none' }}><h3 className="carTitle">{car.VehicleMake}</h3></Link>
          <h4>{car.VehicleModel}</h4>
          <img src={car.image} alt="" width="300px" height="200px"/>
          </div>
        ))}
      </div>
      </>
      )
    }

    const carDetails = ({ match, location }) => {
      const {
        params: { carId }
      } = match;

      return (
      <>
      <div className="carInfo">
        <h3>Vehicle Make: </h3>
        {filteredCars[carId - 1].VehicleMake}
        <h3>Vehicle Model:</h3>
        {filteredCars[carId - 1].VehicleModel}
      </div>
      </>
      )
    }

  return (
    <div className="App">
      <Router>
      <Header text="Vehicle App"/>
      <Link to="/">Home</Link>
      <Route exact path="/" component={Home} />
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
        {Home}
      </div>
      <Route exact path="/car/:carId" component={carDetails} />
      </Router>
    </div>

  )
}
}

export default App;
