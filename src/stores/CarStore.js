import { observable, computed, action } from 'mobx';
import React from 'react';

class CarStore {
	@observable textInput = React.createRef();

	@observable cars = [
		{ id: "0", VehicleMake: "Ford Taurus", VehicleModel: "SHO", image:"https://cars.usnews.com/static/images/Auto/izmo/i10477998/2017_ford_taurus_angularfront.jpg" },
		{ id: "1", VehicleMake: "Toyota", VehicleModel: "SE (6MT)", image:"https://www.seegertoyota.com/inventoryphotos/2063/5yfm4rce0lp010524/sp/2.jpg?height=400"},
		{ id: "2", VehicleMake: "Volkswagen Golf", VehicleModel: "MSRP", image: "https://tdrvehicles2.azureedge.net/photos/chrome/Expanded/White/2019VWC02/2019VWC02000101.jpg"},
		{ id: "3", VehicleMake: "BMW", VehicleModel: "M135i xDrive", image: "https://ymimg1.b8cdn.com/resized/car_model/4597/pictures/4021192/mobile_listing_main_01.jpg"},
		{ id: "4", VehicleMake: "Honda", VehicleModel: "Civic", image: "https://cache4.pakwheels.com/system/car_generation_pictures/4962/original/Honda_Civic_Facelift_2019.jpg"},
		{ id: "5", VehicleMake: "Alfa", VehicleModel: "Romeo Stelvio", image: "https://images.dealer.com/ddc/vehicles/2018/Alfa%20Romeo/Stelvio/SUV/trim_Base_1a03c3/color/Rosso%20Alfa-PRR-135%2C14%2C50-640-en_US.jpg"}
	]

	//filter the cars by Vehicle Make
  	@observable filter = ""

	@computed get filteredCars(){
		const matchesFilter = new RegExp(this.filter, "i")
		return this.cars.filter(car => !this.filter || matchesFilter.test(car.VehicleMake))
	}

	@computed get sortedCars() {
    	return this.filteredCars.sort((a, b) => (a.VehicleMake > b.VehicleMake) ? 1 : -1);
  	}

	@action editCar = (id) => {
		//const index = this.cars.findIndex(item => item.id === car.id)	
		console.log(id)
		this.cars[id].VehicleModel = this.textInput.current.value
	}
}

const store = new CarStore()
export default store