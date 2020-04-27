import React from 'react';
import { observable, computed, action } from 'mobx';

class RootStore {
	constructor(){
		this.vehicleMakeModuleStore = new VehicleMakeModuleStore(this)
		this.vehicleMakeListViewStore = new VehicleMakeListViewStore(this)

		this.vehicleModelModuleStore = new VehicleModelModuleStore(this)
		this.vehicleModelListViewStore = new VehicleModelListViewStore(this)
	}

	@observable cars = [
		{ id: "0", VehicleMake: "Ford Taurus", VehicleModel: "SHO", image:"https://cars.usnews.com/static/images/Auto/izmo/i10477998/2017_ford_taurus_angularfront.jpg", logo: "https://seeklogo.net/wp-content/uploads/2014/07/ford-logo.png" },
		{ id: "1", VehicleMake: "Toyota", VehicleModel: "SE (6MT)", image:"https://www.seegertoyota.com/inventoryphotos/2063/5yfm4rce0lp010524/sp/2.jpg?height=400", logo: "https://seeklogo.net/wp-content/uploads/2014/06/toyota-logo-vector-download.jpg" },
		{ id: "2", VehicleMake: "Volkswagen Golf", VehicleModel: "MSRP", image: "https://tdrvehicles2.azureedge.net/photos/chrome/Expanded/White/2019VWC02/2019VWC02000101.jpg", logo: "data:image/png;base64,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"},
		{ id: "3", VehicleMake: "BMW", VehicleModel: "M135i xDrive", image: "https://ymimg1.b8cdn.com/resized/car_model/4597/pictures/4021192/mobile_listing_main_01.jpg", logo:"https://images-na.ssl-images-amazon.com/images/I/61b2FkbZsEL._AC_SY355_.jpg" },
		{ id: "4", VehicleMake: "Honda", VehicleModel: "Civic", image: "https://cache4.pakwheels.com/system/car_generation_pictures/4962/original/Honda_Civic_Facelift_2019.jpg", logo: "https://seeklogo.net/wp-content/uploads/2011/05/honda-silver-logo-vector.png"},
		{ id: "5", VehicleMake: "Alfa", VehicleModel: "Romeo Stelvio", image: "https://images.dealer.com/ddc/vehicles/2018/Alfa%20Romeo/Stelvio/SUV/trim_Base_1a03c3/color/Rosso%20Alfa-PRR-135%2C14%2C50-640-en_US.jpg", logo: "data:image/png;base64,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"},
		{ id: "6", VehicleMake: "Ford Taurus", VehicleModel: "SEL", image:"https://www.whitescanyonford.com/assets/stock/colormatched_01/white/640/cc_2016foc070001_01_640/cc_2016foc070001_01_640_yz.jpg", logo: "https://seeklogo.net/wp-content/uploads/2014/07/ford-logo.png" }, 
		{ id: "7", VehicleMake: "Hyundai Kona", VehicleModel: "SEL", image: "https://m.media-amazon.com/images/I/71n9O408ZTL._UY560_.jpg", logo: "https://di-uploads-pod4.dealerinspire.com/rivercityhyundai/uploads/2017/05/HyundaiLogoStacked_4cblk-1024x659.gif" },
		{ id: "8", VehicleMake: "BMW", VehicleModel: "i8", image: "https://auto.ndtvimg.com/car-images/large/bmw/i8/bmw-i8.webp?v=7", logo:"https://images-na.ssl-images-amazon.com/images/I/61b2FkbZsEL._AC_SY355_.jpg"},
		{ id: "9", VehicleMake: "Toyota", VehicleModel: "Yaris", image: "https://dealerimages.dealereprocess.com/image/upload/c_limit,f_auto,fl_lossy,w_600/v1/svp/dep/17toyotayarisiafwdsa1a/toyota_17yarisiafwdsa1a_angularfront_abyss", logo: "https://seeklogo.net/wp-content/uploads/2014/06/toyota-logo-vector-download.jpg" }
	]

}

class VehicleMakeModuleStore {
	constructor(rootStore){
		this.rootStore = rootStore
	}


}

class VehicleMakeListViewStore {
	constructor(rootStore){
		this.rootStore = rootStore
	}

	@observable filter = ""
	@observable isSorted = false;

	//@observable newMake = React.createRef();
	//@observable newLogo = React.createRef();

    // save id of last car so that the user doesn't have to manually insert it
	@observable lastId = this.rootStore.cars.slice(-1)[0].id

	//list only car makes
	@computed get listMakes(){
		const matchesFilter = new RegExp(this.filter, "i")
		return this.rootStore.cars.filter(car => car !== null).filter(car => !this.filter || matchesFilter.test(car.VehicleMake))
	}

	//list alphabetically sorted makes
	@computed get sortedMakes() {
    	return this.listMakes.filter(car => car !== null).slice().sort((a, b) => (a.VehicleMake > b.VehicleMake) ? 1 : -1);
  	}

  	//add a new car 
	@action addCar = ({id, newMake, newLogo}) => {
		console.log(newMake, newLogo)
		this.rootStore.cars.push({
			id: ++this.lastId, 
			VehicleMake: newMake, 
			logo: newLogo
		})
	}


}

class VehicleModelModuleStore {
	constructor(rootStore){
		this.rootStore = rootStore
	}
}

class VehicleModelListViewStore {
	constructor(rootStore){
		this.rootStore = rootStore
	}

	@observable filter = ""
	@observable isSorted = false;

