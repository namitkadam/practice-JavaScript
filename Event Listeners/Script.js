// "use strick";

document.getElementById("parent").addEventListener("click", abc, false);
function abc() {
  document.getElementById("parent").style.border = "30px solid darkorange";
}

let abcd = function () {
  document.getElementById("grandParent").style.border = "30px solid blue";
};
document.getElementById("grandParent").addEventListener("click", abcd);

let btn = document.querySelector(".btn");

btn.addEventListener(
  "click",
  function (e) {
    console.log("hey");
  },
  true
);

btn.addEventListener("click", function (namit) {
  console.log(namit);
  console.log("path", namit.getAvailability);
  console.log(namit.x, namit.y);
  console.log("namit hey");
  document.getElementById("grandParent").style.borderColor = "blue";
});
function inputfunction(element) {
  var x = element.value;
  document.getElementById("text").innerHTML = { x };
  return x;
}
// console.log(x);

function name(fname, lname, age) {
  let a = {
    fname: fname,
    lname: lname,
    age: age,
    favMoves: ["Dhoom", "hum"],
    leving: {
      city: "mumbai",
      country: "india",
    },
  };
  return a;
}
// console.log(name("namit", "kadam", 20));
console.log(name("amit", "kadam", 21, 20));
