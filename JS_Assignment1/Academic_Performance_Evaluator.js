// here we take the marks of 5 subjects (out of 100) scored by a student
let marks = [88, 76, 92, 81, 69]; 

// here we calculate total marks and their percentage
let total = 0;
for (let i = 0; i < marks.length; i++) {
    total += marks[i];
}
let percentage = (total / (marks.length * 100)) * 100;
let average = total / marks.length;

// here we create a variable result to store the Performance of Student
let result;

if(percentage >= 85) {
    result = "Promoted with Distinction";
}else if(percentage >= 50 && percentage < 85) {
    result = "Promoted";
}else{
    result = "Detained";
}

// Show the result of the student
console.log("Academic Performance Report : ");
console.log(`Marks: ${marks.join(", ")}`);
console.log(`Total: ${total}`);
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);
console.log(`Result: ${result}`);
