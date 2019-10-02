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
    e.preventDefault()
    this.props.CarStore.filter = e.target.value
  }

  /*editCar = (e) => {
    e.preventDefault()

  }*/

  render(){
    const { filter, filteredCars } = this.props.CarStore 

    //Home component with the list of cars and filter functionality 
    const Home = () => {
    return ( 
      <>
      {/*text input for filter*/}
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

      {/*return the list of cars*/}
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
  
  //Details for each car
    const carDetails = ({ match, location }) => {
      const {
        params: { carId }
      } = match

      return (
      <>
        <Link to="/"><button className="button closeButton">X</button></Link>
        <button className="button editButton">Edit</button>
        <div className="carInfo">
        <h3 className="carInfoTitle">Vehicle Make: </h3>
        {filteredCars[carId - 1].VehicleMake}
        <h3 className="carInfoTitle">Vehicle Model:</h3>
        {filteredCars[carId - 1].VehicleModel}
        <div>
        <img src={filteredCars[carId - 1].image} alt="" className="detailsImage"/>
        </div>
      </div>
      </>
      )
    }

  return (
    <div className="App">
      <Router>
      <Header text="Vehicle App"/>
      <hr />

      <Route exact path="/" component={Home} />
      <Route exact path="/car/:carId" component={carDetails} />
      </Router>
    </div>
  )
}
}

export default App;
