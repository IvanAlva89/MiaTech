const person = {
    name: 'John',
    lastName: 'Smith',
    age: 30,
    profession: 'Astronautic',
    city: 'Milan'
}

const {name, lastName, ...restPerson} = person;

console.log(name, lastName, restPerson);