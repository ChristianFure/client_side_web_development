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