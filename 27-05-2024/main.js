const student = {
    name: "Mario",
    age: 15,
    grade: "Second",
    school: "Michelangelo Institute"
}

const entriesStudent = Object.entries(student);
console.log(entriesStudent);

entriesStudent.forEach(item => console.log(`"${item[0]}: ${item[1]}"`));



