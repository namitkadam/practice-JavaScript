"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// function

console.log("Function");

function logger() {
  console.log("My name is Namit");
}
let obj = {};
for (let i = 0; i < str.length; i++) {
  let key = str.charAt(i);
  //   console.log(obj[key], key);
  if (obj[key]) {
    obj[key] = obj[key] + 1;
  } else {
    obj[key] = 1;
  }
}
console.log(obj);
//  calling / running / invoiking function

logger();
logger();
logger();

function frutiProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = ` juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = frutiProcessor(5, 0);
console.log(appleJuice);

console.log("");

//---------------------------------------- //

// Function Declarations vs. Expressions

console.log("Function Declarations vs. Expressions");

console.log("");

//---------------------------------------- //

// Function Declarations

console.log("Function Declarations");

// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);

// console.log(age1);

//---------------------------------------- //

// Function Expressions

console.log("Function Expressions");

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1992);

console.log(age2);

//---------------------------------------- //

// Arrow Functions

console.log("Arrow Function");

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// calculate retirement age

// const yearUntilRetirement = (birthYear) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// };
// console.log(yearUntilRetirement(1991));

// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} Retires in ${retirement} yeras.`;
// };
// console.log(yearUntilRetirement(1991, "Namit"));
// console.log(yearUntilRetirement(1985, "Raj"));

console.log();

//---------------------------------------- //

// Functions Calling Other Functions

console.log("Functions Calling Other Functions");

const cutPieces = function (fruit) {
  return fruit * 4;
};
const frutiProcessors = function (apples, oranges) {
  const applesPieces = cutPieces(apples);
  const orangesPieces = cutPieces(oranges);
  const juice = ` juice with ${applesPieces} Pieces of apple and ${orangesPieces} Pieces of orange.`;
  return juice;
};
console.log(frutiProcessors(2, 3));

//---------------------------------------- //
const calcAge1 = function (birthYear) {
  return 2037 - birthYear;
};

const yearUntilRetirement = function (birthYear, firstName) {
  const age = calcAge1(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} Retires in ${retirement} yeras.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retires `);
    return -1;
  }
};
console.log(yearUntilRetirement(1991, "Namit"));
console.log(yearUntilRetirement(1995, "Raj"));

console.log("");

//---------------------------------------- //

//Arrays//

console.log("Arrays");
const friend1 = "Namit";
const friend2 = "Steven";
const friend3 = "Peter";

console.log(friend1, friend2, friend3);

const friends = ["Namit", "Steven", "Peter"];
console.log(friends);

console.log(friends[1]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[0] = "jay";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

// Exercise

const calcAge4 = function (birthYear) {
  return 2037 - birthYear;
};
const yeras = [1990, 1967, 2002, 2010, 2018];

const age4 = calcAge4([0]);
const age5 = calcAge4([1]);
const age6 = calcAge4(yeras[yeras.length - 1]);
console.log(age4, age5, age6);

const ages = [
  calcAge4(yeras[0]),
  calcAge4(yeras[1]),
  calcAge4(yeras[yeras.length - 1]),
];
console.log(ages);

// Array Operations (Methods)

console.log("Array Operations (Methods)");

// push Methods
// add elements
console.log("push Methods");

const friends4 = ["Michael, Steven, Peter"];
friends4.push("Jay", "Raj");
console.log(friends4);

// unshift method
console.log("unshift method");
friends4.unshift("jay");
console.log(friends4);

// remove elements.
friends4.pop(); //last
const popped = friends4.pop();
console.log(popped);
console.log(friends4);

friends4.shift(); //first
console.log(friends4);

//  certain element
console.log(friends4.indexOf("Steven"));
console.log(friends4.indexOf("bob"));

console.log(friends4.includes("Steven"));
console.log(friends4.includes("bob"));

//---------------------------------------- //

// Introduction to Objects
console.log("Introduction to Objects");

const jonasArray = [
  "jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];
console.log(jonasArray);
const jonas1 = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas1);

//---------------------------------------- //

// Dot vs. Bracket Notation
console.log("Dot vs. Bracket Notation");

// using Dot notation

console.log("Dot notation");

console.log(jonas1.lastName);

// using Bracket Notation

console.log("Bracket Notation");

console.log(jonas1["lastName"]);

const namekey = "Name";
console.log(jonas1["first" + namekey]);
console.log(jonas1["last" + namekey]);

// const interestedIn = prompt(
//   "What do you want to know about Jonsa? Choose between firstName, lastName, age,job, and friends "
// );

// if (jonas1[interestedIn]) {
//   console.log(jonas1[interestedIn]);
// } else {
//   console.log(
//     "Wron request! Choose between firstName, lastName, age,job, and friends "
//   );
// }
jonas1.location = "Protugal";
jonas1["twitter"] = "@jonasschmedtman";
console.log(jonas1);

//----------------------------------------Challenge --------------------------------//

//'Jonas has 3 friends, and  his best friend is called Michael'.
console.log(
  `${jonas1.firstName} has ${jonas1.friends.length} friends, and his best friend is called ${jonas1.friends[0]}.`
);

// Object Methods

console.log("Object Methods");

const jonas2 = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  //   calcAge1: function () {
  //     // console.log(this);
  //     return 2037 - this.birthYear;
  //   },
  // };
  calcAge1: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge1()}-year old ${
      jonas2.job
    }, and has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};
console.log(jonas2.calcAge1(1991)); //  using Dot notation
// console.log(jonas2["calcAge1"](1991)); //using Bracket Notation

console.log(jonas2.calcAge1());

console.log(jonas2.age);

//----------------------------------------Challenge --------------------------------//

// Jonas is a 46 year old teacher, and he has a driver's license.
console.log(
  `${firstName} is a ${jonas2.age}-year old ${jonas2.job}, and has ${
    jonas2.hasDriversLicense ? "a" : "no"
  } driver's license`
);
console.log(jonas2.getSummary());

//----------------------------------------Challenge --------------------------------//

// Iteration: The for Loop

// So for loop keeps running, while condition is true.
console.log("for Loop");

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️`);
}

const jonas3 = [
  "jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
const types = [];

for (let i = 0; i < jonas3.length; i++) {
  console.log(jonas3[i], typeof jonas3[i]);

  // filling types
  types[i] = typeof jonas3[i];
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const age = [];

for (let i = 0; i < years.length; i++) {
  age.push(2037 - years[i]);
}
console.log(age);

// continue and break

console.log("continue and break");

// continue statement

const jonas4 = [
  "jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

for (let i = 0; i < jonas4.length; i++) {
  if (typeof jonas4[i] !== "string") continue;
  console.log(jonas4[i], typeof jonas4[1]);
}

// Backwards and Loops in Loops

console.log("Backwards and Loops in Loops");

const jonas5 = [
  "jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
for (let i = jonas5.length - 1; i >= 0; i--) {
  console.log(i, jonas5[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`-----Starting exercise ${exercise}`);
  for (let rep = 1; rep < 4; rep++) {
    console.log(`Lifting weight repetition${rep}`);
  }
}

// while Loop

console.log(" while Loop");
let rep = 1;
while (rep <= 5) {
  console.log(`Lifting weight repetition${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`loop is about to end`);
}
