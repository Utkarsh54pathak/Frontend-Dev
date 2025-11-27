// Constructor function
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Adding method to prototype
Car.prototype.getDetails = function() {
    console.log("Brand: " + this.brand + ", Model: " + this.model);
};

// Creating objects
const car1 = new Car("Toyota", "Fortuner");
const car2 = new Car("Honda", "City");

// Calling shared prototype method
car1.getDetails();
car2.getDetails();
