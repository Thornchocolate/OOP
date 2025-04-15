import { pet } from "./pet.js";
export class Dog extends pet {
    constructor(name, age, furColor) {
        super(name, age, furColor);
       this.sound = "Woof Woof!";
    }
    bark() {
        return `${this.name}: Woof Woof!`;
    }
}
