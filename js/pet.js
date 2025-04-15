export class pet {
    constructor(name, age, furColor, voice) {
        this.name = name;
        this.age = age;
        this.furColor = furColor;
        this.legs = 4;
        this.eyes = 2;
    }
    makeSound() {
        return `${this.name}: ${this.sound}`;
    }}
