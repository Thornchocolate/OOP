import { pet } from "./pet.js";
export class Hamster extends pet {
    constructor(name, age, furColor) {
        super(name, age, furColor);
        this.sound = "Squeak Squeak!";
    }
    squeak() {
        return `${this.name}: Squeak Squeak!`;
    }
}