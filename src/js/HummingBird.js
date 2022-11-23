import { Animal } from "./Animal.js"

export class HummingBird extends Animal {
    constructor(name, age, gender, weight, isPregnant) {
        super(name, "Hummingbird", age, gender, weight, isPregnant, 5)
    }

    move() {

    }
}