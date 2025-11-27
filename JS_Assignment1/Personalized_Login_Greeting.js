// here wwe give the name of the user
let name = "Shiv";

// this is used to find the current hour of the time
let hour = new Date().getHours();

// this is to initialize the message variable
let greeting;

// checking and creating the message according to the time and store it in greeting variable
if(hour < 12){
    greeting = `Good Morning ${name}`;
}else if(hour >= 12 && hour < 17){
    greeting = `Good AfterNoon ${name}`;
}else{
    greeting = `Good Evening ${name}`;
}

// here we print greeting message on console
console.log(greeting);