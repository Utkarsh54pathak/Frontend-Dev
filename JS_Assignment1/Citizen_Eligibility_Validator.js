//here we take user age and citizenship status
let age = 19;
let isCitizen = true;

console.log("Citizen Eligibility Validator : ");
console.log(`Age: ${age}`);
console.log(`Citizen: ${isCitizen ? "Yes" : "No"}`);

// here we checking the different possible conditions
if(age >= 18) {
    if(isCitizen) {
        if(age >= 21) {
            console.log("Eligible for all services.");
        }else {
            console.log("Eligible to vote only.");
        }
    }else{
        console.log("Only age criteria met.");
    }
}else {
    console.log("Not eligible yet.");
}
