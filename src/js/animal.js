import { zoo } from "./script.js"

export class Animal {
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

export function makePregnant() {
    const list = document.getElementById("animalsListBox")
    const idx = list.selectedIndex
    const animalName = list[idx].value

    let mother = zoo.animals.find(element => element['name'] == animalName)

    if (mother.gender != "Female") {
        throw Error("Male cannot get pregnant")
    }
    const baby = new Animal("Name", mother.type, 0, "Male", 15, false, 2)
    mother.baby = baby
    mother.isPregnant = true
}

export function birthAnimal() {
    const list = document.getElementById("animalsListBox")
    const idx = list.selectedIndex
    const animalName = list[idx].value

    let mother = zoo.animals.find(element => element['name'] == animalName)

    if (mother.isPregnant != true) {
        throw new Error("Animal is not pregnant");
    }
    zoo.animals.push(mother.baby)
    console.log(zoo.animals.length)
    mother.baby = null
    mother.isPregnant = false
    refreshAnimalsListBox()
}

export function refreshAnimalsListBox() {
    const listBox = document.getElementById('animalsListBox')
    listBox.innerHTML = ""
    document.getElementById('zooNameField').value = zoo.name
    document.getElementById('zooCapacityField').value = zoo.capacity
    document.getElementById('zooNumOfAnimalsField').value = zoo.animals.length
    document.getElementById('zooNumOfGuestsField').value = zoo.numberOfGuests
    for (let i = 0; i < zoo.animals.length; i++) {
        // This for loop iterates through the keys of the animal object and populates the table row.
        const cell = document.createElement("option")
        cell.setAttribute('id', `option${zoo.animals[i]['name']}`)
        const cellText = document.createTextNode(zoo.animals[i]['name'])
        cell.appendChild(cellText)
        listBox.appendChild(cell)
    }
    console.log(document.getElementById('zooNumOfAnimalsField').value)

}