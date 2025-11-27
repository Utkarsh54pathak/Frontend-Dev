class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance === undefined || this.distance < 0) {
            throw new Error("Invalid distance! Distance must be a positive number.");
        }

        const pricePerKm = 12;
        return this.distance * pricePerKm;
    }
}

try {
    const driver = new Driver("Rohit", 4.8, "Maruti Swift");
    const trip = new Trip("Delhi", "Noida", 15);

    console.log("Driver:", driver.name, "| Vehicle:", driver.vehicle);
    const fare = trip.calculateFare();
    console.log("Fare for the trip:", fare);

} catch (error) {
    console.log("Error:", error.message);
}

try {
    const badTrip = new Trip("Mumbai", "Pune", -10);
    badTrip.calculateFare();
} catch (error) {
    console.log("Error:", error.message);
}
