cars = []

function getNewCar() {
	return {
	'city': 'Toronto',
	'passengers': 0,
	'gas': 100
	}
}
// console.log("Calling getNewCar func");
// console.log(getNewCar());


function addCar(cars, newCar) {
	cars.push(newCar);
	return "Adding new car to fleet. Fleet size is now " + cars.length + ".";
}
// console.log("Calling addCar func");
// console.log(addCar(cars, getNewCar()));


function pickUpPassenger(car) {
	car.passengers += 1;
	car.gas -= 10;
	return "Picked up passenger. Car now has " + car.passengers + " passengers.";
}
// console.log("Calling pickUpPassenger func");
// console.log(pickUpPassenger(getNewCar()));


function getDestination(car) {
		if (car.city === 'Toronto') {
			return 'Mississauga';
		} else if (car.city === 'Mississauga') {
			return 'London';
		} else if (car.city === 'London') {
			return 'Toronto'
		}
}
// console.log("Calling getDestination func");
// console.log(getDestination(getNewCar()));


function fillUpGas(car) {
	var oldGas = car.gas;
	car.gas = 100;
	return "Filled up to " + getGasDisplay(car.gas) + " on gas from " + getGasDisplay(oldGas) + "."
}
// console.log("Calling fillUpGas func");
// console.log(fillUpGas(getNewCar()));


function getGasDisplay(gasAmount) {
	return gasAmount + "%"
}
// console.log("Calling getGasDisplay func");
// console.log(getGasDisplay(5));


function drive(car, cityDistance) {
	if (car.gas < cityDistance) {
	return fillUpGas(car);
}
	car.city = getDestination(car);
	car.gas -= cityDistance
	return "Drove to " + car.city + ". Remaining gas: " + getGasDisplay(car.gas) + ".";
}
// console.log("Calling drive func");
// console.log(drive(getNewCar(), 5));


function dropOffPassengers(car) {
	var previousPassengers = car.passengers;
	car.passengers = 0
	return "Dropped off " + previousPassengers + " passengers.";
}
// console.log("Calling dropOffPassengers func");
// console.log(dropOffPassengers(1));


function act(car) {
	var distanceBetweenCities = 50
		if (car.gas < 20) {
			return fillUpGas(car);
		}
		else if (car.passengers < 3) {
			return pickUpPassenger(car);
		}
		else {
			if (car.gas < distanceBetweenCities) {
				return fillUpGas(car);
			}
		var droveTo = drive(car, distanceBetweenCities);
		var passengersDropped = dropOffPassengers(car);
		return droveTo + passengersDropped;
	}
}
// console.log("Calling act func");
// console.log(act(cars[0]));

function commandFleet(cars) {
// goes through each car, access to a car & number
	for (var i = 0; i < cars.length; i++) {
		var car = cars[i]
		// creating a new local variable 'action'
		// calling the 'act' method with the current 'car'
		// and saving it to 'action'
		var action = act(car);
		// logs out a message with number & 'action'
		console.log("Car " + (i + 1) + ":" + action);
		// logs '---'
		console.log("---");
	}
}
// console.log("Calling commandFleet func");
// commandFleet(cars);

function addOneCarPerDay(cars, numDays) {
	for (var newCar; numDays > 0; numDays--) {
	newCar = getNewCar()
	console.log(addCar(cars, newCar));
	commandFleet(cars);
	}
}

var cars = [];
addOneCarPerDay(cars, 10);
