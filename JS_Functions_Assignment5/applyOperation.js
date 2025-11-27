// main function
function applyOperation(numbers, operation) {
    let res = [];
    for (let num of numbers) {
        res.push(operation(num));
    }
    return res;
}

// callback function
function double(num) {
    return num * 2;
}

// callback function
function square(num) {
    return num * num;
}

// call the function
let nums = [1, 2, 3, 4];

console.log("Doubled:", applyOperation(nums, double));
console.log("Squared:", applyOperation(nums, square));