// First Part is to boil the water
function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Boiling water...");
            if (Math.random() < 0.2) return reject("Failed to boil water!");
            resolve("Water boiled");
        }, 1000);
    });
}

// Second step is to mix the coffee
function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Brewing coffee...");
            if (Math.random() < 0.2) return reject("Coffee brewing failed!");
            resolve("Coffee brewed");
        }, 1200);
    });
}

// third step is to Take the coffee for drink in a cup
function pourCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Pouring coffee into cup...");
            if (Math.random() < 0.2) return reject("Failed to pour coffee!");
            resolve("Coffee poured");
        }, 1000);
    });
}

// Full Coffee Making Process using Promise Chaining
boilWater()
    .then(result => {
        console.log(result);
        return brewCoffee();
    })
    .then(result => {
        console.log(result);
        return pourCoffee();
    })
    .then(result => {
        console.log(result);
        console.log("☕ Coffee ready for the team!");
    })
    .catch(error => {
        console.log("❌ Process stopped:", error);
    });
