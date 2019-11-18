import React, { Component } from 'react';
//import { inject, observer } from 'mobx-react';
//import { decorate, observable, action, computed } from 'mobx';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import store from './stores/CarStore.js';
import Header from './components/Header.js';
import Cars from './components/Cars.js';
import CarDetails from './components/CarDetails.js';
import './App.css';

/*decorate(store, {
  cars: observable,
  filter: action,
  filteredCars: computed,
  sortedCars: computed
})
*/

class App extends Component {
  render(){
    return (
      <div className="App">
      <Router>
        <Header text="Vehicle App"/>
        <hr />

        <Route exact path="/" component={Cars} />
        <Route exact path="/car/:carId" component={CarDetails}/>
      </Router>
      </div>
    )
}
}

export default App;
