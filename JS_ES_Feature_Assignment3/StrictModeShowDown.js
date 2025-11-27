"use strict";

function demo(a, b) {
    let total = 10;
    let obj = { value: total };
    delete obj.value;
    console.log("Function parameters:", a, b);
    console.log("Delete successful on object property.");
}

demo(5, 10);
