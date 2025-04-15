import { pet } from './pet.js';
export class Cat extends pet {
    constructor(name, age, furColor) {
        super(name, age, furColor);
        this.sound = 'Meow Meow!';
    }
    meow() {
        return `${this.name}: Meow Meow!`;
    }
}