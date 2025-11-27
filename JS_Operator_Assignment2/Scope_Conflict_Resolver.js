// these variables scope is global so they are accesible everywhere in this file
let rate = 5;
let Amount;


function calculateAmount(pendingPayment){
    // these variable scope is only function level. these are not accessible outside this function
    let principle = 4000;
    let interest;
    if(pendingPayment == true){
        interest = (principle * rate)/100;
    }

    console.log(principle + interest);
}


calculateAmount(true);
// this show that global variable Amount is unchnaged after being used by the function
console.log(Amount);