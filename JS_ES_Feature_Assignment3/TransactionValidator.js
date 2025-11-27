"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

let validTransactions = [];
let invalidTransactions = [];

for (let i = 0; i < transactions.length; i++) {
    try {
        let tx = transactions[i];
        if (tx === null) {
            throw new Error("Null transaction entry detected.");
        }
      
        if (tx.id === undefined || tx.amount === undefined) {
            throw new Error(`Missing required data for transaction at index ${i}.`);
        }
      
        if (tx.amount < 0) {
            throw new Error(`Negative transaction amount for ID ${tx.id}.`);
        }
        validTransactions.push(tx);
      
    }catch (error) {
        invalidTransactions.push({
            index: i,
            error: error.message,
            transaction: transactions[i]
        });
    }
}

console.log("Transaction Validation Report");
console.log("Valid Transactions:", validTransactions);
console.log("\nInvalid Transactions:", invalidTransactions);
console.log(`Total Successful: ${validTransactions.length}`);
console.log(`Total Failed:     ${invalidTransactions.length}`);