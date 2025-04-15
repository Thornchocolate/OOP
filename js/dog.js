import { pet } from "./pet.js";
export class Dog extends pet {
    
    bark() {
        return `${this.name}: Woof Woof!`;
    }
}
