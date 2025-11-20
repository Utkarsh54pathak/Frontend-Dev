// function Animal(name){
//     this.name = name;
// }
// Animal.prototype.eat = function(){
//     console.log(`${this.name} is eating`);
// };

// function Dog(name,breed){
//     Animal.call(this, name);
//     this.breed= breed;
// }
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.bark = function(){
//     console.log(`${this.name} is barking`);

// };
// const dog1 = new Dog("tommy","labrador");
// dog1.eat();
// dog1.bark();

// console.log("A");
// setTimeout(() => {
//     console.log("B");
// },0);
// console.log("C");


// const API_URL = "https://jsonplaceholder.typicode.com/posts";

// function getPosts() {
//     fetch(API_URL)
//     .then(response => response.json())
//     .then(data => {})
// }

// const myPromise = new Promise((resolve, reject)=> {
//     let success = true;
//     if(success){
//         resolve("Task completed Successfully");
//     } else {
//         reject("Something went wrong")
//     }
//     });

//     myPromise
//     .then(result => console.log(result))
//     .catch(error => console.log(error))
//     .finally(() => console.log("Promise Finished"))


// function addNumbers(a, b) {
//     return new Promise((resolve, reject) => {
//         if (typeof a !== "number" || typeof b !== "number") {
//             reject("Both inputs must be numbers!");
//         } else {
//             resolve(a + b);
//         }
//     });
// }

// addNumbers(5, 1234567890)
//     .then(result => {
//         console.log("Result:", result); 
//     })
//     .catch(error => {
//         console.error("Error:", error);
//     });


// const API_URL = "https://jsonplaceholder.typicode.com/posts";

// async function getData() {
//   try {
//     const response = await fetch(API_URL);
//     const data = await response.json();
//     console.log("Fetched Data:", data);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// getData();

// console.log("Fetching random user data...");
// async function getRandomUser() {
// try {
// const response = await fetch("https://randomuser.me/api/");
// const data = await response.json();
// const user = data.results[0];
// console.log("Name:", `${user.name.first} ${user.name.last}`);
// console.log("Email:", user.email);
// console.log("Country:", user.location.country);
// } catch (error) {
// console.log("Error fetching data:", error);
// } finally {
// console.log("Request completed.");
// }
// }
// getRandomUser();

// const myPromise = new Promise((resolve, reject) => {
// let success = fetch("https://randomuser.me/api/");
// const data = success.json();
// const user = data.results[0];
// console.log("Name:", `${user.name.first} ${user.name.last}`);
// console.log("Email:", user.email);
// console.log("Country:", user.location.country);
// if (success) {
// resolve("Task completed successfully!",success);
// } else {
// reject("Something went wrong!");
// }

// });
// myPromise
// .then(result => console.log(result)) // runs if resolved
// .catch(error => console.log(error)) // runs if rejected
// .finally(() => console.log("Promise finished."));
