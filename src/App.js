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
    e.target.value = ""
  }

  render(){
    const { filter, filteredCars } = this.props.CarStore 

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
      } = match

      return (
      <>
      <div className="carInfo">
        <h3 className="carInfoTitle">Vehicle Make: </h3>
        {filteredCars[carId - 1].VehicleMake}
        <h3 className="carInfoTitle">Vehicle Model:</h3>
        {filteredCars[carId - 1].VehicleModel}
        <div>
        <img src={filteredCars[carId - 1].image} alt="" width="500px" height="350px"/>
        </div>
      </div>
      </>
      )
    }

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
        <button className="clearButton">Clear search</button>
      </form>

      <Link to="/"><h2 className="home">Home</h2></Link>
      <Route exact path="/" component={Home} />
      <Route exact path="/car/:carId" component={carDetails} />
      </Router>
    </div>

  )
}
}

export default App;
