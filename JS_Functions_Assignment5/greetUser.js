// main function
function greetUser(name, callback){
    console.log(`Hello ${name}`);
    callback();
}

// Call Back Function
function showEndMessage(){
    console.log("Welcome to the course!");
}

// here we call the function
greetUser("Shiv", showEndMessage);