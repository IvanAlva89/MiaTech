
const person = {
    name: "John",
    lastName: "Smith",
    age: 30,
    profession: "Astronautic"
}

const templatePerson = (obj) => `I'm ${obj.name} ${obj.lastName}, I'm ${obj.age} years old and I'm an ${obj.profession}.`

console.log(templatePerson(person));
