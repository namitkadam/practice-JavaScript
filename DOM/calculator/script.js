const calOutput = document.querySelector(".cal-output");
const calBtn = document.getElementsByClassName("cal-btn");
// const equalBtn = document.getElementsByClassName("equal-btn");
// // const clearBtn = document.querySelector(".clear-btn");

let btnNum = function () {
  const value = this.getAttribute("value");
  console.log(value);

  if (value === "AC") {
    calOutput.value = "";
  } else if (value === "Del") {
    calOutput.value = calOutput.value.slice(0, -1);
  } else if (value === "=") {
    let ans = eval(calOutput.value);
    calOutput.value = ans;
  } else {
    calOutput.value += value;
  }
};

for (let i = 0; i < calBtn.length; i++) {
  calBtn[i].addEventListener("click", btnNum);
}
document.getElementById;
