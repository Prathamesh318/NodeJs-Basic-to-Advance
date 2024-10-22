const student = {
    name: "Prathamesh",
    regNo: "123",
    emailPersonal: "prathmv31.08@gmail@.com",
    emailOfficial: "prathamv31@school.edu",
    marks: {
        math: 99,
        science: 98,
        english: 84
    }
};

function calculateAverage() {
    const marks = Object.values(student.marks);
    const totalMarks = marks.reduce((acc, mark) => acc + mark, 0);
    return totalMarks / marks.length;
}

module.exports = {
    student,
    calculateAverage
};
