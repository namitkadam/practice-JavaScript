let key = prompt("Enter the key");
let value = prompt("Enter the value");
localStorage.setItem(key, value);
console.log(`The value at ${key} is ${localStorage.getItem(key)}`);

if (key === "red") {
  console.log(localStorage.removeItem(key));
}
if (key == "") {
  console.log(localStorage.clear());
}
console.log(localStorage.length);
console.log(localStorage.key(0));
