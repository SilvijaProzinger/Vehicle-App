import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

@inject('rootStore', 'vehicleMakeListViewStore')
@observer 

class VehicleMakeList extends Component {

	//filter the cars by Vehicle Make
	filter = (e) => {
	    e.preventDefault()
	    this.props.rootStore.vehicleMakeListViewStore.filter = e.target.value
	}

	render(){
		const { filter } = this.props.rootStore.vehicleMakeListViewStore

		const filterAndSort = () => {
			return (
				<>
				<div className="filterSort">
				{/*<button className="button sortButton" onClick={this.sort}>A-Z</button>*/}
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

		return (
			<>
			<h2 style={{textAlign: 'center', padding: '20px'}}className="page-title">Vehicle Makes</h2>
			<div className="options">
			{filterAndSort()}
			</div>
				<div className="carsDiv">
	      			{this.props.vehicleMakeListViewStore.listMakes.map((make) => (
				        <div key={make.id} className="car">				 
				        <img src={make.logo} alt="" className="listImage"/>
				        <h3 className="carTitle">{make.VehicleMake}</h3>
				        </div>
	        		))}
	      		</div>
	      	</>
		)
	}
}

export default VehicleMakeList