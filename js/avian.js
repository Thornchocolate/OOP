export class Avian {
    constructor(name, age, featherColor, voice) {
        this.name = name;
        this.age = age;
        this.featherColor = featherColor;
        this.voice = voice;
    }
    chirp() {
        return `${this.name}: ${this.voice}`;
    }
}