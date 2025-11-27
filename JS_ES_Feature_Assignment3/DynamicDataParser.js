"use strict";  
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

let validnumbers = [];
let invalidnumbers = [];

for (let i = 0; i < apiData.length; i++) {
    let value = apiData[i];
    let numvalue = Number(value);
    let boolvalue = Boolean(value);
    let strvalue = String(value);  
    console.log("current Value : ", value);
    console.log("number : ", numvalue);
    console.log("boolean : ", boolvalue);
    console.log("string : ", strvalue);

  if (isNaN(numvalue) || value === " " || value === "100px") {
    console.log("invalid number ", value);

    invalidnumbers.push(value);
  } else {
    validnumbers.push(numvalue);
  }
}

console.log("Dynamic Data Parsing Result");
console.log("Valid Numeric Values:");
console.log(validnumbers);
console.log("Invalid Numeric Inputs:");
console.log(invalidnumbers);