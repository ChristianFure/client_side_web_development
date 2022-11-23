import { Animal } from "./Animal.js"

export class Platypus extends Animal {
    constructor(name, age, gender, weight, isPregnant) {
        super(name, "Platypus", age, gender, weight, isPregnant, 25 )
    }

    move() {

    }
}