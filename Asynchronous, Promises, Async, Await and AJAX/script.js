"use strict";
// const getCountryAndNeighbour = function (country) {
//   // AJAX  CALL country
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const data = JSON.parse(this.responseText);
//     console.log(data);

//     // Get neighbour country[2]
//     let neighbour = data.borders;

//     if (!neighbour) return;

//     // AJAX  CALL country 2
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener("load", function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);
//     });
//   });
// };
// getCountryAndNeighbour("india");

// Promise and fetch API

//-------------------------------------------//

// Consuming Promises
const request = fetch(`https://restcountries.com/v3.1/name/india`);
console.log(request);
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// };

// use Arow function

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => response.json())
//     .catch((err) => console.error(`${err}`));
// };
// getCountryData("portugal");

// The Event Loop in Practice
console.log("Test satrt");
setTimeout(() => console.log("0 sec timer"), 0);
Promise.resolve("Resolve Promise 1").then((res) => {
  console.log(res);
});

Promise.resolve("Resolve Promise 2").then((res) => {
  for (let i = 0; i < 100000000; i++) {}
  console.log(res);
});
console.log("Test end");

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lotter draw is happening");
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve("You WIN");
    } else {
      reject("You lost your money");
    }
  }, 2000);
});

lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

//   Promisefying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
wait(2)
  .then(() => {
    console.log("I waited for 2 seconds");
    return wait(1);
  })
  .then(() => console.log("I waited for 1 seconds"));
