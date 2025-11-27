// here we take the weather inputs 
let temperature = 22;
let isRaining = false;
let windSpeed = 10;

//here we create a variable to plan activity based on weather condition
let advice;

if(isRaining){
    advice = "Stay indoors with hot coffee.";
}else if(temperature > 35) {
    advice = "Go swimming.";
}else if (temperature < 15 && windSpeed > 20) {
    advice = "Too cold and windy — stay home";
}else if((temperature >= 15 && temperature <= 35) && windSpeed <= 20) {
    advice = "Weather is Good today";
}else{
    advice = "Perfect day for walk";
}

// Display the weather report
console.log("Weather Activity Planner : ");
console.log(`Temperature: ${temperature}`);
console.log(`Raining: ${isRaining ? "Yes" : "No"}`);
console.log(`Wind Speed: ${windSpeed} km/h`);
console.log(`Advice of the day : ${advice}`);
