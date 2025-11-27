class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(percent) {
    if (typeof percent !== 'number' || percent < 0) {
      throw new Error('Discount percent must be a non-negative number');
    }
    const discountAmount = (this.price * percent) / 100;
    this.price = parseFloat((this.price - discountAmount).toFixed(2));
  }

  displayDetails() {
    return `Product [ID: ${this.id}] - ${this.name}, Category: ${this.category} , Price: ₹${this.price}`;
  }
}

const products = [
  new Product(1, 'Wireless Headphones', 2499.00, 'Electronics'),
  new Product(2, 'Coffee Mug', 399.00, 'Home & Kitchen'),
  new Product(3, 'Gaming Keyboard', 3199.50, 'Electronics'),
  new Product(4, 'Notebook', 149.00, 'Stationery'),
  new Product(5, 'Smartphone', 19999.00, 'Electronics')
];

const keyboard = products.find(p => p.id === 3);
if (keyboard) {
  console.log('Before discount:', keyboard.displayDetails());
  keyboard.applyDiscount(10);
  console.log('After 10% discount:', keyboard.displayDetails());
}

const expensiveProducts = products.filter(p => p.price > 1000);

console.log('\nProducts with price > 1000:');
expensiveProducts.forEach(p => console.log(p.displayDetails()));
