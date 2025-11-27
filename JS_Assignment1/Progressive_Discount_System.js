//here we take total purchase amount
let amount = 7200;

// create a variable for discount percentage
let discountPercent;

if(amount >= 10000){
    discountPercent = 25;
}else if(amount >= 5000) {
    discountPercent = 15;
}else if(amount >= 2000) {
    discountPercent = 5;
}else{
    discountPercent = 0;
}

// calculate discount and final price
let discountAmount = (amount * discountPercent) / 100;
let finalPrice = amount - discountAmount;

// round the values using Math.round()
totalPurchase = Math.round(amount);
discountAmount = Math.round(discountAmount);
finalPrice = Math.round(finalPrice);

// Display results
console.log("Progressive Discount Summary : ");
console.log(`Original Total: ${totalPurchase}`);
console.log(`Discount Applied: ${discountPercent}%`);
console.log(`Discount Amount: ${discountAmount}`);
console.log(`Final Price After Discount: ${finalPrice}`);
