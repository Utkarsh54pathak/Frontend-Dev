// here create array for 5 categories of expenses
let expenses = [5000, 1200, 8000, 2500, 1800]; 
// [food, travel, rent, bills, leisure]

// here we calculate the total expenses using for loop
let total = 0;
for (let i = 0; i < expenses.length; i++) {
    total += expenses[i];
}

// here we calculate the average monthly expense
let average = total / expenses.length;

// here we add 10% tax to the total by using assignment operator
let tax = total * 0.10;
total += tax;

// this is ued to format numbers to 2 decimal places
let totalFormatted = total.toFixed(2);
let averageFormatted = average.toFixed(2);
let taxFormatted = tax.toFixed(2);

// here we show all results
console.log("Monthly Expense Summary ==>>");
console.log(`Total Expenses: ${(total - tax).toFixed(2)}`);
console.log(`Apply 10% Tax: ${taxFormatted}`);
console.log(`Final Total: ${totalFormatted}`);
console.log(`Average Expense: ${averageFormatted}`);
