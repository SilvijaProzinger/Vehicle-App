import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Cars from './components/Cars.js';
import CarDetails from './components/CarDetails.js';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
      <Router>
        <Header text="Vehicle App"/>
        <Route exact path="/" component={Cars} />
        <Route exact path="/car/:carId" component={CarDetails}/>
      </Router>
      </div>
    )
}
}

export default App;
