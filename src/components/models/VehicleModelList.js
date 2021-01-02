import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import trashIcon from '../../icons8-trash-64.png';
import Pagination from '../Pagination.js';

@inject('vehicleModelModuleStore', 'vehicleModelListViewStore')
@observer 

class VehicleModelList extends Component {

	//filter the cars by Vehicle Model
	filter = (e) => {
	    e.preventDefault()
	    this.props.vehicleModelListViewStore.filter = e.target.value
	}

	//sort cars by Vehicle Model
	sort = (e) => {
		this.props.vehicleModelListViewStore.isSorted = true
	}

	//delete cars by id
	delete = (id) => {
		console.log(id)
		this.props.vehicleModelModuleStore.removeCar(id)
	}

	paginate = (pageNumber) => {
		this.props.vehicleModelListViewStore.setPage(pageNumber)
	}

	render(){
		const { filter } = this.props.vehicleModelListViewStore

		const addOption = () => {
			return (
			<>
				<div className="addDiv">
				<Link to={`/addModel`} style={{ textDecoration: 'none' }}><button className="button addButton">Add new model</button></Link>
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
			        placeholder="Filter by vehicle model" 
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
			<h2 style={{textAlign: 'center', padding: '20px'}} className="page-title">Vehicle Models</h2>
			<div className="options">
			{filterAndSort()}
			{addOption()}
			</div>
				<div className="carsDiv">
	      			{this.props.vehicleModelListViewStore.currentCars.map((model) => (
				        <div key={model.id} className="car">
				         <button className="delete" title="Delete car" onClick={this.delete.bind(this, model.id)}>
				        	<img src={trashIcon} alt="" className="deleteIcon" />
				        </button>				 
				        <img src={model.image} alt="" className="listImage"/>
				        <Link to={`/models/${model.id}`}><h3 className="carTitle">{model.VehicleModel}</h3></Link>
				        </div>
	        		))}
	      		</div>
	      		<Pagination 
	      			carsPerPage={this.props.vehicleModelListViewStore.carsPerPage} 
	      			totalCars={this.props.vehicleModelListViewStore.listModels.length}
	      			paginate={this.paginate}
	      		/>
	      	</>
			)
		}

		const openSortedView = () => {
			return (
			<>
			<h2 style={{textAlign: 'center', padding: '20px'}} className="page-title">Vehicle Models</h2>
			<div className="options">
			{filterAndSort()}
			{addOption()}
			</div>
				<div className="carsDiv">
	      			{this.props.vehicleModelListViewStore.currentSortedCars.map((model) => (
				        <div key={model.id} className="car">
				         <button className="delete" title="Delete car" onClick={this.delete.bind(this, model.id)}>
				        	<img src={trashIcon} alt="" className="deleteIcon" />
				        </button>				 
				        <img src={model.image} alt="" className="listImage"/>
				        <Link to={`/models/${model.id}`}><h3 className="carTitle">{model.VehicleModel}</h3></Link>
				        </div>
	        		))}
	      		</div>
	      		<Pagination 
	      			carsPerPage={this.props.vehicleModelListViewStore.carsPerPage} 
	      			totalCars={this.props.vehicleModelListViewStore.sortedModels.length}
	      			paginate={this.paginate}
	      		/>
	      	</>
			)
		}
		
		return this.props.vehicleModelListViewStore.isSorted ? openSortedView() : openDefaultView()
	}
}

export default VehicleModelList