"use strict";

function outer() {
  let count = 5;
  console.log(count);

  const inner = () => {
    let count = 10;
    console.log(count);
  };

  inner();
}

outer();
