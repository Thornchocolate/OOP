import { pet } from './pet.js';
export class Cat extends pet {
    meow() {
        return `${this.name}: Meow Meow!`;
    }
}