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

console.log(zoo);
console.log(perry);
console.log(harry);
console.log(sherry);
console.log(cherry);

zoo.animals.push(perry);
zoo.animals.push(harry);
zoo.animals.push(sherry);
zoo.animals.push(cherry);

console.log(zoo.animals)

document.getElementById("name").innerHTML = zoo.name
document.getElementById("capacity").innerHTML = zoo.capacity
document.getElementById("numberOfGuests").innerHTML = zoo.numberOfGuests

document.getElementById("perryType").innerHTML = perry.type
document.getElementById("perryAge").innerHTML = perry.age
document.getElementById("perryGender").innerHTML = perry.gender
document.getElementById("perryWeight").innerHTML = perry.weight
document.getElementById("perryIsPregnant").innerHTML = perry.isPregnant ? 'Pregnant' : 'Not Pregnant'

document.getElementById("harryType").innerHTML = harry.type
document.getElementById("harryAge").innerHTML = harry.age
document.getElementById("harryGender").innerHTML = harry.gender
document.getElementById("harryWeight").innerHTML = harry.weight
document.getElementById("harryIsPregnant").innerHTML = harry.isPregnant ? 'Pregnant' : 'Not Pregnant'

document.getElementById("sherryType").innerHTML = sherry.type
document.getElementById("sherryAge").innerHTML = sherry.age
document.getElementById("sherryGender").innerHTML = sherry.gender
document.getElementById("sherryWeight").innerHTML = sherry.weight
document.getElementById("sherryIsPregnant").innerHTML = sherry.isPregnant ? 'Pregnant' : 'Not Pregnant'

document.getElementById("cherryType").innerHTML = cherry.type
document.getElementById("cherryAge").innerHTML = cherry.age
document.getElementById("cherryGender").innerHTML = cherry.gender
document.getElementById("cherryWeight").innerHTML = cherry.weight
document.getElementById("cherryIsPregnant").innerHTML = cherry.isPregnant ? 'Pregnant' : 'Not Pregnant'