import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import trashIcon from '../icons8-trash-64.png';

@inject('rootStore', 'vehicleModelListViewStore')
@observer 

class VehicleModelList extends Component {

	//filter the cars by Vehicle Model
	filter = (e) => {
	    e.preventDefault()
	    this.props.rootStore.vehicleModelListViewStore.filter = e.target.value
	}

	//sort cars by Vehicle Model
	sort = (e) => {
		this.props.rootStore.vehicleModelListViewStore.isSorted = true
	}

	//delete cars by id
	delete = (id) => {
		console.log(id)
		this.props.rootStore.vehicleModelListViewStore.removeCar(id)
	}

	render(){
		const { filter } = this.props.rootStore.vehicleModelListViewStore

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
			<hr className="divider"/>
			<h2 style={{textAlign: 'center', padding: '20px'}} className="page-title">Vehicle Models</h2>
			<div className="options">
			{filterAndSort()}
			</div>
				<div className="carsDiv">
	      			{this.props.vehicleModelListViewStore.listModels.map((model) => (
				        <div key={model.id} className="car">
				         <button className="delete" title="Delete car" onClick={this.delete.bind(this, model.id)}>
				        	<img src={trashIcon} alt="" className="deleteIcon" />
				        </button>				 
				        <img src={model.image} alt="" className="listImage"/>
				        <h3 className="carTitle">{model.VehicleModel}</h3>
				        </div>
	        		))}
	      		</div>
	      	</>
			)
		}

		const openSortedView = () => {
			return (
			<>
			<hr className="divider"/>
			<h2 style={{textAlign: 'center', padding: '20px'}} className="page-title">Vehicle Models</h2>
			<div className="options">
			{filterAndSort()}
			</div>
				<div className="carsDiv">
	      			{this.props.vehicleModelListViewStore.sortedModels.map((model) => (
				        <div key={model.id} className="car">
				         <button className="delete" title="Delete car" onClick={this.delete.bind(this, model.id)}>
				        	<img src={trashIcon} alt="" className="deleteIcon" />
				        </button>				 
				        <img src={model.image} alt="" className="listImage"/>
				        <h3 className="carTitle">{model.VehicleModel}</h3>
				        </div>
	        		))}
	      		</div>
	      	</>
			)
		}
		
		return this.props.rootStore.vehicleModelListViewStore.isSorted ? openSortedView() : openDefaultView()
	}
}

export default VehicleModelList