	//list only car models
	@computed get listModels(){
		const matchesFilter = new RegExp(this.filter, "i")
		return this.rootStore.cars.filter(car => car !== null).filter(car => !this.filter || matchesFilter.test(car.VehicleModel))
	}

	//list alphabetically sorted models
	@computed get sortedModels() {
    	return this.listModels.filter(car => car !== null).slice().sort((a, b) => (a.VehicleModel > b.VehicleModel) ? 1 : -1);
  	}

}
/*
class CarStore {
	@observable makeInput = React.createRef();
	@observable modelInput = React.createRef();
	@observable imageInput = React.createRef();
	@observable isSorted = false;
	@observable newId = React.createRef();
	@observable newMake = React.createRef();
	@observable newModel = React.createRef();
	@observable newImage = React.createRef();

	@observable cars = [
		{ id: "0", VehicleMake: "Ford Taurus", VehicleModel: "SHO", image:"https://cars.usnews.com/static/images/Auto/izmo/i10477998/2017_ford_taurus_angularfront.jpg" },
		{ id: "1", VehicleMake: "Toyota", VehicleModel: "SE (6MT)", image:"https://www.seegertoyota.com/inventoryphotos/2063/5yfm4rce0lp010524/sp/2.jpg?height=400" },
		{ id: "2", VehicleMake: "Volkswagen Golf", VehicleModel: "MSRP", image: "https://tdrvehicles2.azureedge.net/photos/chrome/Expanded/White/2019VWC02/2019VWC02000101.jpg" },
		{ id: "3", VehicleMake: "BMW", VehicleModel: "M135i xDrive", image: "https://ymimg1.b8cdn.com/resized/car_model/4597/pictures/4021192/mobile_listing_main_01.jpg" },
		{ id: "4", VehicleMake: "Honda", VehicleModel: "Civic", image: "https://cache4.pakwheels.com/system/car_generation_pictures/4962/original/Honda_Civic_Facelift_2019.jpg" },
		{ id: "5", VehicleMake: "Alfa", VehicleModel: "Romeo Stelvio", image: "https://images.dealer.com/ddc/vehicles/2018/Alfa%20Romeo/Stelvio/SUV/trim_Base_1a03c3/color/Rosso%20Alfa-PRR-135%2C14%2C50-640-en_US.jpg" },
		{ id: "6", VehicleMake: "Ford Taurus", VehicleModel: "SEL", image:"https://www.whitescanyonford.com/assets/stock/colormatched_01/white/640/cc_2016foc070001_01_640/cc_2016foc070001_01_640_yz.jpg" }, 
		{ id: "7", VehicleMake: "Hyundai Kona", VehicleModel: "SEL", image: "https://m.media-amazon.com/images/I/71n9O408ZTL._UY560_.jpg" },
		{ id: "8", VehicleMake: "BMW", VehicleModel: "i8", image: "https://auto.ndtvimg.com/car-images/large/bmw/i8/bmw-i8.webp?v=7" },
		{ id: "9", VehicleMake: "Toyota", VehicleModel: "Yaris", image: "https://dealerimages.dealereprocess.com/image/upload/c_limit,f_auto,fl_lossy,w_600/v1/svp/dep/17toyotayarisiafwdsa1a/toyota_17yarisiafwdsa1a_angularfront_abyss" }
	]

	//filter the cars by Vehicle Make
  	@observable filter = ""

  	@observable lastId = this.cars.slice(-1)[0].id

  	@observable currentPage = 1
  	@observable carsPerPage = 6

  	@observable indexOfLastCar = (this.currentPage * this.carsPerPage)
  	@observable indexOfFirstCar = (this.indexOfLastCar - this.carsPerPage)

  	@computed get currentCars (){
  		return this.filteredCars.slice(this.indexOfFirstCar, this.indexOfLastCar)
  	}

  	@computed get currentSortedCars (){
  		return this.sortedCars.slice(this.indexOfFirstCar, this.indexOfLastCar)
  	}

	@computed get filteredCars(){
		const matchesFilter = new RegExp(this.filter, "i")
		return this.cars.filter(car => car !== null).filter(car => !this.filter || matchesFilter.test(car.VehicleMake))
	}

	@computed get sortedCars() {
    	return this.filteredCars.filter(car => car !== null).slice().sort((a, b) => (a.VehicleMake > b.VehicleMake) ? 1 : -1);
  	}

  	//edit the car Vehicle Make property by its id
	@action editCar = (id) => {
		this.cars[id].VehicleModel = this.modelInput.current.value
		this.cars[id].VehicleMake = this.makeInput.current.value
		this.cars[id].image = this.imageInput.current.value
	}

	//add a new car 
	@action addCar = ({id, VehicleMake, VehicleModel, image}) => {
		this.cars.push({
			id: ++this.lastId, 
			VehicleMake: this.newMake.current.value, 
			VehicleModel: this.newModel.current.value,
			image: this.newImage.current.value
		})
	}

	//delete a car by id 
	@action removeCar = (id) => {
		//had to replace the splice method so that the cars array isn't mutated after deleting 
		this.cars[id] = null
  	}

  	//set the page to be whatever number is clicked on in Pagination component
  	@action setPage = (pageNumber) => {
  		this.currentPage = pageNumber
  		this.indexOfLastCar = (this.currentPage * this.carsPerPage)
  		this.indexOfFirstCar = (this.indexOfLastCar - this.carsPerPage)
  	}
}

*/
const rootStore = new RootStore()
export default rootStore