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

// This function will be called as soon as the html page starts to load
function onLoad() {
    // These variables get the table which is already created and it creates a body for the table.
    const animalsTable = document.getElementById("animalsTable")
    const tableBody = document.createElement("tbody")

    // This for loop iterates through every animal in the zoo. This makes it so you can have as many animals you want in the zoo without touching the code.
    for (let i = 0; i < zoo.animals.length; i++) {
        const row = document.createElement("tr")

        const keys = Object.keys(zoo.animals[i])

        // This for loop iterates through the keys of the animal object and populates the table row.
        for (let u = 0; u < keys.length; u++) {
            const cell = document.createElement("td")
            const cellText = document.createTextNode(zoo.animals[i][keys[u]])
            cell.appendChild(cellText)
            row.appendChild(cell)
        }

        // This adds the row to the table.
        tableBody.appendChild(row)
    }
    // This adds the table body to the animals table. Without this the table would be just headings.
    animalsTable.appendChild(tableBody)
}

