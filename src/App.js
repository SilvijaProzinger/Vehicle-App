import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Home from './components/Home.js';
//import Cars from './components/Cars.js';
//import CarDetails from './components/CarDetails.js';
import VehicleMake from './components/makes/VehicleMake.js';
//import VehicleModel from './components/VehicleModel.js';
import AddNewMake from './components/makes/AddNewMake.js';
import VehicleMakeEditView from './components/makes/VehicleMakeEditView.js';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
      <Router>
        <Header text="Vehicle App"/>
        <Route exact path="/" component={Home} />
        <Route exact path="/makes" component={VehicleMake} />
        <Route exact path="/addMake" component={AddNewMake} />
        <Route exact path="/makes/:makeId" component={VehicleMakeEditView} />
        {/*<Route exact path="/models" component={VehicleModel}/>*/}
        {/*<Route exact path="/makes/:carMake" component={VehicleMake} />*/}
        {/*<Route exact path="/models/:carModel" component={VehicleModel}/>*/}
      </Router>
      </div>
    )
}
}

export default App;
