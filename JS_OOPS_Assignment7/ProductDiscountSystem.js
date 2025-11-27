function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.applyDiscount = function(percent) {
    const discountAmount = (this.price * percent) / 100;
    const newPrice = this.price - discountAmount;
    return newPrice;
};

const p1 = new Product("Laptop", 50000);
const p2 = new Product("Headphones", 2000);
const p3 = new Product("Shoes", 1500);

console.log(p1.name, "New Price:", p1.applyDiscount(10));
console.log(p2.name, "New Price:", p2.applyDiscount(20));
console.log(p3.name, "New Price:", p3.applyDiscount(50));
