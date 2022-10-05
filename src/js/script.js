const zoo = {
    "name": "The Best Zoo",
    "capacity": 200,
    "numberOfGuests": 112,
    "animals": [],

};

const perry = {
    "name": "Perry",
    "type": "Platypus",
    "age": 2,
    "gender": "Female",
    "weight": 3.2,
    "isPregnant": true
}

const harry = {
    "name": "Harry",
    "type": "HummingBird",
    "age": 2,
    "gender": "Male",
    "weight": 3.2,
    "isPregnant": false
}

const sherry = {
    "name": "Sherry",
    "type": "Shark",
    "age": 2,
    "gender": "Female",
    "weight": 852,
    "isPregnant": true
}

const cherry = {
    "name": "Cherry",
    "type": "Chimpanzee",
    "age": 2,
    "gender": "Female",
    "weight": 3.2,
    "isPregnant": true
}

zoo.animals.push(perry);
zoo.animals.push(harry);
zoo.animals.push(sherry);
zoo.animals.push(cherry);
zoo['numberOfAnimals'] = zoo.animals.length

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
numberOfGuestsH3.appendChild(numberOfGuestsNode)
mainElement.appendChild(numberOfGuestsH3)

const numberOfAnimalsH3 = document.createElement("h3")
const numberOfAnimalsNode = document.createTextNode(`Number Of Animals: ${zoo.animals.length}`)
numberOfAnimalsH3.setAttribute('id', 'numberOfAnimals')
numberOfAnimalsH3.appendChild(numberOfAnimalsNode)
mainElement.appendChild(numberOfAnimalsH3)

// This function will be called as soon as the html page starts to load
function onLoad() {
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
}

function onAnimalsListBoxChange() {
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

function onInputChange() {
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

function onDeleteAnimal() {
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
    onInputChange()
}

function onAddAnimal() {
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

function validateAnimalsForm() {
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