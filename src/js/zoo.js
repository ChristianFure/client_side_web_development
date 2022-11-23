import { zoo } from "./script.js"

export class Zoo {
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

    findAnimalByName(name) {
        return this.animals.find(animal => animal.name == name)
    }
} 

export function admitGuest() {
    zoo.numberOfGuests++;
    document.getElementById('numberOfGuests').innerText = `Number Of Guests: ${zoo.numberOfGuests}`
    document.getElementById('zooNumOfAnimalsField').value = zoo['numberOfGuests']
}