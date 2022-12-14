import { Animal, birthAnimal, makePregnant, refreshAnimalsListBox } from "./Animal.js"
import { Chimpanzee } from "./Chimpanzee.js"
import { HummingBird } from "./Hummingbird.js"
import { Platypus } from "./Plartypus.js"
import { Shark } from "./Shark.js"
import { admitGuest, Zoo } from "./Zoo.js"

export let zoo

export function onLoad() {
    zoo = new Zoo("The Best Zoo", 200, 112)

    const perry = new Platypus("Perry", 2, "Female", 3.2, true)

    const harry = new HummingBird("Harry", 2, "Male", 3.2, false)

    const sherry = new Shark("Sherry", 2, "Female", 852, true)

    const cherry = new Chimpanzee("Cherry", 2, "Female", 3.2, true)

    zoo.addAnimal(perry);
    zoo.addAnimal(harry);
    zoo.addAnimal(sherry);
    zoo.addAnimal(cherry);
    zoo['numberOfAnimals'] = zoo.animals.length
    console.log(zoo.animals)
    const mainElement = document.getElementById("bodyDiv1")

    // document.getElementById("name").innerHTML = zoo.name
    const nameH1 = document.createElement("h1")
    const nameNode = document.createTextNode(zoo.name)
    nameH1.appendChild(nameNode)
    mainElement.appendChild(nameH1)

    // document.getElementById("capacity").innerHTML = zoo.capacity
    const capacityH3 = document.createElement("h3")
    const capacityNode = document.createTextNode(`Capacity: ${zoo.capacity}`)
    capacityH3.appendChild(capacityNode)
    mainElement.appendChild(capacityH3)

    // document.getElementById("numberOfGuests").innerHTML = zoo.numberOfGuests
    const numberOfGuestsH3 = document.createElement("h3")
    const numberOfGuestsNode = document.createTextNode(`Number Of Guests: ${zoo.numberOfGuests}`)
    numberOfGuestsH3.setAttribute("id", "numberOfGuests")
    numberOfGuestsH3.appendChild(numberOfGuestsNode)
    mainElement.appendChild(numberOfGuestsH3)

    const numberOfAnimalsH3 = document.createElement("h3")
    const numberOfAnimalsNode = document.createTextNode(`Number Of Animals: ${zoo.animals.length}`)
    numberOfAnimalsH3.setAttribute('id', 'numberOfAnimals')
    numberOfAnimalsH3.appendChild(numberOfAnimalsNode)
    mainElement.appendChild(numberOfAnimalsH3)


    // This for loop iterates through every animal in the zoo. This makes it so you can have as many animals you want in the zoo without touching the code.
    for (let i = 0; i < zoo.animals.length; i++) {
        // This for loop iterates through the keys of the animal object and populates the table row.
        const listBox = document.getElementById('animalsListBox')
        const cell = document.createElement("option")
        cell.setAttribute('id', `option${zoo.animals[i]['name']}`)
        const cellText = document.createTextNode(zoo.animals[i]['name'])
        cell.appendChild(cellText)
        listBox.appendChild(cell)
    }
    onZooLoad()
}

export function onZooLoad() {
    document.getElementById('zooNameField').value = zoo.name
    document.getElementById('zooCapacityField').value = zoo.capacity
    document.getElementById('zooNumOfAnimalsField').value = zoo.animals.length
    document.getElementById('zooNumOfGuestsField').value = zoo.numberOfGuests
}

export function onZooInputChange() {
    const list = document.getElementById("animalsListBox")
    const idx = list.selectedIndex
    const animalName = list[idx].value

    const animal = zoo.animals.find(element => element['name'] == animalName)

    if (animal != null) {
        animal['name'] = document.getElementById('animalsFormName').value
        animal['type'] = document.getElementById('animalsFormType').value
        animal['age'] = document.getElementById('animalsFormAge').value
        animal['gender'] = document.getElementById('animalsFormGender').value
        animal['weight'] = document.getElementById('animalsFormWeight').value
        animal['isPregnant'] = document.getElementById('animalsFormIsPregnant').value
    }
}




