// Parent constructor
function Person(name) {
    this.name = name;
}

// Method in Person prototype
Person.prototype.showName = function() {
    console.log("Name: " + this.name);
};

// Child constructor
function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

// Inherit prototype from Person
Student.prototype = Object.create(Person.prototype);

// Fix constructor reference
Student.prototype.constructor = Student;

// Add method in Student prototype
Student.prototype.showBranch = function() {
    console.log("Branch: " + this.branch);
};

// Creating object
const s1 = new Student("Shiv", "CSE");

// Calling methods
s1.showName();
s1.showBranch();
