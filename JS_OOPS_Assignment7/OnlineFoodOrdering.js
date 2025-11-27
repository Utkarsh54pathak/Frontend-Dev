// Menu with prices
const menu = {
    burger: 120,
    pizza: 250,
    pasta: 180,
    coffee: 90,
    fries: 70
};

function calculateBill(orderItems) {
    try {
        const prices = orderItems.map(item => {
            if (!menu[item]) {
                throw new Error(`Invalid item ordered: ${item}`);
            }
            return menu[item];
        });

        const total = prices.reduce((sum, price) => sum + price, 0);

        console.log("Order Items:", orderItems);
        console.log("Prices:", prices);
        console.log("Total Bill: ₹" + total);

        return total;

    } catch (err) {
        console.log("Error:", err.message);
    }
}

calculateBill(["burger", "fries", "coffee"]);
calculateBill(["pizza", "pasta", "icecream"]);