export function onAnimalsListBoxChange() {
    const list = document.getElementById("animalsListBox")
    const idx = list.selectedIndex
    const animalName = list[idx].value

    const animal = zoo.animals.find(element => element['name'] == animalName)

    if (animal != null) {
        document.getElementById('animalsFormName').value = animal['name']
        document.getElementById('animalsFormType').value = animal['type']
        document.getElementById('animalsFormAge').value = animal['age']
        document.getElementById('animalsFormGender').value = animal['gender']
        document.getElementById('animalsFormWeight').value = animal['weight']
        document.getElementById('animalsFormIsPregnant').value = animal['isPregnant']
    }
}

 export function onAnimalInputChange() {
    const list = document.getElementById("animalsListBox")
    const idx = list.selectedIndex
    const animalName = list[idx].value

    const animal = zoo.animals.find(element => element['name'] == animalName)

    if (animal != null) {
        animal['name'] = document.getElementById('animalsFormName').value
        animal['type'] = document.getElementById('animalsFormType').value
        animal['age'] = document.getElementById('animalsFormAge').value
        animal['gender'] = document.getElementById('animalsFormGender').value
        animal['weight'] = document.getElementById('animalsFormWeight').value
        animal['isPregnant'] = document.getElementById('animalsFormIsPregnant').value
    }
}

 export function onDeleteAnimal() {
    const list = document.getElementById("animalsListBox")
    const idx = list.selectedIndex
    const animalName = list[idx].value

    const animal = zoo.animals.find(element => element['name'] == animalName)
    const animalIndex = zoo.animals.indexOf(animal)
    if (list.selectedIndex > 0) {
        list.selectedIndex--
    }

    if (animalIndex > -1) {
        zoo.animals.splice(animalIndex, 1)
    }

    console.log(zoo.animals)

    const animalOption = document.getElementById(`option${animal['name']}`)
    animalOption.remove()
    document.getElementById("numberOfAnimals").innerText = `Number Of Animals: ${zoo.animals.length}`
    onZooInputChange()
}

 export function onAddAnimal() {
    if (!validateAnimalsForm()) {
        return
    }

    const listBox = document.getElementById("animalsListBox")
    let animal = {}

    animal['name'] = document.getElementById('animalsFormName').value
    animal['type'] = document.getElementById('animalsFormType').value
    animal['age'] = document.getElementById('animalsFormAge').value
    animal['gender'] = document.getElementById('animalsFormGender').value
    animal['weight'] = document.getElementById('animalsFormWeight').value
    animal['isPregnant'] = document.getElementById('animalsFormIsPregnant').value

    zoo.animals.push(animal)

    document.getElementById("numberOfAnimals").innerText = `Number Of Animals: ${zoo.animals.length}`

    const cell = document.createElement("option")
    cell.setAttribute('id', `option${animal['name']}`)
    const cellText = document.createTextNode(animal['name'])
    cell.appendChild(cellText)
    listBox.appendChild(cell)
}

 export function validateAnimalsForm() {
    const animalName = document.getElementById('animalsFormName').value
    const animalType = document.getElementById('animalsFormType').value
    const animalAge = document.getElementById('animalsFormAge').value
    const animalGender = document.getElementById('animalsFormGender').value
    const animalWeight = document.getElementById('animalsFormWeight').value
    const animalIsPregnant = document.getElementById('animalsFormIsPregnant').value
    const listOfCheckLabels = ['Name', 'Type', 'Age', 'Gender', 'Weight', 'Is Pregnant']
    const listOfChecks = [animalName, animalType, animalAge, animalGender, animalWeight, animalIsPregnant]

    for (let i = 0; i < listOfChecks.length; i++) {
        if (listOfChecks[i] == "") {
            alert(`${listOfCheckLabels[i]} must be filled out`);
            return false;
        }
    }

    return true
}