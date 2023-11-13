const weekdays = ["mon", "tue", "wed", "thu", "fir", "sat", "sun"];
const openingHours = {
  // Enhanced Object Literals
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, //Open 24 Hours
    close: 24,
  },
};

const restaurant = {
  name: "Calssico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 enhanced object literals
  openingHours,

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex] ];
  // },
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex, mainIndex, time, addres }) {
    console.log(
      `order received!${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}will be deliveryed to ${addres} at ${time} `
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1} ${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIng, ...othersIng) {
    console.log(mainIng);
    console.log(othersIng);
  },
};

restaurant.orderDelivery({
  time: "22:30",
  addres: "via del sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restaurantNmae,
  openingHours: Hours,
  categories: tags,
} = restaurant;
console.log(restaurantNmae, Hours, tags);

// destructuring objects

//  Default Values
/**
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

// Mutating variables
let a = 111;
let b = 999;
const abj = { a: 23, b: 7, c: 14 };

({ a, b } = abj);

console.log(a, b);
 */
// Nasted objects

// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

/** Destructuring Arrays
//Destructuring Arrays 
const arr = [2, 3, 4];
const a = [0];
const b = [1];
const c = [2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main = secondary] = [(secondary = main)];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 1);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default Values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/

//--------------------------------------------------------//
/** 
// Rest Pattern and Parameters

// 1) Destructuring

// SPREAD because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
const [pizza, , risotto, ...othersFood] = [
  ...restaurant.mainMenu,
  restaurant.starterMenu,
];

console.log(pizza, risotto, othersFood);

// Object

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) function

const add = function (...number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) sum += number[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [20, 3, 4];
add(...x);
restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");

*/
// -------------------------------------------------------//

/** The Spread Operator (...)

// The Spread Operator (...)

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// =----------------------------------------------//
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

// add new Arrey
const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Copy arrays
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Joni 2 arrays
const menus = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menus);

// Iterables: arrays, String, Maps sets. NOT Object
const str = "Jonas";
const letters = [...str, "", "s."];
console.log(letters);
console.log(str);
console.log(...str);

// Real-world example
const ingredients = [
  // prompt("let's make pasta! Ingredients 1?"),
  // prompt("Ingredients 2"),
  // prompt("Ingredients 3"),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

// Object

const newRestaurant = {
  foundedIn: 1998,
  ...restaurant,
  founder: "Guiseppe",
};
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);
 */
/**

// Short Circuiting (&& and ||)
console.log("---- OR ----");
// USE ANY data type, return ANY data type, short-circuiting

console.log(3 || "jonas");
console.log("" || "jonas");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "hello" || 23 || null);

restaurant.newGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.newGuests || 10;
console.log(guests2);

console.log("----AND----");

console.log(0 && "Jonas");
console.log(8 && "Jonas");

console.log("Hello" && 23 && null && "jonas");

if (restaurant.orderPizza) {
  restaurant.orderPasta("mushrooms", "onion", "olives");
}
restaurant.orderPizza &&
  restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
  
*/

// The Nullish Coalescing Operator (??)

restaurant.newGuests = 23;
const guests = restaurant.newGuests || 10;
console.log(guests);

// Nullish: null and undefined (NOT 0 or "")

const guestCorrect = restaurant.newGuests ?? 10;
console.log(guestCorrect);

// Logical Assignment Operators

const rest1 = {
  name: "Capri",
  // numGuests:20
  numGuests: 0,
};

const rest2 = {
  name: "La piazza",
  owner: "namit",
};

// or assignment Operator
rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;
console.log(rest1);
console.log(rest2);
// Nullish assignment Operator(null,undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest1.owner = rest1.owner && "<navin>";
rest2.owner = rest2.owner && "<navin>";

console.log(rest1);
console.log(rest2);

//  Looping Arrays: The for-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  // console.log(item);
  console.log(`${item[0] + 1}:${item[1]}`);
}
console.log([...menu.entries()]);

// Optional Chaining (?.)

if (restaurant.openingHours && restaurant.openingHours.mom)
  console.log(restaurant.openingHours.mom.open);

// WITH optional chaining.

