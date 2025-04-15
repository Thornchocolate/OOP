import { Cat } from "./js/cat.js";
import { Dog } from "./js/dog.js";
import { Hamster } from "./js/hamster.js";
import { pet } from "./js/pet.js";
import { Avian } from "./js/avian.js";
//import { Marine } from "./js/marine.js";

/*  
Animal:
    pet:    
        Dog
        Cat
        Hamster
    
    Avian:
        Parrot
        Hummingbird
        Eagle

    Marine:  
        Dolphin
        Tuna
        Salmon


*/

const Laika = new Dog("Laika", 3, "white");
const Luna = new Cat("Luna", 2, "pitch black like a void");
const Nibbles = new Hamster("Nibbles", 1, "sandy brown");

console.log(Laika);
console.log(Luna);
console.log(Nibbles);
console.log(Laika.bark());
console.log(Luna.meow());
console.log(Nibbles.squeak());
console.log(Laika.makeSound());
console.log(Luna.makeSound());
console.log(Nibbles.makeSound());


