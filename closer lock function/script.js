"use strict";

const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123", 2);

//  How Passing Arguments Works: Value vs. Reference

const flight = "LH234";
const jonas = {
  name: "namit kadma",
  passport: 123456789,
};

const checkIn = function (flightNum, Passenger) {
  flightNum = "LH999";
  Passenger.name = "Mr." + Passenger.name;
  if (Passenger.passport === 123456789) {
    alert("Checked in");
  } else {
    alert("Wrong Passport");
  }
};

// checkIn(flight, jonas);
// console.log(flight, jonas);

const newpassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};
newpassport(jonas);
checkIn(flight, jonas);

// Functions Accepting Callback Functions

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const UpperFirstWord = function (str) {
  const [first, ...other] = str.split(" ");
  return [first.toUpperCase(), ...other].join(" ");
};

// Heigher-order function
const transformer = function (str, fn) {
  console.log(`Original String:${str}`);
  console.log(`Transformed String:${fn(str)}`);

  console.log(`Transformed by:${fn.name}`);
};

transformer("javasript is the best!", UpperFirstWord);
transformer("javasript is the best!", oneWord);

const high5 = function () {
  console.log("🙋‍♂️");
};
document.body.addEventListener("click", high5);
["Namit", "Jonas", "Martha"].forEach(high5);

// Function Return Function

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}${name}`);
  };
};

const greeterHey = greet("Hey ");
greeterHey("Jonas");
greeterHey("Namit");

greet("Hello ")("Namit");

// Arrow Function

const greetArr = (greeting) => (name) => console.log(`${greeting}${name}`);

greetArr("hi")("Namit");

// The call and apply Methods

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  booking: [],

  //  book:function(){}
  book(flightNum1, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum1}`
    );

    this.booking.push({ flight: `${this.iataCode} ${flightNum1}`, name });
  },
};

lufthansa.book(239, "namit kadam");
console.log(lufthansa);

const eurowing = {
  airline: "Eurowing",
  iataCode: "EW",
  booking: [],
};

const book = lufthansa.book;

// book(23, "Sarah Williams");

// call method

book.call(eurowing, 23, "Sarah Williams");
console.log(eurowing);

book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  booking: [],
};

book.call(swiss, 583, "Mary Cooper");
console.log(swiss);

// Apply method
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// bind method

const bookEW = book.bind(eurowing);
const bookLH = book.bind(lufthansa);
bookEW(23, "namit kadam");

const bookEW23 = book.bind(eurowing, 23);
bookLH(" namit kadam");
bookEW(" navin kadam");

// with even Listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane);

// Partia; application

const addTax = (rate, vlaue) => vlaue + vlaue * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);

console.log(addVat(100));
console.log(addVat(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVat2 = addTaxRate(0.23);

console.log(addVat(100));
console.log(addVat(23));

// Immediately Invoked Function Expressions (IIFE)
const runOnce = function () {
  console.log("This will never run again");
};
runOnce();

// IIFE
(function () {
  console.log("This will never run again");
  const isPrivate = 23;
})();
// console.log(isPrivate);

(() => console.log("This will never run again"))();

// Closures

const secureBooking = function () {
  let PassengerCount = 0;
  return function () {
    PassengerCount++;
    console.log(`${PassengerCount}passengers`);
  };
};
const booker = secureBooking();
booker();
booker();
booker();

// More Closure Examples

// Example1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
console.dir(f);

// Re-assigning f function

h();
f();

// Example2
const boardpassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`Ther are 3 group, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} second`);
};

boardpassengers(180, 3);
