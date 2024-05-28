const students = [
    { name: 'Mario', grade: 60 },
    { name: 'Stefania', grade: 30 },
    { name: 'Lorenzo', grade: 85 },
    { name: 'Eleonora', grade: 90 },
    { name: 'Andrea', grade: 59 },
    { name: 'Elisabetta', grade: 72 },
];

const passedStudent = students.filter( student => student.grade >= 60 );
console.log(passedStudent);

const failedStudent = students.find( student => student.grade < 60 );
console.log(failedStudent);