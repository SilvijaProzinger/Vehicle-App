import { observable, action, computed } from 'mobx';

class CarStore {
	@observable cars = [
		{ id: "0", VehicleMake: "Ford Taurus", VehicleModel: "SHO", image:"https://cars.usnews.com/static/images/Auto/izmo/i10477998/2017_ford_taurus_angularfront.jpg" },
		{ id: "1", VehicleMake: "Toyota", VehicleModel: "SE (6MT)", image:"https://www.seegertoyota.com/inventoryphotos/2063/5yfm4rce0lp010524/sp/2.jpg?height=400"},
		{ id: "2", VehicleMake: "Volkswagen Golf", VehicleModel: "MSRP", image: "https://tdrvehicles2.azureedge.net/photos/chrome/Expanded/White/2019VWC02/2019VWC02000101.jpg"},
		{ id: "3", VehicleMake: "BMW", VehicleModel: "M135i xDrive", image: "https://ymimg1.b8cdn.com/resized/car_model/4597/pictures/4021192/mobile_listing_main_01.jpg"}
	];

	@observable filter = "";

	/*@action addCar = (car) => {
		this.cars.push(car);
	}*/

	@computed get filteredCars(){
		const matchesFilter = new RegExp(this.filter, "i");
		return this.cars.filter(car => !this.filter || matchesFilter.test(car.VehicleMake))
	}

	/*@computed get sortedCars() {
    	return this.cars.sort((a, b) => (a.VehicleMake > b.VehicleMake) ? 1 : -1);
  	}*/
}

const store = new CarStore();
export default store;