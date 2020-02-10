import { observable, computed, action } from 'mobx';
import React from 'react';

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

	@computed get filteredCars(){
		const matchesFilter = new RegExp(this.filter, "i")
		return this.cars.filter(car => !this.filter || matchesFilter.test(car.VehicleMake))
	}

	@computed get sortedCars() {
    	return this.filteredCars.filter(car => car !== null).slice().sort((a, b) => (a.VehicleMake > b.VehicleMake) ? 1 : -1);
  	}

  	//edit the car Vehicle Make property by it's id
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
		//had to replace the splice method so that the cars id and the indexes aren't mutated after deleting 
		this.cars[id] = null
  	}
}
const store = new CarStore()
export default store