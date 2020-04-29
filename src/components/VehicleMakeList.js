import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import trashIcon from '../icons8-trash-64.png';

@inject('rootStore', 'vehicleMakeModuleStore', 'vehicleMakeListViewStore')
@observer 

class VehicleMakeList extends Component {

	//filter the cars by Vehicle Make
	filter = (e) => {
	    e.preventDefault()
	    this.props.rootStore.vehicleMakeListViewStore.filter = e.target.value
	}

	//sort cars by Vehicle Make
	sort = (e) => {
		this.props.rootStore.vehicleMakeListViewStore.isSorted = true
	}

	//delete cars by id
	delete = (id) => {
		console.log(id)
		this.props.rootStore.vehicleMakeModuleStore.removeCar(id)
	}

	render(){
		const { filter } = this.props.rootStore.vehicleMakeListViewStore

		const addOption = () => {
			return (
			<>
				<div className="addDiv">
				<Link to={`/addMake`} style={{ textDecoration: 'none' }}><button className="button addButton">Add new make</button></Link>
				</div>
			</>
			)
		}

		const filterAndSort = () => {
			return (
				<>
				<div className="filterSort">
				<button className="button sortButton" onClick={this.sort}>A-Z</button>
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
	
		const openDefaultView = () => {
			return (
			<>
			<h2 style={{textAlign: 'center', padding: '20px'}}className="page-title">Vehicle Makes</h2>
			<div className="options">
			{filterAndSort()}
			{addOption()}
			</div>
				<div className="carsDiv">
	      			{this.props.vehicleMakeListViewStore.listMakes.map((make) => (
				        <div key={make.id} className="car">	
				         <button className="delete" title="Delete car" onClick={this.delete.bind(this, make.id)}>
				        	<img src={trashIcon} alt="" className="deleteIcon" />
				        </button>			 
				        <img src={make.logo} alt="" className="listImage"/>
				        <h3 className="carTitle">{make.VehicleMake}</h3>
				        </div>
	        		))}
	      		</div>
	      	</>
			)
		}

		const openSortedView = () => {
			return (
			<>
			<h2 style={{textAlign: 'center', padding: '20px'}} className="page-title">Vehicle Makes</h2>
			<div className="options">
			{filterAndSort()}
			{addOption()}
			</div>
				<div className="carsDiv">
	      			{this.props.vehicleMakeListViewStore.sortedMakes.map((make) => (
				        <div key={make.id} className="car">
				         <button className="delete" title="Delete car" onClick={this.delete.bind(this, make.id)}>
				        	<img src={trashIcon} alt="" className="deleteIcon" />
				        </button>				 
				        <img src={make.logo} alt="" className="listImage"/>
				        <h3 className="carTitle">{make.VehicleMake}</h3>
				        </div>
	        		))}
	      		</div>
	      	</>
			)
		}

		return this.props.rootStore.vehicleMakeListViewStore.isSorted ? openSortedView() : openDefaultView()
	}

}

export default VehicleMakeList