export default {

	Query:{
		allCars: async (parent, args, { Car })=>{
			const cars = await Car.find()
			return cars.map(x =>{
				x.id = x._id.toString()
				return x
			})
		}

	},
	Mutation:{
		createCar: async (parent, args, { Car })=>{
			const car = await new Car(args).save()
			car.id = car._id.toString()
			return car
		}
	}

}