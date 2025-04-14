export class Car{
    constructor(make, model, year, color, kpl, fuelTankCapacity) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.kpl = kpl;;
        this.fuelLevel = 10; // in liters
        this.fuelTankCapacity = fuelTankCapacity; // in liters
        this.engineOn = false;
    }

    intro () {
        return `This is a ${this.year} ${this.color} ${this.make} ${this.model}.`;
    }
    
    refill(volume) {
        if (this.engineOn) {
            return 'Cannot refill while the engine is running.';
        }

        if (!isFinite(volume) || typeof volume !== 'number') {
            return 'Invalid fuel volume.';
        }

        if (volume <= 0) {
            return 'Are you trying to syphon the fuel?';
        }

        if (this.fuelLevel >= this.fuelTankCapacity) {
            return 'Fuel tank is already full.';
        }
            
        if (volume + this.fuelLevel > this.fuelTankCapacity) {
            const leftover = (volume + this.fuelLevel) - this.fuelTankCapacity;
            this.fuelLevel = this.fuelTankCapacity;
            return `Refilled to maximum capacity of ${this.fuelTankCapacity} liters. Leftover fuel: ${leftover} liters.`;
        } else {
            this.fuelLevel += volume;
            return `Refilled ${volume} liters. Current fuel level: ${this.fuelLevel} liters.`;
        }
    }

    start() {
        if (this.engineOn) {
            return 'Engine is already running.';
        } else {
            this.engineOn = true;
            return 'Engine started.';
        }
    }
    
    stop() {
        if (!this.engineOn) {
            return 'Engine is already off.';
        } else {
            this.engineOn = false;
            return 'Engine stopped.';
        }
    }
    
    drive(distance) {
        const fuelConsumption = distance / this.kpl;
        if (this.fuelTankCapacity < fuelConsumption) {
            return 'Not enough fuel to drive this distance.';
        } else {
            this.fuelTankCapacity -= fuelConsumption;
            return `Driving ${distance} kilometers consumes ${fuelConsumption.toFixed(2)} liters of fuel.`;
        } 
        
    }
};