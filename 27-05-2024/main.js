const person = {
    name: "John",
    age: 21,
    city: "Milan"
}

person.age = 30;
person.job = "Engineer";

for( let key in person ){
    console.log( key, ":", person[ key ] );
}

