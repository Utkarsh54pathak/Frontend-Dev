let product = "realme 8 plus pro version";

let name = product.trim();

name = name.toLowerCase();

name = name.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

name = name.replace("Pro", "Pro Edition");

console.log("First name : ", name);
console.log("Length : ", name.length);