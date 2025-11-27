let count = 0;

function increment() {
    function update() {
        count = count + 1;
    }
    update();
    console.log("increment in count : ", count);
}

function decrement() {
    function update() {
        count = count - 1;
    }

    update();
    console.log("decrement in count :", count);
}

console.log("Different Cclick Events : ");

increment();
increment();
decrement();
increment();
decrement();
decrement();
