// import { Animal, Chimpanzee, HummingBird, MakePregnant, Platypus, Shark } from "./Animal.js"

// This function will be called as soon as the html page starts to load

let zoo

class Zoo {
    constructor() {
        this.name = 'The Best Zoo'
        this.capacity = 200
        this.numberOfGuests = 112
        this.animals = []
    }

    addAnimal(animal) {
        this.animals.push(animal)
    }

    removeAnimal(animal) {
        const index = this.animals.indexOf(animal);
        if (index > -1) {
            this.animals.splice(index, 1);
        }
    }

    updateAnimal(animal) {
    }

    admitGuest(guest) {
        zoo.numberOfGuests++;
    document.getElementById('numberOfGuests').innerText = `Number Of Guests: ${zoo.numberOfGuests}`
    document.getElementById('zooNumOfAnimalsField').value = zoo['numberOfGuests']
    }

    findAnimalByName(name) {
        return this.animals.find(animal => animal.name == name)
    }
} 

class Animal {
    constructor(name, type, age, gender, weight, isPregnant, moveDistance) {
        this.name = name
        this.type = type
        this.age = age
        this.gender = gender
        this.weight = weight
        this.isPregnant = isPregnant
        this.moveDistance = 1
        this.baby;
    }

    move() {

    }

    makePregnant() {
        this.isPregnant = true
        
    }

    giveBirth() {
        
    }
}





 class HummingBird extends Animal {
    constructor(name, age, gender, weight, isPregnant) {
        super(name, "Hummingbird", age, gender, weight, isPregnant, 5)
    }

    move() {

    }
}

 class Platypus extends Animal {
    constructor(name, age, gender, weight, isPregnant) {
        super(name, "Platypus", age, gender, weight, isPregnant, 25 )
    }

    move() {

    }
}

 class Shark extends Animal {
    constructor(name, age, gender, weight, isPregnant) {
        super(name, "Shark", age, gender, weight, isPregnant, 58)
    }

    move() {

    }
}

 class Chimpanzee extends Animal {
    constructor(name, age, gender, weight, isPregnant) {
        super(name, "Chimpanzee", age, gender, weight, isPregnant, 12)
    }

    move() {

    }
}