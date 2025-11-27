class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        const bonusAmount = (this.salary * percent) / 100;
        this.salary += bonusAmount;
    }
}

const employees = [
    new Employee(1, "Shiv Kumar", "IT", 30000),
    new Employee(2, "Aarav", "Finance", 45000),
    new Employee(3, "Mohan", "HR", 28000),
    new Employee(4, "Riya", "Marketing", 35000),
    new Employee(5, "Anjali", "Sales", 40000)
];

employees.forEach(emp => emp.applyBonus(10));
employees.forEach(emp => {
    console.log(`Employee: ${emp.name}, Annual Salary: ${emp.getAnnualSalary()}`);
});

const totalAnnualPayout = employees.reduce((total, emp) => {return total + emp.getAnnualSalary();}, 0);
console.log("Total Annual Company Payout:", totalAnnualPayout);
