// class -> object
//pancakes recipe -> pancakes
//house blueprint -> house

console.log('oop');

class Dog {
    constructor(vardas, kailioSpalva, years) {
        this.name = vardas;
        this.furColor = kailioSpalva;
        this.age = years;
        this.legs = 4;
        this.tail = true;
        this.pose = true;
        
    };

    hi() {
        return `Hi, my name is ${this.name}.`;
    };

    intro() {
        return `My name is ${this.name}, I am ${this.age} years old, my fur color is ${this.furColor}.`;
    };

    birthday() {
        return `Happy birthday, ${this.name}! You are now ${++this.age} years old!`;
    }
    bark() {
        return 'Woof!';
    };
    eat() {
        return 'Nom nom!';
    };

    sleep() {
        return 'Zzz...';
    };

    lostTail() {
        this.tail = false;
        return 'Oh no! I lost my tail!';
    };
    lostLegs() {
        if (this.legs > 0) {
            this.legs--;
            return 'Oh no! I lost my leg! I have only ' + this.legs + ' legs left!';
        }
    }
    lostFur() {
        this.furColor = 'bald';
        return 'Oh no! I lost my fur!';
    };
    lostName() {
        this.name = 'Unknown';
        return 'Oh no! I lost my name!';
    };
    changePose() {
        this.pose = !this.pose;
        return `I am now ${this.pose ? 'standing' : 'sitting'}!`;
    }
}

const Rex = new Dog('Rex', 'brown', 5);
console.log(Rex);
const Laika = new Dog('Laika', 'white', 2);
console.log(Laika);
console.log(Rex instanceof Dog); // true
console.log(Laika instanceof Object); // true

console.log('------------------');
console.log(Rex.name); 
console.log(Rex.furColor); 
console.log(Rex.age); 
console.log(Rex.legs); 
console.log(Rex.tail); 
console.log('------------------');
console.log(Laika.name); 
console.log(Laika.furColor); 
console.log(Laika.age); 
console.log(Laika.legs); 
console.log(Laika.tail); 
console.log('------------------');

console.log(Rex.hi());
console.log(Rex.intro());
console.log('------------------');
console.log(Laika.hi());
console.log(Laika.intro());
console.log('------------------');
console.log(Rex.intro(), Laika.intro());
console.log('------------------');
console.log(Rex.birthday());
console.log(Rex.birthday());
console.log(Rex.lostLegs());
console.log(Rex.changePose());
console.log(Rex.changePose());