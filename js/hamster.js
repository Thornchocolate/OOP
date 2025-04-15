import { pet } from "./pet.js";
export class Hamster extends pet {
    squeak() {
        return `${this.name}: Squeak Squeak!`;
    }
}