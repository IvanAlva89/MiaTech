const persons = [
    {name: 'John', age: 30},
    {name: 'Mary', age: 34},
    {name: 'Bob', age: 25}
];

console.log("Data:")
console.group();
console.table(persons);
console.groupEnd()