console.log(restaurant.openingHours.mom?.open);
console.log(restaurant.openingHours?.mom?.close);
// Exp.
const days = ["mon", "tue", "wed", "thu", "fir", "sat", "sun"];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "close";
  console.log(`on ${day}, We open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? "Methods does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Methods does not exist");

// Array
const users = [{ name: "jonas", email: "hey@123.io" }];

console.log(users[0]?.name ?? "user array empty");

if (users.length > 0) console.log(users[0].name);
else console.log("user array empty");

// Looping Objects: Object Keys, Values, and Entries

const properties = Object.keys(openingHours);
console.log(properties);

console.log(`we are open on ${properties.length} days.`);

let openStr = `we are open on ${properties.length} days.`;

for (const day of properties) {
  openStr += ` ${day}, `;
}
console.log(openStr);

// Property VALUE

const value = Object.values(openingHours);
console.log(value);

// entries Object
const entries = Object.entries(openingHours);
console.log(entries);

// [key,value]
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// SETS

const ordersSet = new Set([
  "pasta",
  "pizza",
  "pizza",
  "Risotto",
  "pasta",
  "pizza",
]);
console.log(ordersSet);

console.log(new Set("namit"));
// Size Method
console.log(ordersSet.size);
console.log(ordersSet.has("pizza"));
console.log(ordersSet.has("Bread"));

// add to Method
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
console.log(ordersSet);

// Delete to Method
ordersSet.delete("Risotto");
console.log(ordersSet);

// clear Method

// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
console.log(staff);
const staffUnique = new Set(staff);
console.log(staffUnique);

console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);

// Maps: Fundamentals

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed:(");
console.log(rest.get("name"));
// console.log(rest.get(true));
console.log(rest.get(1));

const time = 0;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
// rest.clear();

const arr = [1, 2];
rest.set(arr, "Test");
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

// Maps: Iteration

const question = new Map([
  ["question", "What is the bets programming language in the world?"],
  [1, "c"],
  [2, "Java"],
  [3, "JavaScript"],
  ["Correct", 3],
  [true, "Correct🎉3"],
  [false, "Try again!"],
]);
console.log(question);

// Convert Object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answwer ${key}:${value}`);
}
const answer = Number(prompt("Your answer"));
console.log(answer);

console.log(question.get(question.get("Correct") === answer));

// convert map to array
console.log([]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

// -----------------------------------------------------------------//

// Working With Strings - Part 1
const airline = "TAP Air Protugal";
const plane = "A320";

console.log(airline.toUpperCase());
console.log(airline.toLowerCase());

// fix the capitalization in name
const passenger = "Namit";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing Email
const email = "namitkadam.in";
const loginEmail = " Namitkadma.in";

const normalEmail = loginEmail.toLowerCase().trim(1);

console.log(normalEmail);

// replacing
const priceGB = "288,97@";
const priceus = priceGB.replace("@", "$").replace(",", ".");
console.log(priceus);

const announcement =
  "All passenger come to boarding door 23. Boarding door 23!";
console.log(announcement.replace("door", "gate"));

console.log(announcement.replace(/door/g, "gate"));

// Booleans
const planes = "A320neo";
console.log(planes.includes("A320"));
console.log(planes.includes("Boelin"));

// Practic exercise

const checkBaggage = function (item) {
  const baggage = item.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board");
  } else {
    console.log("Welcome a board");
  }
};
checkBaggage("knife");
checkBaggage("Socks and camera");
checkBaggage("Gun");

// -----------------------------------------------------------------//

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);

console.log(airline.length);
console.log("B7373".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Protugal"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddlesat = function (seat) {
  // B abd E are middle seat
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle seat");
  else console.log("You got lukcy");
};

console.log();

checkMiddlesat("11B");
checkMiddlesat("23C");
checkMiddlesat("3E");

console.log(new String("jonas"));
console.log(typeof new String("jonas"));

console.log(typeof new String("jonas").slice(1));

// -----------------------------------------------------------------//

// split & join

console.log("a+very+nice+string".split("+"));
console.log("namit kadam".split(" "));

const [firstName, lastName] = "namit kadam".split(" ");

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("namit kadam");

// padding

const message = "Go to geat 23! ";
console.log(message.padStart(20, "*").padEnd(26, "*"));
console.log(message.padEnd(20, "*"));

const mastCard = function (number) {
  const str = number + " ";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(mastCard("12212121"));
console.log(mastCard("12212121121212121212"));
console.log(mastCard("12212121121211221211112212221212"));

const message1 = "Bad waether.. All Departues Delayed..";
console.log(message1.repeat(2));

const planeInLine = function (n) {
  console.log(`Ther are ${n} planes in line ${"✈️".repeat(n)}`);
};
planeInLine(2);
planeInLine(4);
planeInLine(6);

const flights =
  "_Delayed_ Departuerl;fa93766109;txt21222333;11:23  + _Delayed_ Departuerl;fa93766109;txt21222333;11:23 +_Delayed_ Departuerl;fa93766109;txt21222333;11:23";

const getCode = (str) => str.slice(0, 3).toUpperCase();
for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output1 = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} ${getCode(from)} ${getCode(to)} (${time.replace(":", "h")})`.padStart(36);
  console.log(output1);
}
