class Cart {
  constructor() {
    this.items = [];
    this.discount = 0;
  }

  addItem(name, price, quantity) {
    this.items.push({ name, price, quantity });
  }

  getTotal() {
    return this.items.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
  }

  applyCoupon(code) {
    const couponPattern = /^(SAVE|DISC)(\d{1,2})$/;

    const match = code.match(couponPattern);
    if (!match) {
      return "Invalid coupon format!";
    }

    const discountPercent = parseInt(match[2]);
    this.discount = discountPercent;

    return `Coupon applied: ${discountPercent}% off`;
  }

  getFinalTotal() {
    const total = this.getTotal();
    const discountAmount = (total * this.discount) / 100;
    return total - discountAmount;
  }
}

const cart = new Cart();
cart.addItem("Shoes", 1500, 1);
cart.addItem("T-Shirt", 500, 2);
cart.addItem("Bag", 1200, 1);

console.log("Cart Total:", cart.getTotal());
console.log(cart.applyCoupon("SAVE20"));
console.log("Final Total:", cart.getFinalTotal());
