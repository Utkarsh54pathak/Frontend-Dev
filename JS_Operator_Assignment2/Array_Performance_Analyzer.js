let marks = Array.from({length : 8}, () => {
    return Math.floor(Math.random()*71) + 30;
});

console.log("marks : ",marks);

let maxnum = Math.max(...marks);
let minnum = Math.min(...marks);

let avgmarks = marks.reduce((sum,value) => {sum + value, 0}) / marks.length;

let passstudent = marks.filter(marks => marks >= 50).length;

let resultofstudents = `
marks = ${marks}
Max marks = ${maxnum}
Min marks = ${minnum}
Avg marks = ${avgmarks}
passed students = ${passstudent}
`;

console.log(resultofstudents);