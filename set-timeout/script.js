setTimeout(() => {
  console.log("hello world");
}, 1000);
// -----------------------------------//
let fName = "namit";
let lName = "kadam";
console.log("1 Namit Kadam");

setTimeout(() => {
  console.log("print after 1ms", fName, lName);
}, 1000);

console.log("2 Full Name :-", fName + lName);

// -----------------------------------//
// click change color
function change() {
  return new Promise(function (resolve, reject) {
    // Setting 2000 ms time
    setTimeout(resolve, 2000);
  }).then(function () {
    document.getElementById("par").innerHTML = "setTimeout after 2000ms";
  });
}
