const person = {
    name: 'John',
    lastName : 'Smith',
    age: 30
}

const {name: personName, lastName: personLastName, age: personAge} = person;

console.log(personName, personLastName, personAge);