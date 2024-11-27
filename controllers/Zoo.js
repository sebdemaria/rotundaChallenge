import { Animal } from "../models/Animal.js";

export class Zoo {
    constructor() {
        this.animals = {
            lion: new Animal("lion", "roar"),
            tiger: new Animal("tiger", "grrr"),
        };
    }

    addAnimal(name, sound) {
        if (this.animals[name]) {
            throw new Error(`The animal '${name}' already exists.`);
        }
        this.animals[name] = new Animal(name, sound);
    }
}
