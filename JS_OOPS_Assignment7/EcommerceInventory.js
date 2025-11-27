const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 5 },
    { id: 2, name: "Mouse", category: "Electronics", price: 800, stock: 50 },
    { id: 3, name: "Shoes", category: "Fashion", price: 1500, stock: 2 },
    { id: 4, name: "T-Shirt", category: "Fashion", price: 600, stock: 25 },
    { id: 5, name: "Coffee Mug", category: "Home", price: 300, stock: 3 }
];


function getLowStockProducts(products) {
    return products.filter(p => p.stock < 5);
}

function sortProductsByPrice(products) {
    return products.slice().sort((a, b) => a.price - b.price); 
}

function calculateTotalInventoryValue(products) {
    return products.reduce((total, p) => total + (p.price * p.stock), 0);
}


function groupByCategory(products) {
    return products.reduce((group, p) => {
        if (!group[p.category]) {
            group[p.category] = [];
        }
        group[p.category].push(p);
        return group;
    }, {});
}

console.log("Low Stock Products:", getLowStockProducts(products));
console.log("Products Sorted by Price:", sortProductsByPrice(products));
console.log("Total Inventory Value:", calculateTotalInventoryValue(products));
console.log("Grouped by Category:", groupByCategory(products));
