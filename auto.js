import { Car } from './js/car.js';
/*
intro- describes car model and colour.
drive- after describing distance, it will calculate fuell consumption. if not enough, it will stop.
engineOn - starts the engine if its not already on.
engineOff - stops the engine if its not already off.
refill - refills the tank, but not more than the capacity.
const volvo = new Car();
*/
const volvo = new Car('Volvo', 'XC90', 2020, 'black', 10, 60);
console.log(volvo.intro());
const passat = new Car('Volkswagen', 'Passat', 2018, 'white', 12, 50);
console.log(passat.intro());
console.log(volvo.refill(55));
console.log(volvo.engineOn());
console.log(volvo.drive());
console.log(volvo.fuelLevel);
console.log(volvo.engineOff());

