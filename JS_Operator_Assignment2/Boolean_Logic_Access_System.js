let doorlock = true;
let windowlock = true;
let alarmsystem = true;
let ownerpresent = true;

function checksecurity(){
    if(doorlock && windowlock && alarmsystem && ownerpresent){
        console.log("Building is secured successfully.");
    } else {
        console.log("Building is in Danger.");
    }
}

console.log(checksecurity());

ownerpresent = false;
console.log(checksecurity());
