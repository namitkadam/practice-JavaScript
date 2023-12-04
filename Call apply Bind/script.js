let user1 = {
  name: "Giselle",
  last: "Lancaster",
  age: 28,
};

let user2 = {
  name: "Kirsten",
  last: "Mcdowell",
  age: 28,
};

let userDetails = function (city, country) {
  console.log(`${this.name} ${this.last} ${city} ${country}`);
};

// call() method
userDetails.call(user1, "Mumbai", "India");
userDetails.call(user2, "Strasbourg", "France");

// apply() method
userDetails.apply(user1, ["Delhi", "India"]);
userDetails.apply(user2, ["Bremerhaven", "Germany"]);

// bind() method
let newFun = userDetails.bind(user1, "Delhi", "India");
// userDetails.bind(user2, ["Bremerhaven", "Germany"]);
newFun();

function react() {
  this.labrary = "react";
  this.server = "https://localhost:300";
  document.querySelector("button").addEventListener("click", click.bind(this));

  function click() {
    console.log("button clicked");
    console.log(this);
  }
}
react();
// ----------------------------------------------------------------------------------//

function setUserName(userName) {
  this.userName = userName;
}
function createUser(userName, email, password) {
  setUserName.call(this, userName);

  this.eamil = email;
  this.password = password;
}

const user = new createUser("Raj", "raj@gmail.com", 12345);
console.log(user);

// ----------------------------------------------------------------------------------//

// Write a JavaScript function to check whether an 'input' is an array or not.
is_array = function (input) {
  if (toString.call(input) === "[object Array]") return true;
  return false;
};
console.log(is_array("w3resource"));
console.log(is_array([1, 2, 4, 0]));

let obj = { name: "Namit" };

function hello() {
  return `Hello ${this.name}`;
}

console.log(hello.call(obj));

function sayHello(day, status) {
  return `Hello ${this.name} today is ${day} and feel ${status}`;
}
console.log(sayHello.apply(obj, ["Monday", "good"]));

let helloFn = hello.bind(obj);
console.log("use Bind:", helloFn());

const person = { name: "Piyush" };

function sayHi(age) {
  return `${this.name} is ${age} years`;
}
console.log(sayHi.call(person, 28));
console.log(sayHi.bind(person, 28));
