"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

for (let i = 0; i < employees.length; i++) {
    try {
        let emp = employees[i];
        if (!emp.name || !emp.salary || !emp.years) {
            throw new Error("Missing employee property.");
        }
        let salary = Number(emp.salary);
        let years = Number(emp.years);
        if (isNaN(salary) || isNaN(years)) {
            throw new Error(`Invalid numeric conversion for ${emp.name}`);
        }
        let bonus = (years > 3) ? salary * 0.10 : salary * 0.05;
        let finalSalary = salary + bonus;
        console.log(`
            Employee: ${emp.name}
            Base Salary: ₹${salary}
            Years of Service: ${years}
            Bonus Earned: ₹${bonus}
            Final Salary: ₹${finalSalary}
        `);

    } catch (error) {
        console.log(`Error with employee record: ${error.message}`);
    }
}

console.log("Employee bonus calculation completed.");
