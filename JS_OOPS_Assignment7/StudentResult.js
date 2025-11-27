class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        const total = this.marks.reduce((sum, m) => sum + m, 0);
        return total / this.marks.length;
    }

    getGrade() {
        const avg = this.calculateAverage();

        if (avg >= 90) return "A";
        if (avg >= 75) return "B";
        if (avg >= 60) return "C";
        return "F";
    }
}
const s1 = new Student("Shiv", [95, 88, 92, 90]);
const s2 = new Student("Aman", [78, 74, 80, 70]);
const s3 = new Student("Riya", [50, 65, 55, 60]);
console.log(s1.name, "Average:", s1.calculateAverage(), "Grade:", s1.getGrade());
console.log(s2.name, "Average:", s2.calculateAverage(), "Grade:", s2.getGrade());
console.log(s3.name, "Average:", s3.calculateAverage(), "Grade:", s3.getGrade());
