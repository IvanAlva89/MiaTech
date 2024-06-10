const person = {
    name: 'John',
    lastName : 'Smith',
    age: 30
}

const {name, lastName, age, profession = 'Astronaut', city = 'Milan'} = person;

console.log(name, lastName, age, profession, city);