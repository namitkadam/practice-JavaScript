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
