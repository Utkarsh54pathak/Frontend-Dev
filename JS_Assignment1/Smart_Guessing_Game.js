//this is used to generate a random number between 1 and 50
let number = Math.floor(Math.random() * 50) + 1;

//Create a test guess
let userGuess = 24;

//Compare using nested if conditions
console.log("------ Smart Guessing Game ------");
console.log(`Secret Number: ${number}`);
console.log(`Your Guess: ${userGuess}`);

if (userGuess === number) {
    console.log("🎯 Correct guess!");
} else {
    if (userGuess >= number - 3 && userGuess <= number + 3) {
        console.log("⚡ Very close!");
    } else {
        if (userGuess > number) {
            console.log("📈 Too high!");
        } else {
            console.log("📉 Too low!");
        }
    }
}
