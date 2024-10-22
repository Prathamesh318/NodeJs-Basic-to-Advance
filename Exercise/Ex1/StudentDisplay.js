

const { student, calculateAverage } = require('./StudentInfo');

function displayStudentDetails() {
    console.log("Student name", student.name);
     console.log("Registration no:", student.regNo);
     console.log("Personal wmail", student.emailPersonal);
    console.log("Official email", student.emailOfficial);
     console.log("Marks", student.marks);
    console.log("Average", calculateAverage());
}

displayStudentDetails();
