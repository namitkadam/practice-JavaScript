let key = prompt("Enter the key");
let value = prompt("Enter the value");
sessionStorage.setItem(key, value);
console.log(`The value at ${key} is ${localStorage.getItem(key)}`);
