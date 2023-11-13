// // let js = "amazing";
// // if (js === "amazing") alert("javaScript is fun!");
// // console.log(40 + 20 - 20 - 10 * 2);
// // let firstName = "Namit";
// // let lastName = "Kadam";
// // let fullName = firstName + lastName;
// // console.log(fullName);
// let namit = true;
// console.log(typeof namit);
// // console.log(namit);
// namit = "20";
// console.log(typeof namit);
// namit = 20;
// console.log(typeof namit);
// let year;
// console.log(year);
// console.log(typeof year);

// console.log(typeof null);
// var job = 1;
// job = 2;
// job = "22";
// job;
// console.log(job);

// let firstName = "namit";
// let lastName = "kadam";
// console.log(firstName + " " + lastName);

// let x = 10 + 5;
// x += 10;
// console.log(x);
// let a, b;
// a = b = 25 - 10 - 5;
// console.log(a, b);

// const now = 2023;
// const namitAge = now - 1997;
// const navinAge = now - 1996;
// console.log(now - 1997 < now - 1996);
// let averageAge = namitAge + navinAge / 2;
// console.log(namitAge, navinAge, averageAge  );

const firstName = "jonas";
const job = "Teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);
// OR
// Template literals
// use backtick
const jonasnew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasnew);
// Multiple String
console.log(`String with \n\
Multiple\n\
Lines`);
// Template literals
console.log(`String with
Multiple
Lines`);

// regular string use backtick
console.log(`I'm jonas, a 46 year old Teacher!
`);

// if /else statements
const age = 17;

if (age >= 18) {
  console.log("sarah con start driving License 🚗");
} else {
  const yearLeft = 18 - age;
  console.log(`sarah is too young. Wait aonther years: ${yearLeft}`);
}

const Yearbirth = 2001;
let century;
if (Yearbirth <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// Type Conversion and Coercion

// Type Conversion
const inputyear = "1991";
// String to Number
console.log(Number(inputyear), inputyear);
console.log(Number(inputyear) + 18);
// Number to String
console.log(Number("jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coercion

console.log("i am " + 23 + " years old");
console.log("23" + "10" + 3);
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" / "2");

// Guess THE Output
let n = "1" + 1; //11
n = n - 1; //11-1
console.log(n);

// Truthy and Falsy Values

// Falsy Values: 0, "", Undefined, null, NaN.

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean("Jonas")); //true
console.log(Boolean({})); //true
console.log(Boolean("")); //false

const money = 0;
if (money) {
  console.log("Don't spend if all");
} else {
  console.log("You should get a job");
} //false

// Undefined
let height;
if (height) {
  console.log("YAY! Height is defind");
} else {
  console.log("Height is Undefined");
}

// Equality Operators: == vs. ===

console.log("Equality Operators: == vs. ===");

const a = 18;
if (a === 18) console.log("you just become a adult:D(strict)");
if (a == 18) console.log("you just become a adult:D(loose)");

// const fovourite = Number(prompt("What's your fovourite number?"));
// console.log(fovourite);
// console.log(typeof fovourite);

// if (fovourite === 23) {
//   //22 === 23 -> fales
//   console.log("cool! 23 is an amzaing number!");
// } else if (fovourite === 7) {
//   console.log("7 is also a cool number");
// } else if (fovourite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("number is not 23 or 7or 9");
// }
// if (fovourite !== 23) console.log("why not 23?");

//  Boolean Logic

// AND &&, OR ||, NOT !

const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("sarah is able to drive");
// } else {
//   console.log("Someone else should drive");
// }

const istired = false; //c
console.log(hasDriversLicense && hasGoodVision && istired);

if (hasDriversLicense && hasGoodVision && !istired) {
  console.log("sarah is able to drive");
} else {
  console.log("Someone else should drive");
}

// ------------------------------------------------------------

//The switch Statement

console.log("switch Statement");

const day = "saturday";

// switch (day)
// {
//   case "monday": //day === monday
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuseday":
//     console.log("prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record Videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend ");
//   default:
//     console.log("not a valid day");
// }

//use of if /else
if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuseday") {
  console.log("prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record Videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend ");
} else {
  console.log("not a valid day");
}
// Statements and Expressions]
// true && false && !false Expressions

//The Conditional (Ternary) Operator
console.log("Conditional (Ternary) Operator");
const age1 = 16;
// age1 >= 18
//   ? console.log("I like to drink wine 🍷")
//   : console.log("I like to drink water 💧");

//   first
const drink = age1 >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);
// second
const age3 = 18;
let drink2;
if (age3 >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = " water 💧";
}
console.log(drink2);

// Template Literals

console.log("Template Literals");

console.log(`I like to drink ${age3 >= 18 ? "wine 🍷" : "water 💧"}`);
