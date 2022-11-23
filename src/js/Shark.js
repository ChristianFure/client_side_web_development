import { Animal } from "./Animal.js"

export class Shark extends Animal {
    constructor(name, age, gender, weight, isPregnant) {
        super(name, "Shark", age, gender, weight, isPregnant, 58)
    }

    move() {

    }
}