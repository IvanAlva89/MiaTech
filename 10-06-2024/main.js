const person = {
    name: 'John',
    lastName: 'Smith',
    age: 30
}

const copyPerson = {...person, profession: 'Austronaut'};

console.log(person);
console.log(copyPerson);