import { Animal } from "./Animal.js"

export class Chimpanzee extends Animal {
    constructor(name, age, gender, weight, isPregnant) {
        super(name, "Chimpanzee", age, gender, weight, isPregnant, 12)
    }

    move() {

    }
}